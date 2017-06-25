    $("#titleh1").blast({ delimiter: "word" }); 
    $("#titleh2").blast({ delimiter: "character" });

    $("#titleh1").velocity({ left: "300px" }, { duration 500, delay: 1000 });
    $("#titleh2").velocity({ opacity: 0 }, { duration 500, delay: 1000 });

    ===

    $(document).ready(function() {
$(".lead-paragraph-home").velocity("fadeIn", { duration: 1500 });
$("#titleh2").blast({ delimiter: "character", customClass: "subtitleLetter" });

var textAnimation = [{
   elements: $('.subtitleLetter'),
  p: 'transition.swoopIn',
  options: {
    duration: 1000,
    stagger: 50,
    backwards: true,
  }
}];

$.Velocity.RunSequence(textAnimation);
});