angular.module('angularRails')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
	$scope.post = posts.posts[$stateParams.id];

	// Add a comment to a post
	$scope.addComment = function(){
		if($scope.body === '') { return; }
		$scope.post.comments.push({
			body: $scope.body,
			author: 'user',
			upvotes: 0
		});
		$scope.body = '';
	};

	// Increment the upvote counter
	$scope.incrementUpvotes = function(comment) {
		comment.upvotes += 1;
	};
}]);