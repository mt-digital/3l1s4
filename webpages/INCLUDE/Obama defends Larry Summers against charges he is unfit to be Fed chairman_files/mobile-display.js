document.addEventListener("DOMContentLoaded", () => {
	const isMobile = window.matchMedia('(max-width: 512px)').matches;
	const isNewsnation = document.body.classList.contains('newsnation');
	// Selectors to remove from the page based on the site and device
	const selectors = isNewsnation
		? ['.civic-science-container.civic-science-more-14', '.civic-science-article-container.civic-science-less-14']
		: isMobile
			? ['.civic-science-sidebar-container.civic-science-more-14.civic-no-mr3'
				, '.civic-science-container.civic-science-more-14.civic-no-mr3'
				, '.civic-science-sidebar-container.civic-science-more-14.civic-is-mr3'
				, '.civic-science-sidebar-container.civic-science-less-14.civic-no-mr3'
			]
			: ['.civic-science-container.civic-science-less-14.civic-no-mr3'
				, '.civic-science-article-container.civic-science-less-14.civic-no-mr3'
				, '.civic-science-container.civic-science-more-14.civic-no-mr3'
				, '.civic-science-sidebar-container.civic-science-more-14.civic-no-mr3'
				, '.civic-science-container.civic-science-more-14.civic-is-mr3'
				, '.civic-science-container.civic-science-less-14.civic-is-mr3'
			];
	// Remove elements if any selectors are defined
	selectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(element => element.remove());
	});
});
