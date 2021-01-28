gsap.registerPlugin(ScrollTrigger);

gsap.to(".float", {
    yPercent: 2,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "power2.linear"
});

gsap.utils.toArray('.section').forEach((section, i) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onScrubComplete: self => {
                if(self.progress === 1) {
                    self.kill();
                    tl.progress(1);
                }
            }
        }
    });
tl.from(section.querySelectorAll('.fade-in'), {
    autoAlpha: 0,
    yPercent: 100,
    delay: 0.5,
    stagger: 0.1,
    ease: 'power2'
    });
});