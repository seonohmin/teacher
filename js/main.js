$(function () {
    /* VOD Slider */
    if($(".vod_card").length > 0){
        $(".pager p").text("1/"+ $(".vod_card").length);
    }else{
        $(".pager p").text("0/0");   
    }

    $(".vod_list").slick({
        infinite: false,
        dots: false,
        draggable : false, 
        slidesPerRow: 4,
        rows: 1,
        prevArrow: false,
        nextArrow: false,
        autoplay: false,
        responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesPerRow: 3,
                rows: 1,
                centerMode: false,
                draggable: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesPerRow: 1,
                rows: 1,
                dots: false,
                centerMode: true,
                draggable: true,
                
            }
        }
    ]}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".pager p").text((nextSlide+1)+ "/"+ slick.slideCount);   
    });
        
    $(".vod_list").on('afterChange',function(){
        var curIdx = $(".vod_list .slick-current").attr("data-slick-index");
        curIdx = parseInt(curIdx);

        $(".page_bar_per").animate({
        "width": (( curIdx + 1 ) / $(".slick-slide").length * 100)+"%"
        },300);
    });

    $('.vod_list'). slick('refresh');
});

