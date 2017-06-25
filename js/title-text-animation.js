    $("#titleh1").blast({ delimiter: "word" }); 
    $("#titleh2").blast({ delimiter: "character" });

    $("#titleh1").velocity({ left: "300px" }, { duration 500, delay: 1000 });
    $("#titleh2").velocity({ opacity: 0 }, { duration 500, delay: 1000 });