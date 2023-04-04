$(document).ready(() => {
  const text = document.querySelector(".text-typing");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "IT Support";
    }, 4000);
  };
  textLoad();
  setInterval(textLoad, 8000);

  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-links");
  const x = document.querySelector(".x");

  hamburger.addEventListener("click", () => {
    navbar.style.right = "0";
    x.style.display = "inline-block";
    hamburger.style.display = "none";
  });
  x.addEventListener("click", () => {
    navbar.style.right = "-100%";
    x.style.display = "none";
    hamburger.style.display = "inline-block";
  });

  // scroll efect
  $(window).scroll(() => {
    let nScroll = $(this).scrollTop();
    // console.log(nScroll);
    // section about
    if (nScroll >= 500) {
      $(".title-about").css({
        opacity: 1,
      });
      $(".teks-about").css({
        opacity: 1,
        left: 0,
      });
    } else {
      $(".title-about").css({
        opacity: 0,
      });
      $(".teks-about").css({
        opacity: 0,
        left: "-20rem",
      });
    }

    // section skills
    if (nScroll >= 1214) {
      $(".title-skill").css({
        opacity: 1,
        top: 0,
      });
      $("#skill1").fadeIn(200, () => {
        $("#skill2").fadeIn(200, () => {
          $("#skill3").fadeIn(200, () => {
            $("#skill4").fadeIn(200, () => {
              $("#skill5").fadeIn(200, () => {
                $("#skill6").fadeIn(200, () => {
                  $("#skill7").fadeIn(200, () => {
                    $("#skill8").fadeIn(200);
                  });
                });
              });
            });
          });
        });
      });
    } else {
      $(".title-skill").css({
        opacity: 0,
        top: "-10rem",
      });
      $("#skill1").fadeOut();
      $("#skill2").fadeOut();
      $("#skill3").fadeOut();
      $("#skill4").fadeOut();
      $("#skill5").fadeOut();
      $("#skill6").fadeOut();
      $("#skill7").fadeOut();
      $("#skill8").fadeOut();
    }

    // sertifikat section
    if (nScroll >= 1870) {
      $(".title-sertif").css({
        opacity: 1,
        top: 0,
      });
      $("#sertif1").fadeIn(300, () => {
        $("#sertif2").fadeIn(300, () => {
          $("#sertif3").fadeIn(300, () => {
            $("#sertif4").fadeIn(300, () => {
              $("#sertif5").fadeIn(300, () => {
                $("#sertif6").fadeIn(300);
              });
            });
          });
        });
      });
    } else {
      $(".title-sertif").css({
        opacity: 0,
        top: "-10rem",
      });
      $("#sertif1").fadeOut();
      $("#sertif2").fadeOut();
      $("#sertif3").fadeOut();
      $("#sertif4").fadeOut();
      $("#sertif5").fadeOut();
      $("#sertif6").fadeOut();
    }

    // kontak section
    if (nScroll >= 2514) {
      $(".title-kontak").css({
        opacity: 1,
        top: 0,
      });
      $(".desc-kontak").css({
        opacity: 1,
        left: 0,
      });
      $(".box-contact").css({
        opacity: 1,
        right: 0,
      });
    } else {
      $(".title-kontak").css({
        opacity: 0,
        top: "-10rem",
      });
      $(".desc-kontak").css({
        opacity: 0,
        left: "-20rem",
      });
      $(".box-contact").css({
        opacity: 0,
        right: "-20rem",
      });
    }
  });
});
