const ScrollSpy = (setactiveSideBtn) => {
  const secAbout = document.getElementById("about");
  const secprojects = document.getElementById("projects");
  const secExperience = document.getElementById("experience");
  const secFooter = document.getElementById("contact");

  window.onscroll = (e) => {
    const scrollYPos = Math.trunc(window.scrollY) + 1;
    setactiveSideBtn({});

    if (scrollYPos >= secAbout.offsetTop) {
      setactiveSideBtn({ abActive: true });
    }

    if (scrollYPos >= secprojects.offsetTop) {
      setactiveSideBtn({ prActive: true });
    }

    if (scrollYPos >= secExperience.offsetTop) {
      setactiveSideBtn({ exActive: true });
    }

    if (scrollYPos >= secFooter.offsetTop) {
      setactiveSideBtn({ coActive: true });
    }
  };
};

export default ScrollSpy;
