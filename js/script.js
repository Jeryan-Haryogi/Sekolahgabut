 $(window).on('load',function(){
    $('#gamb1').addClass('gm');
    $('#gamb2').addClass('gm2');
    $('#gamb3').addClass('gm3');
    $('#text1').addClass('text1');
    $('#text2').addClass('text2');
    $('#gambar2').addClass('gambar2');
  });
  $(window).scroll(function(){
    var scr = $(window).scrollTop();
    if (scr >=  100) {
      $('#mynav').addClass('bg-dark');
      $('.navbar-brand ').addClass('text-white');
      $('.nav-link').addClass('text-white');
      // if (scr >= 300) {
      //   var i = 0;
      //   var Go = 'INFORMASI PPDB';
      //   function ketik()
      //   {
      //     if (i<Go.length) {
      //      document.getElementById('inf').innerHTML += Go.charAt(i);
      //       setTimeout(ketik,90);
      //       i++;
      //     }
      //   }
      //    ketik();
      // }else {

      // }

      if (scr >= 500) {
       $('#gambar3').addClass('gambar3');
       $('#title3').addClass('title3');
       $('#text3').addClass('text3');
     }
   }
   else {
    $('#mynav').removeClass('bg-dark');
    $('.navbar-brand ').removeClass('text-white');
    $('.nav-link').removeClass('text-white');
  }
});