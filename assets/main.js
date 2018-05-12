const burgerIcon=$('#burger');
burgerIcon.on('click',function(){
    burgerIcon.toggleClass('open');
    if(burgerIcon.hasClass('open')){
        
        $('nav').css('height','250px');
 
     
    
    }
    else{
        $('nav').css('height','0px');
     
 
    }
})