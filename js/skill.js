$(function (){
    var scene01 = true;
    var scene02 = true;
    var scene03 = true;
   

    $(window).scroll(function(){
        var sct = $(document).scrollTop();
        if(sct > 2300 && scene01 == true) {
            scene01 = false;
            $('.bar1').stop().delay(500).css({})
            $('.bar2').stop().delay(1000).css({})
            $('.bar3').stop().delay(2000).css({})
            $('.bar4').stop().delay(300.).css({})
            $('.bar5').stop().delay(4000).css({})
            $('.bar6').stop().delay(5000).css({})
            console.log(bar01)
        } else if (sct < 2200 && scene01 == false) {
            scene01 = true;
            $('.bar1').stop().delay(0).css({})
            $('.bar2').stop().delay(0).css({})
            $('.bar3').stop().delay(0).css({})
            $('.bar4').stop().delay(0).css({})
            $('.bar5').stop().delay(0).css({})
            $('.bar6').stop().delay(0).css({})
        }

        
    })
})