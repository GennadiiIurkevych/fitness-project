export default class Home {
  constructor (home) {
    this.home = home;
    this.render();
  }

  getTemplate () {
    return `
      <div class="home-content">

        <h4>Спортивний клуб ваших змін</h4>
        <h2>ЗМІНЮЙТЕ СВОЄ ТІЛО ВЖЕ <br>
          <span>СЬОГОДНІ</span>
        </h2>
        <p>Кожен може досягнути своїх висот, якщо до них йти. Цей, інколи, не легкий шлях вам допоможе подолати наш міжнародний спортивний клуб 
          <span class="club-name">"IRON BEES"</span>
        .</p>
        <button class="btn-home" ><a class="a-home" href="#footer-box">РОЗПОЧНЕМО</a></button> 
      
      </div>
    `
  }

  render() {
    const homeElement = document.createElement('div');
          homeElement.className = "home-section";
          homeElement.id = "home";
          homeElement.innerHTML = this.getTemplate();
          this.homeElement = homeElement;

    const img = document.createElement('img');
          img.className = "home-img"; 
          img.src = new URL('./img/Boy-Girl4.png/', import.meta.url);
          
          homeElement.append(img);

          // const img2 = document.createElement('img');
          // img2.className = "boy-img"; 
          // img2.src = new URL('./img/Boy2.png/', import.meta.url);
          
          // homeElement.append(img2);

  }
}