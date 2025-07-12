export default class Weightlifting {
  constructor (weightlifting) {
    this.weightlifting = weightlifting;
    this.render();
  }

  getTemplate () {
    return `
      <div class="weightlifting-content" id="weightlifting-section">
        <h2>ВАЖКА АТЛЕТИКА</h2>
        <h4>для олімпійського спорту і кросфіту</h4>
        
          <span class="weightlifting">РИВОК та ПОШТОВХ</span>
        
        <p>
          Ваші амбітні цілі досягти: <br>- майстерності у піднятті штанги <br>- підвищення ефективності техніки виконання ривка та поштовха <br>- виконання вищих розрядів кваліфікаційних вимог рівня майстра спорту України та майстра спорту України міднародного класу <br>- особистих рекордів та рекордів міста, області, України, Європи та світу <br>- максимальної ефективністі від тренувальних занять <br>- викладатися на змаганнях на всі 100% <br> наш міжнародний спортивний клуб 
          <span class="club-name">"IRON BEES"</span> навчить вас!
        </p>
        <button class="btn-weightlifting"><a class="a-weightlifting" href="#footer-box">ОБИРАЄМО</a></button>
        
        <div class="weightlifting-img" id="weightlifting" data-aos="fade-up-right" data-aos-delay="300"></div>
      
      </div>

      <div class="snatch">

          <div class="snatchWoman" id="snatch" data-aos='fade-up-right' data-aos-delay="400"></div>
          
            <span class="snatch" data-aos="fade-down">РИВОК</span>
        
        <p data-aos="fade-up">
          Перший вид програми олімпійського двоборста. Вправа характеризується швидкісно-силовою роботою і вимагає високий рівень координації та гнучкості. <br> Не важливо який у вас початковий рівень необхідних якостей, - важливо! на скільки ви готові їх опанувати.
        </p>

        <div class="snatchMan" data-aos="flip-right" data-aos-delay="400" id="snatchMan"></div>   

      </div>

      <div class="clean-jerk">
      
        <div class="cleanMan" data-aos="flip-down" id="cleanMan"></div>
          
            <span class="clean_jerk" data-aos="fade-left">ПОШТОВХ</span>
        
        <p data-aos="flip-left">
          Другий вид програми олімпійського двоборста, що складається з двох частин - підйому штанги на груди та поштовху від грудей. Вправа характеризується швидкісно-силовою та силовою роботою і, також,  вимагає високий рівень координації та гнучкості.
        </p>
      
        <div class="clean_jerkMan" data-aos="zoom-in" id="clean_jerkMan"></div>
        
      </div>
    `
  }

  render() {
    const weightliftingElement = document.createElement('div');
    weightliftingElement.className = "weightlifting-section";
    weightliftingElement.id = "weightlifting-section";
    weightliftingElement.innerHTML = this.getTemplate();
    this.weightliftingElement = weightliftingElement;

    // const img = document.createElement('img');
    //       img.className = "weightlifting-img"; 
    //       img.src = new URL('./img/WL_CleanWoman.png', import.meta.url);
          
    //       weightliftingElement.append(img);

    
    const imgWL = document.createElement("img");
    imgWL.className = "olimpic";
    const img2WL = document.createElement("img");
    img2WL.className = "weightlifting-img";
    const img3WL = document.createElement("img");
    img3WL.className = "snatchWoman";
    const img4WL = document.createElement("img");
    img4WL.className = "snatchMan";
    const img5WL = document.createElement("img");
    img5WL.className = "cleanMan";
    const img6WL = document.createElement("img");
    img6WL.className = "clean_jerkMan";


    imgWL.src = new URL('./img/Olimpic420.png', import.meta.url);
    img2WL.src = new URL('./img/Clean_and_jeck.png', import.meta.url);
    img3WL.src = new URL('./img/WL_2.png', import.meta.url);
    img4WL.src = new URL('./img/weightlifting-Snatch.png', import.meta.url);
    img5WL.src = new URL('./img/ilya.png', import.meta.url);
    img6WL.src = new URL('./img/WL_CleanWoman.png', import.meta.url);

    
    const weightliftingSection = weightliftingElement.querySelector("#weightlifting-section");
    const weightlifting = weightliftingElement.querySelector("#weightlifting");
    const snatch = weightliftingElement.querySelector("#snatch");
    const snatchMan = weightliftingElement.querySelector("#snatchMan");
    const cleanMan = weightliftingElement.querySelector("#cleanMan");
    const cleanWoman = weightliftingElement.querySelector("#clean_jerkMan");

    weightliftingSection.append(imgWL);
    weightlifting.append(img2WL);
    snatch.append(img3WL);
    snatchMan.append(img4WL);
    cleanMan.append(img5WL);
    cleanWoman.append(img6WL);

  }
}