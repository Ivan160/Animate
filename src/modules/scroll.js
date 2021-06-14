import { animate } from './animate';


export const scrolling = (hash) => {
  const wind = window.pageYOffset;
  const hashTop = hash ? document.getElementById(hash).getBoundingClientRect().top : -wind;

  animate({
    duration: 500,
    timing: (timeFraction) => timeFraction,
    draw: (progress) => {
      window.scrollTo(0, hashTop * progress + wind);
    }
  });
};

export const scroll = () => {
  const handleLinkClick = (event) => {
    scrolling(event.currentTarget.getAttribute('href').slice(1));
  };

  const hrefAll = document.querySelectorAll('[href^="#"]');
  hrefAll.forEach((elem) => elem.addEventListener('click', handleLinkClick));
};
