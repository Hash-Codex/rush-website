$('#exampleModal3').on('shown.bs.modal', function () {
    $('#video1')[0].play();
    $('.supreme-container').addClass('video-blur');
  })
  $('#exampleModal3').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
  })
  function vc(id) {
    $(id).get(0).pause()
  }
