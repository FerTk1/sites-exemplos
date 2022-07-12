// debounce é responsavel por ativar a função no tempo necessario que vc queira que ela ative, não fazendo com que as funções sejam ativada milhares de vezes!
const debounce = (func, wait, immediate) => {
    let timeout;
  
    return (...args) => {
      const context = this;
  
      const later = () => {
        timeout = null;
  
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  };

// codigo responsavel pelo efeito 
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;

  target.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add(animationClass);
    } else {
      e.classList.remove(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener("scroll", debounce( () => {
    animeScroll();
  
  }, 200));
}

// checkbox ligth/dark
const check = document.getElementById('check');

check.addEventListener('change', () =>{
  document.body.classList.toggle('dark')
  console.log('checkado')
});






