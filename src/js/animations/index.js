import { TimelineMax, Power3, Expo } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // On load animation
  const timeline1 = new TimelineMax();
  timeline1
    .from('.title', 1.5, { y: 200, ease: Power3.easeInOut })
    .from('nav', 1, { y: 30, autoAlpha: 0, ease: Power3.easeInOut }, '=-1')
    .from('.sub-title', 1, { y: 30, autoAlpha: 0, ease: Power3.easeInOut })
    .from(
      '.bottom-nav',
      2,
      { width: '0%', autoAlpha: 0, ease: Power3.easeInOut },
      '-=2'
    );

  // Bottom nav click animation
  const timeline2 = new TimelineMax();
  const nav = document.getElementById('bottom-nav');
  nav.addEventListener('click', () => {
    timeline2
      .set('.grid', { display: 'grid' })
      .to('.forest img', 3, { y: -400, scale: 1.1, ease: Expo.easeInOut })
      .to('.bg-image', 3, { y: -600, ease: Expo.easeInOut }, '-=3')
      .to(
        '.sub-title',
        3,
        { autoAlpha: 0, y: -100, ease: Expo.easeInOut },
        '-=3'
      )
      .to('.bottom-nav', 3, { width: '0%', ease: Expo.easeInOut }, '-=3')
      .to('nav', 3, { color: '#fff', ease: Power3.easeInOut }, '-=3')
      .staggerTo(
        ['.imgs', '.imgs-2', '.imgs-3', '.imgs-4'],
        2,
        { height: '100%', ease: Expo.easeInOut },
        0.2,
        '-=1.5'
      )
      .to(
        '.destination',
        1,
        { autoAlpha: 1, y: -20, ease: Expo.easeInOut },
        '-=1.6'
      );
  });

  // Home click animation
  const home = document.getElementById('home');
  home.addEventListener('click', () => {
    timeline2.reverse();
  });
});
