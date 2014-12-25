(function() {

	angular
		.module('bookstore')
		.filter('limitBy', limitByFilter);

	function limitByFilter() {
		return function(text, maxLen) {
			var cut = text.substr(0, maxLen);
			return cut.substr(0, Math.min(cut.length, cut.lastIndexOf(' ')));
		}
	}

})();