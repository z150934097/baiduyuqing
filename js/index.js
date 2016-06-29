$(function(){
	var $xiala=$(".xiala")
	var $menu=$(".response-menu")
	var $guanbi=$(".guanbi")
  var $close=$(".close")  
	var $mask=$(".mask")
	var $response=$(".response")
  var $zhuce=$(".zhuce")
  var $form=$(".response-form")
	var cw=document.documentElement.clientWidth
	$mask.hide()
    $xiala.on("click",function(){
        $menu.slideToggle();
        $mask.fadeIn();
        $menu.css({display:"block"})
    })
   $guanbi.on("click",function(){
    $menu.slideToggle();
    $mask.fadeOut();
}) 
    $zhuce.on("click",function(){
        $form.slideToggle();
        $mask.fadeIn();
        $form.css({display:"block"})
    })
   $close.on("click",function(){
    $form.slideToggle();
    $mask.fadeOut();
})    
   $(window).resize(function(){
   	if($mask.width()>=768){
   		$mask.css({display:"none"})
   		$menu.css({display:"none"})
      $form.css({display:"none"})
   	}
   })
})
//---------------mousewheel

  
