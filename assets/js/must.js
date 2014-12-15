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
    var fancyHeader = false;
    if(!fancyHeader){
        $("h1, h2").each(function(){
            var $this = $(this);
            var gameName = $this.html()
            $this.attr('data-content', gameName);
        });
        fancyHeader = true;
    }

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

    // var addCheck = false;
    // if(!addCheck){
    //     $( ".post-header" ).each(function() {
    //         $( ".add-check" ).each(function(){
    //             var $this = $(this);
    //             $this.prepend("<span class='playMarker'><a>✔︎</a></span>")
    //         });
    //         $(".add-check").removeClass('add-check');   
    //     });
    //     addCheck = true;
    // }

    // $('.post-header').click(function() {
    //     alert("post-header");
    //     $(this).parent().parent().toggleClass('played');
    // });
    $('.playMarker').click(function() {
        alert("playmaker");
        $(this).parent().parent().parent().toggleClass('played');
    });

    
})(jQuery);
