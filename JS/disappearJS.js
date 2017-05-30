$('Document').ready(function() {
    var invisibleImg = 0;
    $('img').click(function() {
        invisibleImg++;
        $(this).css("visibility", "hidden");
        if (invisibleImg < 8) {
            $('h4').text(invisibleImg + " ninjas have vanished into the mist...");
        } else {
            $('h3').css("visibility", "hidden");
            $('h4').text("You are alone amidst the swirls of taunting mist");
        }
    })

    $('.restore').click(function() {
        $('img').css("visibility", "visible");
        $('h3').css("visibility", "visible");
        invisibleImg = 0;
        $('h4').text('');
    })
})
