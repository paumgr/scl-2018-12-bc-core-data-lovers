window.onload = () => {
    let filterPokes = [];
    let arrayShowWhole = wholePokes(); 
    const rootContainment = document.getElementById('root');

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

            //Aqui voy construyendo

            













            
        </section>
        </article> 














        <!--Aquí van las tarjetas de Pokes-->
        <div class = "container">
            <div class="card">
                <div class="box">
            <section id="containmentPokes" class="containment">
                <div id = "found">
                </div>
                <div id = "middle">
                </div>
                <div id = "box-filter-order">
                <div id = "filter">
                </div>
                <div id = "order">
                </div>
                </div>
            </section>
        </article> `
        //Aquí van las tarjetas de Pokes-->
        const showData = (POKEMON) => {
            let result = '';
            //console.log(POKÉMON)
            POKEMON.forEach(element => {
                // element --> POKEMON[i]
                //console.log(element.house);
                if (element.num === '' && element.type === '') {
                    rootContainment.innerHTML += `
                <div>
                  <div class="card">
                    <div class="box">
                        <div class="img">
                           <img src=" ${element.image} ">
                        </div>
                      <h2> ${element.name}<br><span>nose</span> </h2>
                        <p>No Aplica</p>
                    </div>
                  </div>
                </div>`
                }else if (element.num !== "" & element.type === "") {
                    rootContainment.innerHTML += `
                <div>
                  <div class="card">
                    <div class="box">
                        <div class="img">
                           <img src=" ${element.image} ">
                        </div>
                      <h2> ${element.name}<br><span> ${element.num}</span> </h2>
                        <p>Type: No Aplica</p>
                    </div>
                  </div>
                </div>`
                }else if (element.num === "" & element.type !== "") {
                    rootContainment.innerHTML += `
                <div>
                  <div class="card">
                    <div class="box">
                        <div class="img">
                           <img src=" ${element.image} ">
                        </div>
                      <h2> ${element.name}<br><span>No aplica</span> </h2>
                        <p> ${element.type}</p>
                    </div>
                  </div>
                </div>`
                }else {
                    result = rootContainment.innerHTML += `
                <div>
                  <div class="card">
                    <div class="box">
                        <div class="img">
                           <img src=" ${element.image} ">
                        </div>
                      <h2> ${element.name}<br><span> ${element.num}</span> </h2>
                        <p>Type: ${element.type}</p>
                    </div>
                  </div>
                </div>`
                }
            });
            return result;
        } 

    });
 //window.onload = showData(POKEMON);


        
    //     
        //Creo contenedor del listado de Pokes
        // const ulPokemonGrid = document.createElement('ul');
        // containment.appendChild(ulPokemonGrid);
        // ulPokemonGrid.setAttribute('id','ulPokemon');
        // ulPokemonGrid.setAttribute('style','height:auto');
        // ulPokemonGrid.classList.add('main');

        // arrayShowWhole.forEach(element => {
        //     const liResultPoke = document.createElement('li');
        //     //Creo el elemento imagen y lo asigno a LI
        //     const figureElement = document.createElement('figure');
        //     let imgElementPoke = document.createElement('img');
        //     ulPokemonGrid.appendChild(liResultPoke);
        //     liResultPoke.appendChild(figureElement);
        //     figureElement.appendChild(imgElementPoke);    
        //     imgElementPoke.setAttribute('src',element.img);
        //     liResultPoke.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
        //     //Creo el elemento Label para asignar el nombre y codigo de cada Pokemon al DIV
        //     const divInfoPokemon = document.createElement('div');
        //     liResultPoke.appendChild(divInfoPokemon);
        //     //Creo el parrafo para agregar el id
        //     const pIdPoke = document.createElement('p');
        //     const spanIdPoke = document.createElement('span');
        //     let idTextPoke = document.createTextNode(element.num);
        //     const prefixPoke = document.createTextNode('#');
        //     divInfoPokemon.appendChild(pIdPoke);
        //     pIdPoke.appendChild(spanIdPoke);
        //     spanIdPoke.appendChild(prefixPoke);
        //     pIdPoke.appendChild(idTextPoke);
        //     pIdPoke.classList.add('id');
            
        //     //Creo un H5 para el nombre
        //     const hFiveName = document.createElement('h5');
        //     let nombreTextPoke = document.createTextNode(element.name);
        //     divInfoPokemon.appendChild(hFiveName);
        //     hFiveName.appendChild(nombreTextPoke);
        // });
    //});    
    }


