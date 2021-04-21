$(function(){

  //Funcionalidade para dar refresh no site
  $('header .logo').click(function(){
    window.location = 'index.html';
  });
  //Funcinalidade de crescer e reduzir o header
  $(window).scroll(function(){
      var windowOFFY = $(window).scrollTop(); // Pegar a posição atual do scroll
      //Rodar constantimente 
      $('.container').each(function(){
        if(windowOFFY>150){
          $("header").css('height','65px');
          $("header .logo").css('padding','15px 0');
          $("header .logo").css('padding-left','30px');
          $("header nav.nav-desktop ul li").css('line-height','35px');
          $("header nav.nav-desktop").css('padding','0 30px');
          $("header nav.nav-mobile h1").css('padding','5px 0px');
          }
          return;
        });

      if(windowOFFY < 150){
        $("header").css('height','80px');
        $("header .logo").css('padding','24px 0');
        $("header .logo").css('padding-left','40px');
        $("header nav.nav-desktop ul li").css('line-height','50px');
        $("header nav.nav-desktop").css('padding','0 40px');
        $("header nav.nav-mobile h1").css('padding','12px 0px');
        }
        return;
    });
  
  //Função para colocar borda nos li da nav dependendo da section
  $(".nav-desktop #image-home  li").css('border-bottom','2px solid rgb(221, 98, 10)');
  $(window).scroll(function(){
      var windowOFFY = $(window).scrollTop(); // Pegar a posição atual do scroll
      var windowHeight = $(window).height();  // Pegar o tamnho da janela
      //Rodar constantimente 
      $('section').each(function(){
        var elOFFY = $(this).offset().top; // Distancia do elemento até o topo;

        if(elOFFY+400< (windowOFFY + windowHeight) && elOFFY+400+$(this).height() > windowOFFY){
          $('header nav ul a li').css('border-bottom','0');
          var targetAttr = $(this).attr('target');
          $('.nav-desktop'+' #'+ targetAttr +" li").css('border-bottom','2px solid rgb(221, 98, 10)');
          return;
        }
    });
  });

});