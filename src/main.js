window.onload = () => {
    let arrayShowWhole = wholePokes();   

    let docs = document.getElementById('root');
    let user = document.getElementById('user');
    const containment = document.getElementById('containmentPokes');

    //Ingreso con botón Aceptar
    document.getElementById('btn_enter').addEventListener('click',(event) => {
        event.preventDefault();
        //Oculta el primer formulario
        user.style.display = 'none';

        const divPokemonGrid = document.createElement('div');
        containment.appendChild(divPokemonGrid);
        divPokemonGrid.setAttribute('id','divPokemon');
        divPokemonGrid.classList.add("grid_container");

        arrayShowWhole.forEach(element => {
            const divImgPoke = document.createElement('div');
            let imgElementPoke = document.createElement('img');
            imgElementPoke.setAttribute('src',element.img);
            divPokemonGrid.appendChild(divImgPoke);
            divImgPoke.appendChild(imgElementPoke);            
        });



    });


//Los voy creando para agregar cada elemento
// <div class="grid-container">
//   <div class="grid-item">1</div>
//   <div class="grid-item">2</div>
//   <div class="grid-item">3</div>  
//   <div class="grid-item">4</div>
//   <div class="grid-item">5</div>
//   <div class="grid-item">6</div>  
//   <div class="grid-item">7</div>
//   <div class="grid-item">8</div>
//   <div class="grid-item">9</div>  
// </div>



}
