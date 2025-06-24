
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

        <div class="rehabilitation-img">
          <img src="http://localhost:1234/Rehabilitation.d3ffdaf8.jpg?1741465415880" alt="image">
        </div>

        <ul class="strong1" data-aos="zoom-in">
            <li class="rehabilitation">Підбір вправ та розподіл навантажень для:</li>
          </ul>

        <div class="rehabilitation-container">

          <ul class="strong-rehabilitation">
            <li>Виправлення постави та вад хребта</li>
            <img src="http://localhost:1234/pngwing.com.87092c91.png?1741463736018">
          </ul>

          <ul class="fit-rehabilitation" data-aos="fade-down">
          <img src="http://localhost:1234/vertebraeRentgen.bad26897.png?1741463971706">  
            <li>Зниження та усунення больових відчуттів спини</li>
          </ul>

          <hr class="strong-rehabilitation">

          <ul class="build-rehabilitation">
            <li>Відновлення рухливості хребта та суглобів</li>
            <img class="rehabilitation" data-aos="fade-right" src=http://localhost:1234/%D0%A1%D1%83%D0%B3%D0%BB%D0%BE%D0%B1%D0%B8.b0932930.png?1741535295376">
          </ul>

          <ul class="grow-rehabilitation">
          <li>Усунення зміщень хребців</li>
          <img class="lower" data-aos="fade-left" src="http://localhost:1234/%D0%A5%D1%80%D0%B5%D0%B1%D0%B5%D1%82.d5261fd3.png?1741530583033">   
          </ul>

          <img class="lower-rehabilitation" src="http://localhost:1234/Lumbar3.b719343b.jfif?1741538015008">   
          </ul>

          <hr class="grow-rehabilitation">

          <ul class="upperFit-rehabilitation">
            <li>Виправлення Х-подібних та О-подібних деформацій ніг, плоскостопості</li>
            
            <img class="foot" src="http://localhost:1234/ploskostopia2.d3912682.png?1741546874899">

            <img class="man" src="http://localhost:1234/OandX.5be3b8e6.png?1741544999888">
          </ul>

          <ul class="flexBody-rehabilitation"> 
          <img class="body-rehabilitation" src="http://localhost:1234/rehabilitation.3fb295a3.png?1741548997177">  
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
    //       img1.src = new URL('./img/rehabilitation.png', import.meta.url);  

    //       rehabilitationElement.append(img1);



  }
}

