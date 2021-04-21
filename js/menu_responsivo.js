//Função para funcionamento do menu
$(function(){
    $('#active-icon').click(function(){
        $('nav.nav-mobile ul').slideToggle();
        $('#active-icon').css('display','none');
        $('#disable-icon').fadeIn();
    });
    $('#disable-icon').click(function(){
        $('nav.nav-mobile ul').slideToggle();
        $('#disable-icon').css('display','none');
        $('#active-icon').fadeIn();
    });

});