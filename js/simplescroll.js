<script>
/* simple scroll nav from https://coderwall.com/p/z7gfjq/scroll-to-page-sections-with-nav-links */

$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top -175
    }, 850, 'swing');
});
</script>