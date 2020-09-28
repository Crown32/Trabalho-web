//Navbar scrolling change
$(document).on('scroll', function (e) {
  $(".navbar-down").show();
  $('.navbar-down').css('opacity', ($(document).scrollTop() / 350));
});

//Script para acordeão
$(document).ready(function () {
  for (let index = 0; index < 5; index++) {
    $(`.minus${index}`).hide();
  }
});
function check(type) {
  const checkbox = document.getElementById(`check${type}`).checked;
  console.log(checkbox);
  if (checkbox == false) {
    $(`check${type}`).prop("checked", true);
    $(`.plus${type}`).hide();
    $(`.minus${type}`).show();
  } else {
    $(`check${type}`).prop("checked", false);
    $(`.plus${type}`).show();
    $(`.minus${type}`).hide();
  }
}

//Mosaic js
    $('#myMosaic').Mosaic({
      maxRows:10,
      maxRowHeightPolicy:"crop",
      maxRowHeight:500,
      outerMargin:100
    });
