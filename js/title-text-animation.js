var $title-h1 = $('#title-h1');
var $title-h2 = $('#title-h2')

$("#title-h1").blast({ delimiter: "word" }); 
$("#title-h2").blast({ delimiter: "character" });
$("div").blast({ delimiter: "character" });

$title-h1.velocity({ width: "300px" }, { duration 500, delay: 1000 });
$title-h2.velocity({ opacity: 1 }, { duration 500, delay: 1000 });