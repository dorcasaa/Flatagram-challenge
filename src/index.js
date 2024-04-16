document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.getElementById('card-title');
  const imageElement = document.getElementById('card-image');
  const likeCountElement = document.getElementById('like-count');
  const likeButton = document.getElementById('like-button');
  const commentsList = document.getElementById('comments-list');
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment');

  // Function to update like count
  function updateLikeCount() {
      const likeCount = parseInt(likeCountElement.textContent);
      likeCountElement.textContent = likeCount + 1 + ' likes';
  }

  // Function to add new comment
  function addNewComment(commentContent) {
      const newComment = document.createElement('li');
      newComment.textContent = commentContent;
      commentsList.appendChild(newComment);
  }

  // Event listener for like button
  likeButton.addEventListener('click', function() {
      updateLikeCount();
  });

  // Event listener for comment submission
  commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newCommentContent = commentInput.value.trim();
      if (newCommentContent !== '') {
          addNewComment(newCommentContent);
          commentInput.value = ''; // Clear input field after submission
      }
  });
});
