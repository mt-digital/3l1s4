(function () {
  const instareadNamespace = {
    adOpenHomePage(url) {
      window.open(url);
    },
    init() {
      this.applyResponsiveStyles();
      this.addEventListeners();
      this.loadIRPlayer();
    },

    // Encode the article title slug
    instareadPlayerTitleSlug(title) {
      if (!title) {
        console.warn("Article title is empty:", title);
        return "";
      }

      if (title.includes("http://") || title.includes("https://")) {
        return encodeURIComponent(title);
      }

      return title
        .replace(/\&nbsp;/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^\w\u00C0-\u017F _-]/g, "") // Retain accented characters
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    },

    // Parse string to JSON or return as string
    parseStringToJsonOrString(input) {
      try {
        return JSON.parse(input);
      } catch {
        return input;
      }
    },

    // Dynamically add styles
    addStyleToIframe(cssContent) {
      const styleElement = document.createElement("style");
      styleElement.textContent = cssContent;
      document.head.appendChild(styleElement);
    },

    // Add styles to iframe div
    addStyleToIframeDiv(cssContent) {
      const styleElement = document.createElement("style");
      styleElement.textContent = cssContent;

      const player = document.querySelector(".instaread-audio-player");
      if (player) player.appendChild(styleElement);
    },

    // Bind events to elements
    bindEvent(element, eventType, callback) {
      if (element.addEventListener) {
        element.addEventListener(eventType, callback, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + eventType, callback);
      }
    },

    // Send a message to the parent window
    sendMessage(message) {
      window.parent.postMessage(message, "*");
    },

    // Generate a unique timestamp rounded to the nearest hour
    getUniqueTimestampFor5Minutes() {
      const currentTimestamp = Date.now();
      const fiveMinutes = 5 * 60 * 1000;

      return new Date(Math.floor(currentTimestamp / fiveMinutes) * fiveMinutes);
    },

    // Load the Instaread player
    loadIRPlayer() {
      const iframe = document.getElementById("instaread_iframe");
      if (!iframe) {
        console.error("Iframe element not found");
        return;
      }
      iframe.setAttribute("loading", "lazy");
      const irArticleUrl = document.location.href;
      const publication = "thehill";
      const pageTitleElement = document.querySelector("h1.page-title,h1.ca-headline-h1");
      let content = pageTitleElement ? pageTitleElement.innerText : "";

      // Fallback to <title> tag if h1.page-title is not available
      if (!content) {
        const titleElement = document.querySelector("title");
        if (titleElement) {
          content = titleElement.innerText
            .replace(/\s*[-|]\s*The Hill$/i, "")
            .trim();
        }
      }

      const irTitleSlug = this.instareadPlayerTitleSlug(content);
      if (
        irTitleSlug !==
        "is-the-latino-vote-the-gops-new-powerhouse-a-wake-up-call-for-democrats"
      ) {
        this.loadAdPushupScript();
      }

      const urlToFind = encodeURIComponent(
        new URL(irArticleUrl).origin +
          new URL(irArticleUrl).pathname.replace(/\/+$/, "")
      );
      iframe.setAttribute(
        "src",
        `https://instaread.co/player?article=${irTitleSlug}&publication=${publication}&article_url=${urlToFind}&version=${this.getUniqueTimestampFor5Minutes().valueOf()}`
      );
    },

    // Load AdPushup script dynamically
    loadAdPushupScript() {
      const pageTitleElement = document.querySelector("h1.page-title");
      let content = pageTitleElement ? pageTitleElement.innerText : "";

      // Fallback to <title> tag if h1.page-title is not available
      if (!content) {
        const titleElement = document.querySelector("title");
        if (titleElement) {
          content = titleElement.innerText
            .replace(/\s*[-|]\s*The Hill$/i, "")
            .trim();
        }
      }

      setTimeout(() => {
        this.injectAdAfterIframe();
      }, 1000);
    },
    injectAdAfterIframe() {
      const targetElement = document.querySelector("#instaread_iframe");
      if (!targetElement) {
        console.error("Target iframe not found. Cannot inject ad.");
        return;
      }

      const adHTML = `
          <div
            id="6cf1da51-8d61-44ae-93aa-8f50da51d605"
            class="_ap_apex_ad ir-player-alignment"
            style="width: 320px; height: 50px;"
            title="Audio Sponsor"
          ></div>`;

      // Check if ad is already injected to avoid duplication
      if (!document.getElementById("6cf1da51-8d61-44ae-93aa-8f50da51d605")) {
        targetElement.insertAdjacentHTML("afterend", adHTML);
      } else {
        console.log("Ad already exists, skipping injection.");
      }
      const adElement = document.getElementById(
        "6cf1da51-8d61-44ae-93aa-8f50da51d605"
      );

      if (adElement) {
        adElement.addEventListener("click", () => {
          this.adOpenHomePage("https://nxslink.thehill.com/join/signup");
        });
      }

      // Load AdPushup script dynamically
      if (!window.adpushup) {
        const script = document.createElement("script");
        script.src = "https://cdn.adpushup.com/45797/adpushup.js";
        script.crossOrigin = "anonymous";
        script.async = true;

        script.onload = () => {
          console.log("AdPushup script loaded.");
          this.triggerAdPushup();
        };

        script.onerror = () => {
          console.error("Failed to load AdPushup script.");
        };

        document.head.appendChild(script);
      } else {
        console.log("AdPushup already initialized.");
        this.triggerAdPushup();
      }
    },

    triggerAdPushup() {
      const adkey = "6cf1da51-8d61-44ae-93aa-8f50da51d605";
      if (!window.adpushup) {
        console.error("AdPushup is not initialized. Cannot trigger ad.");
        return;
      }
      window.adpushup.que = window.adpushup.que || [];
      window.adpushup.que.push(function () {
        window.adpushup.triggerAd(adkey);
        console.log(`Ad triggered with key: ${adkey}`);
      });
    },

    // Add global event listeners
    addEventListeners() {
      this.bindEvent(window, "message", (event) => {
        if (event.origin?.includes("instaread.co")) {
          try {
            const data = this.parseStringToJsonOrString(event?.data);
            if (data?.hideComingSoon) {
              this.addStyleToIframe(`
                  .instaread-audio-player {
                    height: 0px !important;
                    width: 0px !important;
                    padding:0px !important;
                    display: none;
                  }
                `);
            }
          } catch (error) {
            console.error("Error parsing message data:", error);
          }
        }
      });
    },

    // Add all styles dynamically for responsiveness

    applyResponsiveStyles() {
      const pageTitleElement = document.querySelector("h1.page-title");
      let content = pageTitleElement ? pageTitleElement.innerText : "";

      // Fallback to <title> tag if h1.page-title is not available
      if (!content) {
        const titleElement = document.querySelector("title");
        if (titleElement) {
          content = titleElement.innerText
            .replace(/\s*[-|]\s*The Hill$/i, "")
            .trim();
        }
      }

      const styles = `
      @media only screen and (min-width: 1230px) {
        .instaread-audio-player {
          width: 648px;
          height: 145px;
          position: relative;
        }
        .ir-player-alignment, .adp-interscroller-container {
          position: absolute !important;
          margin: auto !important;
          cursor: pointer;
          bottom: 2.7rem !important;
          right: 0.78rem !important;
          z-index: 3 !important;
          margin: 0px auto !important;
        }
        .fa-article__body .instaread-audio-player {
        padding: 0rem !important;
        }
        @supports (-moz-appearance: button) {
          .ir-player-alignment {
            right: 0.91rem !important;
            bottom: 2.7rem !important;
          }
        }
      }
      @media only screen and (min-width: 600px) and (max-width: 999px) {
        .instaread-audio-player {
          width: 648px;
          height: 145px;
          position: relative;
        }
        .ir-player-alignment, .adp-interscroller-container {
          position: absolute !important;
          margin: auto !important;
          bottom: 2.7rem !important;
          cursor: pointer;
          right: 0.78rem !important;
          z-index: 3 !important;
          margin: 0rem auto !important;
        }
        @supports (-moz-appearance: button) {
          .ir-player-alignment {
            right: 0.91rem !important;
            bottom: 2.7rem !important;
          }
        }
       .fa-article__body .instaread-audio-player {
        padding: 0rem !important;
        }
  
      }
      @media only screen and (min-width: 1000px) and (max-width: 1229px) {
        .instaread-audio-player {
          max-width: 100%;
          min-width: 300px;    
          height: 220px;
          position: relative;
        }
        .ir-player-alignment, .adp-interscroller-container {
          position: absolute !important;
          left: 0rem !important;
          right: 0rem !important;
          cursor: pointer;
          bottom: 0.8rem !important;
          z-index: 3 !important;
          margin: 0rem auto !important;
        }
        .fa-article__body .instaread-audio-player {
        padding: 0rem 1.25rem !important;
        }
      }
      @media only screen and (max-width: 659px) {
        .instaread-audio-player {
          max-width: 100%;
          min-width: 300px;    
          height: 220px;
          position: relative;
          
        }
        .ir-player-alignment, .adp-interscroller-container {
          position: absolute !important;
          left: 0rem !important;
          right: -0.013rem !important;
          cursor: pointer;
          bottom: 0.8rem !important;
          z-index: 3 !important;
          margin: 0px auto !important;
        }
      .fa-article__body .instaread-audio-player {
        padding: 0rem 1.25rem !important;
        }
      }
      .article__content .instaread-audio-player {
        margin-top:.2rem !important;
        margin-bottom:.2rem !important;
        margin-left: auto;
        margin-right: auto;
        }
    `;

      this.addStyleToIframeDiv(styles);
    },
  };

  // Initialize the script
  instareadNamespace.init();
})();
