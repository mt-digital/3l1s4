window.domReady(function() {
    if (typeof console !== 'undefined') {
        console.info('Sailthru onsite JS is loaded. Initializing Sailthru...');
    }

    if (typeof sailthruTag === 'undefined' || !sailthruTag) {
        return;
    }

    if (sailthruTag.isCustom) {
        if (typeof Sailthru === 'undefined') {
            return;
        }

        Sailthru.init({
            customerId: sailthruTag.options.customerId,
            isCustom: true,
            autoTrackPageview: sailthruTag.options.autoTrackPageview,
            useStoredTags: sailthruTag.options.useStoredTags,
            excludeContent: sailthruTag.options.excludeContent,
        });
    } else {
        if (typeof Sailthru === 'undefined') {
            return;
        }

        Sailthru.init({
            customerId: sailthruTag.options.customerId
        });
    }
});
