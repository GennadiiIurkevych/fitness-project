export default class Price {
  constructor (price) {
    this.price = price;
    this.render();
  }


  getTemplate () {
    return `
      <section class="prices" id="prices">
    <h2 class="heading-price">ВАРТІСТЬ ПОСЛУГ</h2>
    <h3 class="sub-heading-price">Стати членом нашого спортивного клубу ви можете безкоштовно.
    </h3> 
    <h3 class="sub-heading-price">Для цього треба лише<a href="#footer-box" class="btn-price">ПІДПИСАТИСЯ</a>
    </h3>

    <div class="box-container">
      
      <div class="price-box" data-aos="zoom-in" data-aos-delay="50">
        <div class="box-content">
          <h3>Консультація</h3>
          <h4>200 грн.</h4>
          <span class="prices">
            <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
          Щодо тренувань</span>
          <span class="prices">
          <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
            Щодо харчування</span>
        </div>
        <button class="btn price-btn"><a href="#contactCoach" class="a-about">ЗАМОВИТИ</a></button>
      </div>
      
      <div class="price-box" data-aos="zoom-in" data-aos-delay="150">
        <div class="box-content">
          <h3>Складання програми тренувань або харчування</h3>
          <h4>1000 грн.</h4>
          <span class="prices">
            <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
          План на 5-6 тижнів</span>
          <span class="prices">
          <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
            Розпис харчування на тиждень</span>
        </div>
        <button class="btn price-btn"><a href="#contactCoach" class="a-about">ЗАМОВИТИ</a></button>
      </div>
      
      <div class="price-box" data-aos="zoom-in" data-aos-delay="300">
        <div class="box-content">
          <h3>Онлайн тренування</h3>
          <h4>500 грн.</h4>
          <span class="prices">
            <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
          Тривалість 60-80 хв.</span>
          <span class="prices">
          <svg xmlns="http://www.w3.org/2000/svg" width="16"   height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
            </svg>
            Ваша зручна локація</span>
        </div>
        <button class="btn price-btn"><a href="#contactCoach" class="a-about">ЗАМОВИТИ</a></button>
      </div>

    </div>

  </section>
    `
  }

  render() {
    const priceElement = document.createElement('div');
    priceElement.className = "price-container";
    priceElement.innerHTML = this.getTemplate();
          this.priceElement = priceElement;

    // const img1 = document.createElement('img');
    //       img1.className = "fitness-img"; 
    //       img1.src = new URL('./img/rehabilitation.png', import.meta.url);  

    //       rehabilitationElement.append(img1);



  }
}
