		var i = 0;
	  	$("#greeting").click(function(){
	  		i++;
	  		if (i % 2) {
			TweenMax.to(".underline-1", 1.5, {opacity: 1, css:{borderBottomColor: '#FABC11'}, delay: 1});
			TweenMax.to(".underline-2", 1.5, {opacity: 1, css:{borderBottomColor: '#1a1a1a'}, delay: 1});
			TweenMax.to(".greeting", 1.5, {opacity: 1, delay: .5});
			}
			else {
			TweenMax.to(".underline-1", 1.5, {opacity: 1, css:{borderBottomColor: '#26C3FF'}, delay: .5});
			TweenMax.to(".underline-2", 1.5, {opacity: 1, css:{borderColor: '#ffffff'}, delay: .5});
			TweenMax.to(".greeting", 1.5, {opacity: 1, delay: .5});
			}
		});

	$("#greeting").click(function() {
		TweenMax.to(".underline-1", .5, {className:"underline-2"})
		TweenMax.to(".underline-2", .5, {className:"underline-3"})
	});


