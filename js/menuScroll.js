//Funcionalidade de linkar sessões
$(function(){
    $('nav a').click(function(){
        var idSection = $(this).attr('id');
        var offSetTop = $("."+idSection).offset().top;
        
        $('html,body').animate({'scrollTop':offSetTop-72});
        return false;
    });
});