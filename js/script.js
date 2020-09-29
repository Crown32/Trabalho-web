//Navbar scrolling change
$(document).on("scroll", function (e) {
  $(".navbar-down").show();
  $(".navbar-down").css("opacity", $(document).scrollTop() / 350);
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
function blured(id, width, height) {
  $.getJSON("../data/Data.json", (data) => {
    const dataContent = data.filter((data) => data.id == id);

    $(`#${id}`).fadeOut(250, () => {
      $(`#${id}`).replaceWith(
        `<div id="${id}"onmouseleave="normal(this.id)" style="display: flex; justify-content: center; align-items: center; flex-direction: column; width:${width}px; height:${height}px;">
      <h5>${dataContent[0].title}</h5>
      <p>${dataContent[0].content}</p>
    </div>`
      );

      $(`#${id}`).hide();
      $(`#${id}`).fadeIn(250);

      $("#myMosaic").Mosaic({
        maxRows: 10,
        maxRowHeightPolicy: "crop",
        maxRowHeight: 500,
      });
    });
  });
}

function normal(id) {
  $.getJSON("../data/Data.json", (data) => {
    const dataContent = data.filter((data) => data.id == id);

    $(`#${id}`).fadeOut(250, () => {
      $(`#${id}`).replaceWith(
        `<img
    id="${id}"
    onmouseover="blured(this.id,this.width,this.height)"
    src="${dataContent[0].src}"
    data-high-res-image-src="${dataContent[0].src}"
    style="width:${dataContent[0].width}px; height:${dataContent[0].height}px"
  /> `
      );

      $(`#${id}`).hide();
      $(`#${id}`).fadeIn(250);

      $("#myMosaic").Mosaic({
        maxRows: 10,
        maxRowHeightPolicy: "crop",
        maxRowHeight: 500,
      });
    });
  });
}

$("#myMosaic").Mosaic({
  maxRows: 10,
  maxRowHeightPolicy: "crop",
  maxRowHeight: 500,
});


/*
Div de layout

<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <h5>Ae caralho funcionou até agora</h5>
  <p>puta merda já parou</p>
</div>  
*/

//Elaaa paaartiuuuu e nuunca maais voltttooou SURTOS DE LUCAS
