
export default class Rehabilitation {
  constructor (rehabilitation) {
    this.fitness = rehabilitation;
    this.render();
  }


  getTemplate () {
    return `
      <section class="services" id="rehabilitation">

        <h3 class="heading" data-aos="fade-up" data-aos-duration="3000">
          Програма реабілітації та фізіотерапії
        </h3>

        <div class="rehabilitation-img" id="rehabilitation-img"></div>

        <ul class="strong1" data-aos="zoom-in">
          <li class="rehabilitation">Підбір вправ та розподіл навантажень для:</li>
        </ul>

        <div class="rehabilitation-container">

          <ul class="strong-rehabilitation">
            <li>Виправлення постави та вад хребта</li>
            <div id="strong-rehabilitation"></div>
          </ul>

          <ul class="fit-rehabilitation" data-aos="fade-down">
            <div class="fit-rehabilitation" id="fit-rehabilitation"></div>  
            <li>Зниження та усунення больових відчуттів спини</li>
          </ul>

          <hr class="strong-rehabilitation">

          <ul class="build-rehabilitation">
            <li>Відновлення рухливості хребта та суглобів</li>
            <div class="rehabilitation" id="build-rehabilitation" data-aos="fade-right"></div>
          </ul>

          <ul class="grow-rehabilitation">
            <li>Усунення зміщень хребців</li>
            <div class="lower" id="lower" data-aos="fade-left"></div>  
          </ul>

          <div class="lower-rehabilitation" id="lower-rehabilitation"></div>

          <hr class="grow-rehabilitation">

          <ul class="upperFit-rehabilitation">
            <li>Виправлення Х-подібних та О-подібних деформацій ніг, плоскостопості</li>
            <div class="foot" id="foot"></div> 
            <div class="man" id="man"></div>
          </ul>

          <ul class="flexBody-rehabilitation">
          <div class="body-rehabilitation" id="body-rehabilitation"></div>   
            <li>Відновлення фізичної активності після травм, поранень</li>
          </ul>

          <hr class="body-rehabilitation">
          
          <button class="btn-rehabilitation"><a class="a-fitness" href="#footer-box">ОЗДОРОВЛЮЄМОСЯ</a></button>

        </div>  

      </div>
    `
  }

  render() {
    const rehabilitationElement = document.createElement('div');
    rehabilitationElement.className = "rehabilitation-container";
    rehabilitationElement.id = "rehabilitation";
    rehabilitationElement.innerHTML = this.getTemplate();
          this.rehabilitationElement = rehabilitationElement;

    // const img1 = document.createElement('img');
    //       img1.className = "fitness-img"; 
    //       img1.src = new URL('./img/vertebraeRentgen.png', import.meta.url);  

    //       rehabilitationElement.append(img1);

    const imgReh = document.createElement("img");
    const imgReh2 = document.createElement("img");
    const imgReh3 = document.createElement("img");
    const imgReh4 = document.createElement("img");
    imgReh4.className = "rehabilitation";
    const imgReh5 = document.createElement("img");
    imgReh5.className = "lower";
    const imgReh6 = document.createElement("img");
    imgReh6.className = "lower-rehabilitation";
    const imgReh7 = document.createElement("img");
    imgReh7.className = "foot";
    const imgReh8 = document.createElement("img");
    imgReh8.className = "man";
    const imgReh9 = document.createElement("img");
    imgReh9.className = "body-rehabilitation";

    imgReh.src = new URL("./img/Rehabilitation.jpg", import.meta.url);
    imgReh2.src = new URL("./img/pngwing.com.png", import.meta.url);
    imgReh3.src = new URL("./img/vertebraeRentgen.png", import.meta.url);
    imgReh4.src = new URL("./img/Суглоби.png", import.meta.url);
    imgReh5.src = new URL("./img/Хребет.png", import.meta.url);
    imgReh6.src = new URL("./img/Lumbar3.jfif", import.meta.url);
    imgReh7.src = new URL("./img/ploskostopia2.png", import.meta.url);
    imgReh8.src = new URL("./img/OandX.png", import.meta.url);
    imgReh9.src = new URL("./img/rehabilitation.png", import.meta.url);

    const rehabilitationImg = rehabilitationElement.querySelector("#rehabilitation-img");
    const strongRehabilitation = rehabilitationElement.querySelector("#strong-rehabilitation");
    const fitRehabilitation = rehabilitationElement.querySelector("#fit-rehabilitation");
    const buildRehabilitation = rehabilitationElement.querySelector("#build-rehabilitation");
    const lower = rehabilitationElement.querySelector("#lower");
    const lowerRehabilitation = rehabilitationElement.querySelector("#lower-rehabilitation");
    const foot = rehabilitationElement.querySelector("#foot");
    const man = rehabilitationElement.querySelector("#man");
    const bodyRehabilitation = rehabilitationElement.querySelector("#body-rehabilitation");

    rehabilitationImg.append(imgReh);
    strongRehabilitation.append(imgReh2);
    fitRehabilitation.append(imgReh3);
    buildRehabilitation.append(imgReh4);
    lower.append(imgReh5);
    lowerRehabilitation.append(imgReh6);
    foot.append(imgReh7);
    man.append(imgReh8);
    bodyRehabilitation.append(imgReh9);

  }
}

