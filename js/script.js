const navbar = document.getElementById("navbar");
const navLink = document.getElementById("nav-link");
const video = document.getElementById("home-video");

document.body.style.overflow = "hidden";

    video.addEventListener('loadeddata', function() {
        video.play();
        $(".loader-wrapper").fadeOut("slow");
        document.body.style.overflow = "auto";
    });
    // video.addEventListener("canplay", function() {
    //     setTimeout(function() {
    //       video.play();
    //     }, 5000);
    //   });
    const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/codepen/danimal/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}

window.onscroll = () => {
    if (window.pageYOffset == 0) {
        // navbar.style.minHeight = "140px";
        navbar.style.backgroundColor = "transparent";
        // navbar.style.color = "white";
        // navbar.classList.remove('nav-full');
        // navbar.classList.add('nav-top');
        // navbar.classList.remove('navbar-light');
        // navbar.classList.add('navbar-dark');
    } else {
        // navbar.style.minHeight = "60px";
        navbar.style.backgroundColor = "var(--darkest)";
        // navbar.style.color = "black";
        // navbar.classList.remove('nav-top');
        // navbar.classList.add('nav-full');
        // navbar.classList.remove('navbar-dark');
        // navbar.classList.add('navbar-light');

    }
};

// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');