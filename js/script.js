  $(document).ready(function () {
    $(".minus").hide();
  });

  function check(type) {
      const checkbox=document.getElementById(`check${type}`).value;
      console.log(checkbox);
    if (checkbox) {
      $(".plus").hide();
      $(".minus").show();
      console.log("Tô marcado");
    } else {
      console.log("Tô desmarcado");
      $(".plus").show();
      $(".minus").hide();
    }
}

