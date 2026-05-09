    document.body.classList.add("js-enabled");

    const progressBar = document.querySelector("#progressBar");

    function updateProgress() {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));

    window.addEventListener("scroll", () => {
      updateProgress();
    }, { passive: true });

    updateProgress();
