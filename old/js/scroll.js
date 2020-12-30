$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 90) {
        $(".bg-light").addClass("scrolled");
		$(".nav-link").addClass("scrolled");
		$(".navbar-brand-img").addClass("scrolled");
		$(".navbar-toggler").addClass("scrolled");
    }
	
	if (scroll < 90) {
        $(".bg-light").removeClass("scrolled");
		$(".nav-link").removeClass("scrolled");
		$(".navbar-brand-img").removeClass("scrolled");
		$(".navbar-toggler").removeClass("scrolled");
    }
	
	
});
