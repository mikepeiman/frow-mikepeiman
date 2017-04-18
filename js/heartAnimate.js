/* To show svg heart icon animation: add to #form-submit: onclick="addHeart()" */
  function addHeart() {
    document.getElementById('form-submit').classList.toggle("clicked");
    setTimeout(removeHeart, 1500);
  }
  function removeHeart() {
    document.getElementById('form-submit').classList.toggle("clicked");
  }