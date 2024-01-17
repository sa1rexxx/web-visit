document.addEventListener("DOMContentLoaded", function () {
  var langSwitcher = document.getElementById("lang");

 
  function toggleLanguage() {
    var ruElements = document.querySelectorAll(".ru-content");
    var engElements = document.querySelectorAll(".eng-content");

   
    ruElements.forEach(function (element) {
      element.style.display = "none";
    });
    engElements.forEach(function (element) {
      element.style.display = "none";
    });

    
    if (langSwitcher.checked) {
      ruElements.forEach(function (element) {
        element.style.display = "block";
      });
    } else {
      engElements.forEach(function (element) {
        element.style.display = "block";
      });
    }
  }

  
  langSwitcher.addEventListener("change", toggleLanguage);
  toggleLanguage();
});


