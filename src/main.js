window.onload = () => {
    let filterPokes = [];
    let arrayShowWhole = wholePokes(); 
    const rootContainment = document.getElementById('root');
    const orderList = document.getElementById('order');

    //Ingreso con botón Aceptar
    document.getElementById('btn_enter').addEventListener('click',(event) => {
        document.getElementById('user').innerHTML = '';
        rootContainment.innerHTML = `
        <article>
        <section id="containmentPokes" class="containment">
        <!--Aquí va el menú de la página de Pokes-->
            <div id = "found" class = "search-div">
              <label>Nombre o Número</label>
              <input type = "text" id = "id-poke-search" placeholder="Ej: 005, Charmander, etc."> 
              <button type="submit" value = "search" id="search" class="button button-search"></button>
              <p>Usa la busqueda para encontrar POKÉMON</p>
            </div>
            <div id = "middle">
                <span><h5>O</h5></span>
            </div> 
            
            <div id = "box-filter-order">
                <div id = "filter">
              
                </div>
                <div id = "order">
                    <select name="order">
                    <option value="0">Seleccione</option> 
                    <option value="ascendente">A - Z</option> 
                    <option value="descentende">Z - A</option>
                    </select>
                </div>
            </div>
            
        </section>
        </article> 
      `
      console.log('Hola');
      const orderList = document.getElementById('order');
      orderList.addEventListener('change', () => {
        let status = orderList.options[orderList.selectedIndex].text;
        let orderName = order(arrayShowWhole,status);
        console.log('quiero ver ' + status);
        // limpio div
        containerRoot.innerHTML = '';
      
        orderName.forEach(element => {
          containerRoot.innerHTML += `
          <div>
            <div class="card">
              <div class="box">
                <div class="img">
                    <img src="${element.image}">
                </div>
                <h2>${element.name}
              </div>
            </div>
          </div>` 
        })
      })
        //Aquí van las tarjetas de Pokes-->
        
    // let result = '';
    POKEMON.pokemon.forEach(element => {
        // element --> POKEMON[i]
        //console.log(element.house);
            rootContainment.innerHTML += `
        <div>
            <div class="card">
            <div class="box">
                <div class="img">
                    <img src=" ${element.img} ">
                </div>
                <h2> ${element.name}<br><span>nose</span> </h2>
                <p>No Aplica</p>
            </div>
            </div>
        </div>`
        
    });
    });
    
}