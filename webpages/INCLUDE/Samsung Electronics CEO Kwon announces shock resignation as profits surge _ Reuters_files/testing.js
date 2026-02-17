class KeepWatching {
  constructor(container, api, showAfter = 10, skipAfter = 5) {
    this.api = api;
    this.container = container;
    this.SECONDS_BEFORE_PROMPT = showAfter;
    this.WAIT_BEFORE_SKIP = skipAfter;
    this.TOTAL_WAIT_TIME = this.SECONDS_BEFORE_PROMPT + this.WAIT_BEFORE_SKIP;

    this.timeElapsed = 0;
    this.pauseTimer = 0;
    this.timer = null;
    this.stayFlag = false;
    this.playlistData = [];
    this.stayCard = null;
    this.keepWatchingButton = null;

    this.init();
  }

  async init() {
    this.playlistData = await this.api.getAllMetadata();

    this.api.on(this.api.configEvents.NewVideo, () => {
      this.initStayCard();
      this.manageCardContent(this.api.getVideoIndex());
    });

    this.api.on(this.api.configEvents.Pause, () => {this.dismissStayCard();this.stayFlag=false;});

    this.api.on(this.api.configEvents.AdSkipped, () => this.initStayCard());

    this.api.on(this.api.configEvents.AdCompleted100, () => this.initStayCard());

    this.api.on(this.api.configEvents.VideoStarted, () => this.initStayCard());

    this.api.on(this.api.configEvents.Play, () => {
      this.stayFlag ? this.dismissStayCard() : this.resumeVideo();
    });
  }

  setTime = () => {
    this.timeElapsed++;
    this.pauseTimer = this.timeElapsed;

    if (this.timeElapsed === 5 && !this.stayFlag && !this.container.querySelector(".cnx-stay-next")) {
      this.appendStayCard(this.api.getVideoIndex());
    }

    if (this.timeElapsed === this.SECONDS_BEFORE_PROMPT && !this.stayFlag) {
      this.revealStayCard();
    }

    if (this.timeElapsed === this.TOTAL_WAIT_TIME && !this.stayFlag) {
      this.handleNextVideo();
    }

    if (this.stayFlag) {
      this.hideStayCard();
      clearInterval(this.timer);
      this.timeElapsed = 0;
    }
  };

  revealStayCard() {
    this.container.querySelector(".cnx-stay-next")?.classList.add("cnx-fade-in-up-next");
    this.container.querySelector(".cnx-stay-progress-bar-temp")?.classList.add("cnx-stay-progress-bar");
  }

  hideStayCard() {
    this.container.querySelector(".cnx-stay-next")?.classList.remove("cnx-fade-in-up-next");
    setTimeout(() => {
      this.container.querySelector(".cnx-stay-progress-bar-temp")?.classList.remove("cnx-stay-progress-bar");
    }, 500);
  }

  handleNextVideo() {
    try {
      this.api.nextVideo();
    } catch (error) {
      console.error("Error skipping to next video:", error);
    }
  }

  dismissStayCard() {
    this.stayFlag = true;
    clearInterval(this.timer);
    this.hideStayCard();
    this.timeElapsed = 0;
  }

  resumeVideo() {
    this.timeElapsed = this.pauseTimer;
    clearInterval(this.timer);
    this.timer = setInterval(this.setTime, 1000);
  }

  initStayCard() {
    this.stayFlag = false;
    this.hideStayCard();
    clearInterval(this.timer);
    this.timeElapsed = 0;
    this.timer = setInterval(this.setTime, 1000);
  }

  appendStayCard(currentIndex) {
    let next;
    try {
      next = this.playlistData[currentIndex + 1] || this.playlistData[0];
    } catch (e) {
      console.error("Error loading next video metadata", e);
      return;
    }

    const nextVideoThumbnailURL = next.thumbnail.split("//")[1];
    const nextVideoTitle = next.title;

    const stayNextCard = `
      <cnx class="cnx-stay-next cnx-up-next-container cnx-hide-on-single-video">
        <cnx class="cnx-up-next-box">
          <cnx class="cnx-up-next-box-image">
            <img src="https://${nextVideoThumbnailURL}" style="display: block;">
          </cnx>
          <cnx class="cnx-up-next-box-gradient"></cnx>
          <cnx class="cnx-up-next-box-text">${nextVideoTitle}</cnx>
          <cnx class="cnx-up-next-box-button">
            <cnx class="cnx-up-next-box-button-text">NEXT</cnx>
          </cnx>
        </cnx>
      </cnx>
    `;

    this.container.insertAdjacentHTML("beforeend", stayNextCard);
    this.stayCard = this.container.querySelector(".cnx-stay-next");
    this.addCardEventListeners();

    const progressMarkup = `
      <div class="cnx-stay-meter">
        <span style="width:100%;">
          <span class="cnx-stay-progress-bar-temp"></span>
        </span>
      </div>
      <div class="cnx-keep-watching-prompt">
        <span style="width:100%;">
          <cnx class="cnx-up-next-box-button-text cnx-keep-watching-button">KEEP WATCHING</cnx>
        </span>
      </div>
    `;

    this.container.querySelector(".cnx-stay-next .cnx-up-next-box .cnx-up-next-box-gradient")
      ?.insertAdjacentHTML("beforeend", progressMarkup);

    this.keepWatchingButton = this.container.querySelector(".cnx-keep-watching-button");
    this.addKeepWatchingListeners();
  }

  addCardEventListeners() {
    ["click", "touch"].forEach(type => {
      this.stayCard?.addEventListener(type, e => {
        e.stopPropagation();
        this.api.nextVideo();
      });
    });

    ["mousedown", "mouseup"].forEach(type => {
      this.stayCard?.addEventListener(type, e => e.stopPropagation());
    });
  }

  addKeepWatchingListeners() {
    ["click", "touch"].forEach(type => {
      this.keepWatchingButton?.addEventListener(type, e => {
        e.stopPropagation();
        this.dismissStayCard();
      });
    });

    ["mousedown", "mouseup"].forEach(type => {
      this.keepWatchingButton?.addEventListener(type, e => e.stopPropagation());
    });
  }

  manageCardContent(currentIndex) {
    try {
      const nextItem = this.playlistData[currentIndex + 1] || this.playlistData[0];
      const nextVideoThumbnailURL = nextItem.thumbnail.split("//")[1];
      const nextVideoTitle = nextItem.title;

      this.container.querySelector(".cnx-stay-next .cnx-up-next-box-text").innerHTML = nextVideoTitle;
      this.container.querySelector(".cnx-stay-next .cnx-up-next-box-image img").src = "https://" + nextVideoThumbnailURL;
    } catch (error) {
      console.error("Error updating stay card content", error);
    }
  }
}

// Optional: expose globally for dynamic injection
window.KeepWatching = KeepWatching;
