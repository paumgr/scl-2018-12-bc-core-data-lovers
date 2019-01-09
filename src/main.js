
    
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
                <div id = "filter" class = "container" >
                    <span class="span-filter" id="Bug"> Insecto </span>
                    <span class="span-filter" id="Dragon"> Dragon </span>
                    <span class="span-filter"  id="Electric"> Electrico </span>
                    <span class="span-filter"  id="Fighting"> Peleador </span>
                    <span class="span-filter"  id="Fire"> Fuego </span>
                    <span class="span-filter"  id="Flying"> Volador </span>
                    <span class="span-filter"  id="Ghost"> Fantasma </span>
                    <span class="span-filter"  id="Grass"> Hierba </span>
                    <span class="span-filter"  id="Ground"> Tierra </span>
                    <span class="span-filter"  id="Ice"> Hielo </span>
                    <span class="span-filter"  id="Normal">Normal </span>
                    <span class="span-filter"  id="Poison"> Veneno </span>
                    <span class="span-filter"  id="Psychic"> Psíquico </span>
                    <span class="span-filter"  id="Rock"> Roca </span>
                    <span class="span-filter" id= "Water"> Agua </span>
                </div>
                <section class="container">
                    <select id="order">
                        <option value="0">Seleccione</option> 
                        <option value="ascendente">A - Z</option> 
                        <option value="descendente">Z - A</option>
                        <option value="menor">Menor a mayor</option>
                        <option value="mayor">Mayor a menor</option>
                    </select>
                </section>
            </div>
            
        </section>
        </article> 
      `
    //Filtrado
    let filterPk = [];
    let valueSpan = '';
    let spanSelectedType;

    spanSelectedType = document.getElementsByClass('span-filter');
    // spanSelectedType = document.getElementById('Rock');
    // spanSelectedType = document.getElementById('Psychic');
    spanSelectedType.addEventListener('click',(event) => {
        event.preventDefault();
        console.log('entro');
        valueSpan = spanSelectedType.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
        
    });

    // let spanSelectedType = document.getElementById('Water');
    // spanSelectedWater.addEventListener('click',() => {
    //     valueSpan = spanSelectedWater.id;
    //     filterPk = filterPokeType(data,valueSpan);
    //     filterPokeByType(filterPk);
    // })

    // let spanSelectedRock = document.getElementById('Rock');
    // spanSelectedRock.addEventListener('click',() => {
    //     valueSpan = spanSelectedRock.id;
    //     filterPk = filterPokeType(data,valueSpan);
    //     filterPokeByType(filterPk);
    // })
    
    // let spanSelectedPsychic = document.getElementById('Psychic');
    // spanSelectedPsychic.addEventListener('click',() => {
    //     valueSpan = spanSelectedPsychic.id;
    //     filterPk = filterPokeType(data,valueSpan);
    //     filterPokeByType(filterPk);
    // })

    let spanSelectedPoison = document.getElementById('Poison');
    spanSelectedPoison.addEventListener('click',() => {
        valueSpan = spanSelectedPoison.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedNormal = document.getElementById('Normal');
    spanSelectedNormal.addEventListener('click',() => {
        valueSpan = spanSelectedNormal.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedIce = document.getElementById('Ice');
    spanSelectedIce.addEventListener('click',() => {
        valueSpan = spanSelectedIce.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedGround = document.getElementById('Ground');
    spanSelectedGround.addEventListener('click',() => {
        valueSpan = spanSelectedGround.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedGras = document.getElementById('Grass');
    spanSelectedGras.addEventListener('click',() => {
        valueSpan = spanSelectedGras.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })
    
    let spanSelectedGhost = document.getElementById('Ghost');
    spanSelectedGhost.addEventListener('click',() => {
        valueSpan = spanSelectedGhost.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedFlying = document.getElementById('Flying');
    spanSelectedFlying.addEventListener('click',() => {
        valueSpan = spanSelectedFlying.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedFire = document.getElementById('Fire');
    spanSelectedFire.addEventListener('click',() => {
        valueSpan = spanSelectedFire.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);   
    })

    let spanSelectedFighting = document.getElementById('Fighting');
    spanSelectedFighting.addEventListener('click',() => {
        valueSpan = spanSelectedFighting.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    let spanSelectedElectric = document.getElementById('Electric');
    spanSelectedElectric.addEventListener('click',() => {
        valueSpan = spanSelectedElectric.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })

    
    let spanSelectedDragon = document.getElementById('Dragon');
    spanSelectedDragon.addEventListener('click',() => {
        valueSpan = spanSelectedDragon.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })
    
    let spanSelectedBug = document.getElementById('Bug');
    spanSelectedBug.addEventListener('click',() => {
        valueSpan = spanSelectedBug.id;
        filterPk = filterPokeType(data,valueSpan);
        filterPokeByType(filterPk);
    })
    
    function filterPokeByType (typeToFilter) {
        rootContainment.innerHTML = '';
        typeToFilter.forEach(element => {
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
    };
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
    


