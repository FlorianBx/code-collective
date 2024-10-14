export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-animation', {
    mounted: (el) => {
      if (process.client) {
        const animate = (isIntersecting: boolean) => {
          if (isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-10');
            el.classList.add('opacity-100', 'translate-y-0');
          } else {
            el.classList.add('opacity-0', 'translate-y-10');
            el.classList.remove('opacity-100', 'translate-y-0');
          }
        };

        el.classList.add('transition-all', 'duration-1000', 'ease-out');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            animate(entry.isIntersecting);
          });
        }, { threshold: 0.1 });
        
        observer.observe(el);
      }
    }
  });
});
