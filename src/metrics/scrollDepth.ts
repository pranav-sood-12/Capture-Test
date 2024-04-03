export const captureScrollDepth = () => {
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const percentageScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    if (percentageScrolled >= 50) {
      console.log("User has scrolled 50% of the page");
      // Send data to server
    }

    if (percentageScrolled >= 75) {
      console.log("User has scrolled 75% of the page");
      // Send data to server
    }

    if (percentageScrolled >= 100) {
      console.log("User has scrolled 100% of the page");
      // Send data to server
    }
  });
};
