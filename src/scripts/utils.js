document.getElementById("hamburger").addEventListener("click", () => {
  document.body.classList.toggle("expanded-menu");
});

const header = document.getElementById("header");

const setHeaderHeight = () => {
  document.body.classList.remove("expanded-menu");
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.offsetHeight}px`,
  );
};

window.onresize = setHeaderHeight;
setHeaderHeight();
