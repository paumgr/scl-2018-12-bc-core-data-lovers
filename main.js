
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
                        <option value="0">Seleccione</option> 
                        <option value="ascendente">A - Z</option> 
                        <option value="descendente">Z - A</option>
                    </select>
                </div>
            <div/>
            </div>
            <div id = "box-filter-order">    
                <div id = "filter" class = "container container-span" >
                    <span id="Bug"> Insecto </span>
                    <span id="Dragon"> Dragon </span>
                    <span id="Electric"> Electrico </span>
                    <span id="Fighting"> Peleador </span>
                    <span id="Fire"> Fuego </span>
                    <span id="Flying"> Volador </span>
                    <span id="Ghost"> Fantasma </span>
                    <span id="Grass"> Hierba </span>
                    <span id="Ground"> Tierra </span>
                    <span id="Ice"> Hielo </span>
                    <span id="Normal">Normal </span>
                    <span id="Poison"> Veneno </span>
                    <span id="Psychic"> Psíquico </span>
                    <span id="Rock"> Roca </span>
                    <span id = "Water"> Agua </span>
            
        </section>
        </article> 
      `
    //Filtrado
    let spanSelectedWater = document.getElementById('Water');
    spanSelectedWater.addEventListener('click',() => {
        let valueSpan = spanSelectedWater.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedRock = document.getElementById('Rock');
    spanSelectedRock.addEventListener('click',() => {
        let valueSpan = spanSelectedRock.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })
    
    let spanSelectedPsychic = document.getElementById('Psychic');
    spanSelectedPsychic.addEventListener('click',() => {
        let valueSpan = spanSelectedPsychic.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedPoison = document.getElementById('Poison');
    spanSelectedPoison.addEventListener('click',() => {
        let valueSpan = spanSelectedPoison.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedNormal = document.getElementById('Normal');
    spanSelectedNormal.addEventListener('click',() => {
        let valueSpan = spanSelectedNormal.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedIce = document.getElementById('Ice');
    spanSelectedIce.addEventListener('click',() => {
        let valueSpan = spanSelectedIce.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedGround = document.getElementById('Ground');
    spanSelectedGround.addEventListener('click',() => {
        let valueSpan = spanSelectedGround.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedGras = document.getElementById('Grass');
    spanSelectedGras.addEventListener('click',() => {
        let valueSpan = spanSelectedGras.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })
    
    let spanSelectedGhost = document.getElementById('Ghost');
    spanSelectedGhost.addEventListener('click',() => {
        let valueSpan = spanSelectedGhost.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedFlying = document.getElementById('Flying');
    spanSelectedFlying.addEventListener('click',() => {
        let valueSpan = spanSelectedFlying.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedFire = document.getElementById('Fire');
    spanSelectedFire.addEventListener('click',() => {
        let valueSpan = spanSelectedFire.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedFighting = document.getElementById('Fighting');
    spanSelectedFighting.addEventListener('click',() => {
        let valueSpan = spanSelectedFighting.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedElectric = document.getElementById('Electric');
    spanSelectedElectric.addEventListener('click',() => {
        let valueSpan = spanSelectedElectric.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedDragon = document.getElementById('Dragon');
    spanSelectedDragon.addEventListener('click',() => {
        let valueSpan = spanSelectedDragon.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

    let spanSelectedBug = document.getElementById('Bug');
    spanSelectedBug.addEventListener('click',() => {
        let valueSpan = spanSelectedBug.id;
        let filterPk = filterPokeType(data,valueSpan);
        rootContainment.innerHTML = '';
        filterPk.forEach(element => {
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
    })

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
    