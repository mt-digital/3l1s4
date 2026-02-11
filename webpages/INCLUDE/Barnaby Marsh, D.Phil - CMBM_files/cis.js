(function($) {
    $( document ).ready(function() {
        $(".customInfiniteScroll").each(function () {
            var container = $(this);
            $(container).find('.customInfiniteScroll__loadMore .btn-loading').addClass('loading');

            // Add listener to load more button.
            $(this).find('.customInfiniteScroll__loadMore button').on('click', function () {
                var container = $(this).parents('.customInfiniteScroll');
                $(container).attr('data-paged', parseInt($(container).attr('data-paged')) + 1);
                $(container).find('.customInfiniteScroll__loadMore .btn-loading').addClass('loading');
                getCisPage('/wp-json/cif/v1/posts', extractParameters(container[0]))
                .then(data => {
                    appendResults(container, data);
                });
            });

            $(this).find('.customInfiniteScroll__filters .customInfiniteScroll__filterButton').on('click', function (e) {
                e.preventDefault();
                var container = $(this).parents('.customInfiniteScroll');

                $(container).find('.customInfiniteScroll__filters .customInfiniteScroll__filterButton').removeClass('active');
                $(this).addClass('active');

                // Copy filter attributes to container.
                var dataset = $(this).data();
                for( var d in dataset) {
                    $(container).attr('data-' + d, dataset[d]);
                }
                $(container).attr('data-paged', 1);

                if ($(container).find('.customInfiniteScroll__filters__form').hasClass('submitListenerProcessed')) {
                    $(container).find('.customInfiniteScroll__filters__form').trigger('submit');
                }
            });
            $(this).find('.customInfiniteScroll__filter_select select').on('change', function () {
                var destinationButton = $('.customInfiniteScroll__filters .customInfiniteScroll__filterButton[data-filter_'+$(this).attr('name')+'_value="'+$(this).val()+'"]');
                $(destinationButton).click();
            });
            $(this).find('.customInfiniteScroll__search input').on('input', debounce(function () {
                $(container).attr('data-s', $(this).val());

                if ($(container).find('.customInfiniteScroll__filters__form').hasClass('submitListenerProcessed')) {
                    $(container).find('.customInfiniteScroll__filters__form').trigger('submit');
                }
            }, 200));

            // Trigger the first load once.
            if ($(this).find('.customInfiniteScroll__search input').length > 0 && $(this).find('.customInfiniteScroll__search input').val() !== '') {
                // Do not trigger input because of the debounce that will execute the code too late.
                $(container).attr('data-s', $(this).find('.customInfiniteScroll__search input').val());
            }
            if ($(this).find('.customInfiniteScroll__filter_select select option[selected]').length > 0) {
                var selectedOption = $(this).find('.customInfiniteScroll__filter_select select option[selected]');
                $(selectedOption).parent().trigger('change');
            }

            // Add listener on the form.
            $(this).find('.customInfiniteScroll__filters__form').on('submit', function (e) {
                e.preventDefault();
                var container = $(this).parents('.customInfiniteScroll');

                $(container).find('.customInfiniteScroll__content__inner').html('');
                $(container).find('.customInfiniteScroll__loadMore .btn-loading').addClass('loading');
                getCisPage('/wp-json/cif/v1/posts', extractParameters(container[0]))
                .then(data => {
                    $(container).find('.customInfiniteScroll__loadMore').css('display', 'block');
                    appendResults(container, data);
                });
            }).addClass('submitListenerProcessed').trigger('submit');
            // If there are no filters, just do one load.
            if ($('.customInfiniteScroll__filters__form').length === 0) {
                getCisPage('/wp-json/cif/v1/posts', extractParameters(container[0]))
                .then(data => {
                    $(container).find('.customInfiniteScroll__loadMore').css('display', 'block');
                    appendResults(container, data);
                });
            }
        });
    });

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function appendResults(el, data) {
        $(el).find('.customInfiniteScroll__loadMore .btn-loading').removeClass('loading');
        var html = '';
        for (var j = 0; j < data.items.length; j++) {
            html += data.items[j];
        }
        $(el).find('.customInfiniteScroll__content__inner').append(html);
        var messageResults = (data.count > 1) ? (data.count + ' Results') : (data.count + ' Result');
        $(el).find('.customInfiniteScroll__count__inner').html(messageResults);

        // Remove load more if the number of results is lower than the limit.
        var params = extractParameters(el[0]);
        if (data.items.length < parseInt(params.posts_per_page)) {
            $(el).find('.customInfiniteScroll__loadMore').css('display', 'none');
        }
        // Custom code for Rsaw.
        listenCLickableCard($(el).find('.customInfiniteScroll__content__inner'));
    }

    // This function is a copy of the one in app.js in the theme.
    function listenCLickableCard(context) {
        $('.clickableCard', context).each(function () {
            if (!$(this).hasClass('processed')) {
                $(this).on('click', function () {
                    var destination = $(this).find('.mainLink').attr('href');
                    window.location=destination;
                });
            }
            $(this).addClass('processed');
        });
    }

    function extractParameters(el) {
        var dataset = el.dataset;

        var params = {};
        for( var d in dataset) {
            params[d] = dataset[d];
        }

        if (params.mobile_posts_per_page && $(window).width() <= 576) {
            params.posts_per_page = params.mobile_posts_per_page;
        }

        return params;
    }

    async function getCisPage(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data),
        });
        return response.json();
    }
})( jQuery );