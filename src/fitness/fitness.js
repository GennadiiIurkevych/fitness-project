export default class Fitness {
    constructor(fitness) {
        this.fitness = fitness;
        this.render();
    }

    getTemplate() {
        return `
      <section class="services" id="fitness">

        <h3 class="heading" data-aos="fade-down" data-aos-delay="50">Наші пропозиції за фітнес програмою</h3>

        <div class="services-img" id="foo">  
        </div>

        <div class="fitness-container">

          <ul class="strong" data-aos="fade-down" data-aos-delay="100" id="biceps">
            <li>Зміцнення та розвиток сили м'язів усіх груп</li>
          </ul>

          <ul class="fit" data-aos="fade-right" data-aos-delay="200" >  
            <li id="fit">Укріплення та зміцнення зв'язок та сухожилок</li>
          </ul>

          <hr class="fitness">

          <ul class="build" data-aos="fade-down" data-aos-delay="50">
            <li>Атлетична фігура</li>
            <img src="http://localhost:1234/GirlFitness.1af12e76.png?1738490567261">
          </ul>

          <ul class="grow">
          <img class="grow" src="http://localhost:1234/ManGrow.1f2990d1.png?1738494273714">
          <li data-aos="fade-up">Набір або зниження ваги тіла</li>
          <img class="lower" data-aos="fade-up" data-aos-delay="100" src="http://localhost:1234/Folling2.e0c6ad08.png?1738494090323">   
          </ul>

          <hr class="fitness">

          <ul class="upperFit" data-aos="fade-right" data-aos-delay="200">
            <li>Підвищення функціональних спроможностей організму</li>
            <img class="man" src="http://localhost:1234/Running.e4a82cbd.png?1743586472554">
          </ul>

          <ul class="flexBody" data-aos="fade-up" data-aos-delay="300"> 
            
            <li class="flexBodyLi">Розвиток гнучкості</li>
          </ul>
          <img class="girl" data-aos="fade-up" data-aos-delay="300" src="http://localhost:1234/GirlFlex2.e1a9823a.png?1738499448682">

          <hr class="fitness">
          
          <button class="btn-fitness"><a class="a-fitness" href="#footer-box">ДОЛУЧАЙТЕСЬ</a></button>

        </div>  

      </div>
    `;
    }

    render() {
        const fitnessElement = document.createElement("div");
        fitnessElement.className = "programms";
        fitnessElement.id = "fitness";
        fitnessElement.innerHTML = this.getTemplate();
        this.fitnessElement = fitnessElement;

        const img2 = document.createElement("img");
        const img3 = document.createElement("img");
        const img4 = document.createElement("img");

        img2.className = "fitness-img";
        img2.src = new URL("./img/AboutMyself.jpg", import.meta.url);
        img3.src = new URL("./img/ManFitness.png", import.meta.url);
        img4.src = new URL("./img/Girl2.png", import.meta.url);

        const foo = fitnessElement.querySelector("#foo");
        const biceps = fitnessElement.querySelector("#biceps");
        const fit = fitnessElement.querySelector("#fit");
        

        foo.append(img2);
        biceps.append(img3);
        fit.insertBefore(img4);


    }
}
