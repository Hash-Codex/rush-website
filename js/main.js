$("#videoModal").on("shown.bs.modal", function () {
  $("#videoControl")[0].play();
  $(".supreme-container").addClass("video-blur");
});
$("#videoModal").on("hidden.bs.modal", function () {
  $("#videoControl")[0].pause();
});
function videoModal(src) {
  $("#videoContainer").empty();
  $("#videoContainer").append(
    `
    <video id="videoControl" controls class="w-100 h-100 m-0">
    <source src="${src}" type="video/mp4">
    </video>
    `
  );
}
