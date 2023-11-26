document.getElementById("hamburger").addEventListener("click", () => {
  document.documentElement.classList.toggle("expanded-menu");
});

const header = document.getElementById("header");

const setHeaderHeight = () => {
  document.documentElement.classList.remove("expanded-menu");
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.offsetHeight}px`,
  );
};

window.onresize = setHeaderHeight;
document.addEventListener("DOMContentLoaded", setHeaderHeight);
