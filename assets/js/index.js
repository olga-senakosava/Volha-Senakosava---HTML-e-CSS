



  function openMenu() {
    document.getElementById("menu-normal").classList.toggle("show");
  }


  window.onclick = function(event) {
  if (!event.target.matches('.burger')) {
    let dropdowns = document.getElementsByClassName("menu-normal");
    let bruh;
    for (bruh = 0; bruh < dropdowns.length; bruh++) {
      let openDropdown = dropdowns[bruh];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
