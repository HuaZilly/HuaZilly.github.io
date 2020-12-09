/*=========== Func DropDown =============  */
function DropDown() {
    let BannerRemoveToggle=document.querySelector('.banner');
    let MenuDrop=document.querySelector('.menu-drop');
    let HoverMenuTop=document.querySelectorAll('.menu__item');
    let ItemOfMenu=document.querySelectorAll('.menu__hidden');
    
    /* ========= Loop Hover Menu ========== */

    for(let i=0;i<HoverMenuTop.length;i++){
        HoverMenuTop[i].addEventListener('mousemove',()=>{
            ItemOfMenu[i].classList.toggle('is-toggle');
        })
        BannerRemoveToggle.addEventListener('mousemove',()=>{
            ItemOfMenu[i].classList.remove('is-toggle');
        })
    }
}
// ============= Jquery Carosel ===============
$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});


  $('#carouselExample').carousel({ 
                interval: 2000
        });


  $(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });
    
  });
// =================== End Carosel =================
DropDown()
