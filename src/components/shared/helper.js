export const scrollIntersectionObserver = () => {
  const sectionFaders = document.querySelectorAll(".secFader");
  const sidebarFaders = document.querySelectorAll(".sideFader");
  const navFader = document.querySelectorAll(".navFader");
  const scrollOptions = { rootMargin: "0px 0px -50px 0px" };
  const scrollObserve = new IntersectionObserver((entries, scrollObserve) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("disappear");
        scrollObserve.unobserve(entry.target);
      }
    });
  }, scrollOptions);

  sectionFaders.forEach((item) => {
    scrollObserve.observe(item);
  });
  sidebarFaders.forEach((item) => {
    scrollObserve.observe(item);
  });
  navFader.forEach((item) => {
    scrollObserve.observe(item);
  });
};

export const sideScrollIntersectionObserver = () => {
  const scrollSections = document.querySelectorAll(".scrollSections");
  const sidebarLinks = document.querySelectorAll(".sideScroll");
  const sideOptions = { threshold: 0.325 };
  const sideScrollObserve = new IntersectionObserver(
    (entries, sideScrollObserve) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case "about":
              sidebarLinks[0].classList.add("active");
              break;
            case "projects":
              sidebarLinks[1].classList.add("active");
              break;
            case "experience":
              sidebarLinks[2].classList.add("active");
              break;
            case "contact":
              sidebarLinks[3].classList.add("active");
              break;
            default:
          }
        } else {
          switch (entry.target.id) {
            case "about":
              sidebarLinks[0].classList.remove("active");
              break;
            case "projects":
              sidebarLinks[1].classList.remove("active");
              break;
            case "experience":
              sidebarLinks[2].classList.remove("active");
              break;
            case "contact":
              sidebarLinks[3].classList.remove("active");
              break;
            default:
          }
        }
      });
    },
    sideOptions
  );

  scrollSections.forEach((item) => {
    sideScrollObserve.observe(item);
  });
};
