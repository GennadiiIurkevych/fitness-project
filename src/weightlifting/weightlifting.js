export default class Weightlifting {
  constructor (weightlifting) {
    this.weightlifting = weightlifting;
    this.render();
  }

  getTemplate () {
    return `
      <div class="weightlifting-content">
        <h2>ВАЖКА АТЛЕТИКА</h2>
        <h4>для олімпійського спорту і кросфіту</h4>
        
          <span class="weightlifting">РИВОК та ПОШТОВХ</span>
        
        <p>
          Ваші амбітні цілі досягти: <br>- майстерності у піднятті штанги <br>- підвищення ефективності техніки виконання ривка та поштовха <br>- виконання вищих розрядів кваліфікаційних вимог рівня майстра спорту України та майстра спорту України міднародного класу <br>- особистих рекордів та рекордів міста, області, України, Європи та світу <br>- максимальної ефективністі від тренувальних занять <br>- викладатися на змаганнях на всі 100% <br> наш міжнародний спортивний клуб 
          <span class="club-name">"IRON BEES"</span> навчить вас!
        </p>
        <button class="btn-weightlifting"><a class="a-weightlifting" href="#footer-box">ОБИРАЄМО</a></button>
        
        <img class="weightlifting-img" data-aos="fade-up-right" data-aos-delay="200" src="http://localhost:1234/Clean_and_jeck.931196d1.png?1739031864325">


      </div>

      <div class="snatch">
          <img class="snatchWoman" data-aos="fade-up-right" data-aos-delay="200" src="http://localhost:1234/WL_2.14862fb7.png?1739215770766">
          
            <span class="snatch" data-aos="fade-down">РИВОК</span>
        
        <p data-aos="fade-up">
          Перший вид програми олімпійського двоборста. Вправа характеризується швидкісно-силовою роботою і вимагає високий рівень координації та гнучкості. <br> Не важливо який у вас початковий рівень необхідних якостей, - важливо! на скільки ви готові їх опанувати.
        </p>
          
        <img class="snatchMan" data-aos="flip-right" data-aos-delay="200" src="http://localhost:1234/weightlifting-Snatch.861f042d.png?1739216047701">

      </div>

      <div class="clean-jerk">
         <img class="cleanMan" data-aos="flip-down" src="http://localhost:1234/ilya.d98b69ae.png?1741420192656">
          
            <span class="clean_jerk" data-aos="fade-left">ПОШТОВХ</span>
        
        <p data-aos="flip-left">
          Другий вид програми олімпійського двоборста, що складається з двох частин - підйому штанги на груди та поштовху від грудей. Вправа характеризується швидкісно-силовою та силовою роботою і, також,  вимагає високий рівень координації та гнучкості.
        </p>
          
        <img class="clean_jerkMan" data-aos="zoom-in" src="http://localhost:1234/WL_CleanWoman.f96a0054.png?1741419844473">
      </div>
    `
  }

  render() {
    const weightliftingElement = document.createElement('div');
    weightliftingElement.className = "weightlifting-section";
    weightliftingElement.id = "weightlifting";
    weightliftingElement.innerHTML = this.getTemplate();
    this.weightliftingElement = weightliftingElement;

    // const img = document.createElement('img');
    //       img.className = "weightlifting-img"; 
    //       img.src = new URL('./img/WL_2.png', import.meta.url);
          
    //       weightliftingElement.append(img);



  }
}