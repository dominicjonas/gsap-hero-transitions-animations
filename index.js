let tl = gsap.timeline({ defaults: { Easings: Expo.EaseOut } })

// to make the bg image animate to consume screen from a small scale. Using '.from' here because all the specs are from where we want the animation to begin, the end of the anim is the initial state of the html
tl.from('.bg', {
  scale: 0.6,
  duration: 2,
  opacity: 0,
  ease: Expo.EaseOut,
  delay: 0.2
})
  // move title down to center, stagger h1 and p tag
  .to(
    '.text-reveal',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%,  0 100%)',
      y: 0,
      stagger: 0.3,
      duration: 1
    },
    '-=2.9'
  )
  // after delay, shift title back to top of page
  .to('.text-reveal', {
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    y: -200,
    duration: 0.2,
    delay: 0.5
  })
  // after delay, reveal title elements again
  .to('.text-reveal', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%,  0 100%)',
    stagger: 0.3,
    duration: 0.3,
    delay: 0.5
  })
  // after delay, reveal arrow svg
  .to('svg', {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%,  0 100%)',
    y: -150
  })
  // reveal and stagger 3 'local' elements up to original y state
  .to(
    '.local',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%,  0 100%)',
      y: 0,
      stagger: 0.3,
      opacity: 1,
      duration: 1
    },
    '-=1.4'
  )
