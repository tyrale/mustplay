(function($) {
    $(document).ready(function() {
        // ----------------------------------------------
        $(".post-meta a:contains('yellow')").addClass('hidden');
        $(".post-meta a:contains('grey')").addClass('hidden');
        $(".post-meta a:contains('purple')").addClass('hidden');
        $(".post-meta a:contains('blue')").addClass('hidden');
        $(".post-meta a:contains('green')").addClass('hidden');
        $(".post-meta a:contains('red')").addClass('hidden');
        $(".post-meta a:contains('nowplaying')").addClass('hidden');
        $(".post-meta a:contains('black')").addClass('hidden');
        $(".post")
    });
    // ----------------------------------------------
    $(".icon-rss").click(function(event) {
        /* Act on the event */
        mixpanel.track("RSS Subscriber");
    });
    $(".tag-unlocks").click(function(event) {
        /* Act on the event */
        mixpanel.track("Unlocks");
    });
    // ----------------------------------------------
    var hasLooped = false;
    if(!hasLooped){
        $( "div" ).each(function() {
            $( ".bgImg" ).each(function(){
                var $this = $(this);
                $this.clone().prependTo($this.parent())
            });
            $(".bgImg").removeClass('bgImg');   
        });
        hasLooped = true;
    }

    var addCheck = false;
    if(!addCheck){
        $( "div" ).each(function() {
            $( ".bgImg" ).each(function(){
                var $this = $(this);
                $this.clone().prependTo($this.parent())
            });
            $(".bgImg").removeClass('bgImg');   
        });
        addCheck = true;
    }


    $('.playMarker').click(function() {
        $(this).parent().parent().parent().parent(".post").addClass('played');
    });
    $('.post-header').click(function() {
        $(this).parent(".post").removeClass('played');
    });


    var menu = $('#navigation-menu');
    var menuToggle = $('#js-mobile-menu');
    var signUp = $('.sign-up');

    $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
    });

    // underline under the active nav item
    $(".nav .nav-link").click(function() {
    $(".nav .nav-link").each(function() {
      $(this).removeClass("active-nav-item");
    });
    $(this).addClass("active-nav-item");
    $(".nav .more").removeClass("active-nav-item");
    });

    
})(jQuery);
