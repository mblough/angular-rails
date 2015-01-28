angular.module('angularRails')
.factory('posts', '$http', [function($http) {
	o.getAll = function() {
		return $http.get('/posts.json').success(function(data) {
			angular.copy(data, o.posts);
		});
	};
}]);