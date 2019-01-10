const data = (POKEMON.pokemon);
const rootContainment = document.getElementById('root');
const menuContainment = document.getElementById('menu');










//estadística
document.getElementById('pills-stadictics-tab').addEventListener('click',(event) => {
    event.preventDefault();
    // rootContainment.innerHTML = '';
    menuContainment.innerHTML = '';
    rootContainment.innerHTML = '';
});

//Ingreso con botón Aceptar
document.getElementById('btn_enter').addEventListener('click',(event) => {
    event.preventDefault();
    document.getElementById('user').innerHTML = '';
    menuContainment.innerHTML = `
    <article>
        <section id="containmentPokes" class="containment containment-pokes">
        <!--Aquí va el menú de la página de Pokes-->
            <div id = "found" class = "search-div">
              <label>Nombre o Número</label>
              <input type = "text" id = "id-poke-search" placeholder="Ej: 005, Charmander, etc."> 
              <button type="submit" value = "search" id="search" class="button button-search"></button>
              <p>Usa la busqueda para encontrar POKÉMON</p>
            </div>
            <div id = "middle" class="middle-o">
                <span><h5>O</h5></span>
            </div> 
            </div>
            <div class"order">
                <div class="container container-order">
                    <select id="order">
                        <option value="0">Ordena pokemones por...</option> 
                        <option value="ascendente">A - Z</option> 
                        <option value="descendente">Z - A</option>
                        <option value="menor">Menor núm ID (Primero)</option>
                        <option value="mayor">Mayor núm ID (Primero) </option>
                    </select>
                </div>
            <div/>
            </div>
        </section>
            <div id = "box-filter-order">
                <div id = "filter" class = "container container-span" >
                    <span class="span-filter" id="Bug"> Insecto </span>
                    <span class="span-filter" id="Dragon"> Dragon </span>
                    <span class="span-filter" id="Electric"> Electrico </span>
                    <span class="span-filter" id="Fighting"> Peleador </span>
                    <span class="span-filter" id="Fire"> Fuego </span>
                    <span class="span-filter" id="Flying"> Volador </span>
                    <span class="span-filter" id="Ghost"> Fantasma </span>
                    <span class="span-filter" id="Grass"> Hierba </span>
                    <span class="span-filter" id="Ground"> Tierra </span>
                    <span class="span-filter" id="Ice"> Hielo </span>
                    <span class="span-filter" id="Normal">Normal </span>
                    <span class="span-filter" id="Poison"> Veneno </span>
                    <span class="span-filter" id="Psychic"> Psíquico </span>
                    <span class="span-filter" id="Rock"> Roca </span>
                    <span class="span-filter" id = "Water"> Agua </span>
                </div>
                <div>
                    <span id = "calc"></span>
                </div
            </div>
        </article>
      `
    //Filtrado
    spanValueFilter = Array.from(document.getElementsByClassName('span-filter'))
    spanValueFilter.forEach(function(element){
        element.addEventListener('click',(event) => {
            event.preventDefault();
            let valueSpan = element.id;
            rootContainment.innerHTML = '';
            let calculation = probability(data,valueSpan).toFixed(3);
            document.getElementById('calc').innerHTML = 'Tienes ' + calculation + ' problabilidad de encontrar un pokemón, tipo '+ valueSpan;
            let dataFilter = filterPokeType(data,valueSpan);
            createCardPoke(dataFilter);        
        });
    });
    
    //Orden por nombre
    const orderList = document.getElementById('order');
    orderList.addEventListener('change', () => {
        let status = orderList.options[orderList.selectedIndex].value;
        order(POKEMON.pokemon,status);
        createCardPoke(data);
    });
    
    //Aquí van las tarjetas de Pokes-->
    const showData = (data) => {
        let result = '';
        createCardPoke(data);
        return result;
    } 

    function createCardPoke(dataToFiltered){
        // limpio div
        rootContainment.innerHTML = '';
        dataToFiltered.forEach(element => {
            rootContainment.innerHTML += `
            <div class="target col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                <div class="card">
                <div class="front"></div>
                <div class="box">
                    <div class="img">
                        <img src=" ${element.img} ">
                    </div>
                    <h2> ${element.name}<br><span> ${element.num}</span> </h2>
                    <p>Type: ${element.type}</p>
                </div>
                <div class="back">
                 <p> #: ${element.num}</p>
                 <p>Altura: ${element.height}</p>
                 <p>Peso: ${element.weight}</p>
                 <p>Tipo: ${element.type}</p>
                 <p>Debilidad con Pókemon tipo: ${element.weaknesses}</p>
                </div>
                </div>
            </div>`
        });        
    }
    window.onload = showData(data);
});
    