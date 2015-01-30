angular.module('angularRails')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', 'post', function($scope, $stateParams, posts, post) {
	$scope.post = post;

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