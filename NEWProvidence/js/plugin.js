$(function(){
    $(".right").click(function(){
        if($(".myCarousel .middlePic").hasClass("active")){
            $(".myCarousel .middlePic").removeClass("active");
            $(".myCarousel .leftPic").removeClass("active");
            $(".myCarousel .rightPic").addClass("active");
        }else 
        if($(".myCarousel .rightPic").hasClass("active")){
            $(".myCarousel .rightPic").removeClass("active");
            $(".myCarousel .middlePic").removeClass("active");
            $(".myCarousel .leftPic").addClass("active");
        }else 
        if($(".myCarousel .leftPic").hasClass("active")){
            $(".myCarousel .leftPic").removeClass("active");
            $(".myCarousel .rightPic").removeClass("active");
            $(".myCarousel .middlePic").addClass("active");
        }
    })
    $(".left").click(function(){
        if($(".myCarousel .middlePic").hasClass("active")){
            $(".myCarousel .middlePic").removeClass("active");
            $(".myCarousel .rightPic").removeClass("active");
            $(".myCarousel .leftPic").addClass("active");
        }else
        if($(".myCarousel .leftPic").hasClass("active")){
            $(".myCarousel .leftPic").removeClass("active");
            $(".myCarousel .middlePic").removeClass("active");
            $(".myCarousel .rightPic").addClass("active");
        }else
        if($(".myCarousel .rightPic").hasClass("active")){
            $(".myCarousel .rightPic").removeClass("active");
            $(".myCarousel .leftPic").removeClass("active");
            $(".myCarousel .middlePic").addClass("active");
        }
    })

    $(".rating ul li").click(function(){
        $(this).toggleClass("rated").prevAll().addClass("rated");
        $(this).nextAll().removeClass("rated")
    })
    $(".plan .ind").click(function(){
        $(this).addClass("active-btn");
        $(".plan .comp").removeClass("active-btn")
    })
    $(".plan .comp").click(function(){
        $(this).addClass("active-btn");
        $(".plan .ind").removeClass("active-btn")
    })
})
