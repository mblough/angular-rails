angular.module('angularRails')
.factory('posts', [function() {
	var o = {
		posts: []
	};
	return o;
}]);