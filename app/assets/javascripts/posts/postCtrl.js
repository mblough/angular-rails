angular.module('angularRails')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', 'post', function($scope, $stateParams, posts, post) {
	$scope.post = post;

	// Add a comment to a post
	$scope.addComment = function(){
		if($scope.body === '') { return; }
		posts.addComment(post.id, {
			body: $scope.body,
			author: 'user'
		}).success(function(comment) {
			$scope.post.comments.push(comment);
		});
		$scope.body = '';
	};

	// Increment the upvote counter
	$scope.incrementCommentUpvotes = function(comment) {
		posts.upvoteComment(post, comment);
	};
}]);