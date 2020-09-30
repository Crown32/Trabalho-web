//Navbar scrolling change
$(".navbar-down").hide();
$(document).on("scroll", function () {
  if ($(document).scrollTop()>=100) {
    $(".navbar-down").slideDown(200);
    $(".navbar-down").show();
    $(".navbar-down").css("opacity", $(document).scrollTop() / 350); 
  }else{
    $(".navbar-down").slideUp(200);
  }
});

//Script para acordeão
$(document).ready(function () {
  for (let index = 0; index < 5; index++) {
    $(`.minus${index}`).hide();
  }
});
function check(type) {
  const checkbox = document.getElementById(`check${type}`).checked;
  if (checkbox == false) {
    $(`check${type}`).prop("checked", true);
    $(`.plus${type}`).fadeOut(150,()=>{
      $(`.minus${type}`).fadeIn(150);
    });

  } else {
    $(`check${type}`).prop("checked", false);
    $(`.minus${type}`).fadeOut(150,()=>{
      $(`.plus${type}`).fadeIn(150);
    });
  }
}

//Card link openning
$(`#skyhookContent`).hide()
document.getElementById("skyhookCheck").checked=true;

function skyhookContent(aux) {
  const checkbox = document.getElementById("skyhookCheck").checked;

    if (checkbox==true) {
      $("#skyhookContent").slideDown(300);
    }else{
      $("#skyhookContent").slideUp(300);
    }
  
}

//Mosaic js
function mosaic() {
  $("#myMosaic").Mosaic({
    maxRows: 10,
    maxRowHeightPolicy: "crop",
    maxRowHeight: 500,
  });
}

mosaic();

function blured(id, width, height) {
  $.getJSON("../data/Data.json", (data) => {
    const dataContent = data.filter((data) => data.id == id);

    $(`#${id}`).fadeOut(250, () => {
      $(`#${id}`).replaceWith(
        `<div id="${id}"onmouseleave="normal(this.id)" onclick="normal(this.id)" style="display: flex; justify-content: center; align-items: center; flex-direction: column; width:${width}px; height:${height}px;">
      <h5>${dataContent[0].title}</h5>
      <p>${dataContent[0].content}</p>
    </div>`
      );

      $(`#${id}`).hide();
      $(`#${id}`).fadeIn(250);
      mosaic();
    });
  });
  setTimeout(normalAux, 249, id);
  mosaic();
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
      mosaic();
    });
  });
  mosaic();
}

function normalAux(id) {
  if ($(`#${id}`).is(":hover")) {
    console.log(":)");
  } else {
    function normalExec(id) {
      $.getJSON("../data/Data.json", (data) => {
        const dataContent = data.filter((data) => data.id == id);

        $(`#${id}`).fadeOut(250, () => {
          $(`#${id}`).replaceWith(
            `<img
        id="${id}"
        onmouseover="blured(this.id,this.width,this.height)"
        onclick="blured(this.id,this.width,this.height)"
        src="${dataContent[0].src}"
        data-high-res-image-src="${dataContent[0].src}"
        style="width:${dataContent[0].width}px; height:${dataContent[0].height}px"
      /> `
          );

          $(`#${id}`).hide();
          $(`#${id}`).fadeIn(250);
          mosaic();
        });
      });
    }
    setTimeout(normalExec, 400, id);
  }
  mosaic();
}

/*
Div de layout

<div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
  <h5>Ae caralho funcionou até agora</h5>
  <p>puta merda já parou</p>
</div>  
*/

//Elaaa paaartiuuuu e nuunca maais voltttooou SURTOS DE LUCAS
