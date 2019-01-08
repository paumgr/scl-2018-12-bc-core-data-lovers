let filterPokes = [];
    
const data = (POKEMON.pokemon);
const rootContainment = document.getElementById('root');
const menuContainment = document.getElementById('menu');


//Ingreso con botón Aceptar
document.getElementById('btn_enter').addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('user').innerHTML = '';
    menuContainment.innerHTML = `
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
                <section class="container">
                    <select id="order">
                        <option value="0">Seleccione</option> 
                        <option value="ascendente">A - Z</option> 
                        <option value="descendente">Z - A</option>
                    </select>
                </section>
            </div>
            
        </section>
        </article> 
      `
    const orderList = document.getElementById('order');
    orderList.addEventListener('change', () => {
        let status = orderList.options[orderList.selectedIndex].value;
        let orderName = order(POKEMON.pokemon,status);
        // limpio div
        rootContainment.innerHTML = '';

        POKEMON.pokemon.forEach(element => {
            rootContainment.innerHTML += `
            <div id="flip-container">
                <div class="card">
                <div class="box">
                    <div class="img">
                        <img src=" ${element.img} ">
                    </div>
                    <h2> ${element.name}<br><span> ${element.num}</span> </h2>
                    <p>Type: ${element.type}</p>
                </div>
                </div>
            </div>`
        });        
    });
    
    //Aquí van las tarjetas de Pokes-->
    const showData = (data) => {
        let result = '';
        //console.log(POKÉMON)
        data.forEach(element => {
            // element --> POKEMON[i]
            //console.log(element.house);
            result = rootContainment.innerHTML += `
            <div id="flip-container">
                <div class="card">
                <div class="box">
                    <div class="img">
                        <img src=" ${element.img} ">
                    </div>
                    <h2> ${element.name}<br><span> ${element.num}</span> </h2>
                    <p>Type: ${element.type}</p>
                </div>
                </div>
            </div>`
        });
        return result;
    } 
    window.onload = showData(data);
});
    


