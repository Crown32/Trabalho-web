//Header scolling change
// window.onscroll = () => {
//   let top = window.scrollY;
  
//   if (top <= 300) {
//     $(".navbar").animate({
//       backgroundColor: "none"
//     });
//   } else {
//     $(".navbar").animate({
//       fontSize: 15,
//       backgroundColor: jQuery.Color("rgba(255, 255, 255, 0.9)"),
//     });
//   }
// };

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
