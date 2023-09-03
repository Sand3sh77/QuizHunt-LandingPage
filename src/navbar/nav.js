// Get the total height of the webpage (document)
// window.onload = function() {
  let progress = document.getElementsByClassName("progressbar");
  let nav = document.getElementsByClassName("nav_progress_container");
  window.onscroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 50) {
      nav[0].classList.add("nav_fixed");
    } else if (scrollPosition < 50) {
      nav[0].classList.remove("nav_fixed");
    }
    
    // TO MAKE THE PRGORESS BAR CHANGE ON SCROLL
    var totalPageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    var totalScrollableDistance = totalPageHeight - window.innerHeight;
  
  let bar_percentage = (scrollPosition * 100) / totalScrollableDistance;
  progress[0].style.translate = (bar_percentage - 100) + "%";
};
// }
