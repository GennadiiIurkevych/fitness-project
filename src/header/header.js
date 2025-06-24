

export default class Header {
  constructor (header) {
    this.header = header;
    this.render();
    requestAnimationFrame(() => {

      const navMenu = document.getElementById('nav-menu');
      const navToggle = document.getElementById("nav-toggle");
      const navClose = document.getElementById("nav-close");
      const removeLogo = document.querySelector('.nav-logo');


      if (navToggle) {
          navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
          removeLogo.style.setProperty('display', 'none');
      });
    }

      if (navClose) {
          navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
          removeLogo.style.setProperty('display', 'flex');
      });
    }

    let navLink = document.querySelectorAll('.nav-link');

    let linkAction = () => {
          navMenu.classList.remove('show-menu');
          removeLogo.style.setProperty('display', 'flex');
    };

    navLink.forEach(e => e.addEventListener('click', linkAction));

    })
  }

  getTemplate () {
  
    return `
    
     <nav class="nav-header" id="header">

      <a href="#home" class="nav-logo nav text-2xl">МІЖНАРОДНИЙ СПОРТИВНИЙ КЛУБ
      <span class="logo-name">"IRON BEES"</span>
      </a>

      <ul class="nav-menu" id="nav-menu">
        <li><a href="#header" class="nav-link">ДОМАШНЯ</a></li>
        <li><a href="#fitness" class="nav-link">ФІТНЕС</a></li>
        <li><a href="#weightlifting" class="nav-link">ВАЖКА АТЛЕТИКА</a></li>
        <li><a href="#rehabilitation" class="nav-link">РЕАБІЛІТАЦІЯ</a></li>
        <li><a href="#prices" class="nav-link">ЦІНИ</a></li>
        <li><a href="#about" class="nav-link">ПРО СЕБЕ</a></li>
        <li><a href="#contacts" class="nav-link">КОНТАКТИ</a></li>


        <div class="nav-close" id="nav-close">
          <svg xmlns="http://www.w3.org/2000/svg"   width="16" height="16" fill="currentColor"  class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg> 
        </div>

      </ul>

      <div class="nav-toggle" id="nav-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>

     </nav> 

    `
  }

  render() {
    
    const element = document.createElement('header');
          element.className = "header";
          element.id = "header";
          element.innerHTML = this.getTemplate();

          this.element = element;

    const img = document.createElement('img');
          img.className = "nav-img"; 
          img.src = new URL('./img/Iron bees logo.jpg', import.meta.url);
          
          element.append(img);
    
  }


}


