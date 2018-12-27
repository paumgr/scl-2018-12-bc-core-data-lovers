window.onload = () => {
    let arrayShowWhole = wholePokes();   

    let user = document.getElementById('user');
    const containment = document.getElementById('containmentPokes');
    containment.classList.add("container");

    //Ingreso con botón Aceptar
    document.getElementById('btn_enter').addEventListener('click',(event) => {
        event.preventDefault();
        //Oculta el primer formulario
        user.style.display = 'none';

        const ulPokemonGrid = document.createElement('ul');
        containment.appendChild(ulPokemonGrid);
        ulPokemonGrid.setAttribute('id','ulPokemon');
        ulPokemonGrid.setAttribute('style','height:auto');
        ulPokemonGrid.classList.add("main");

        arrayShowWhole.forEach(element => {
            const liResultPoke = document.createElement('li');
            //Creo el elemento imagen y lo asigno a LI
            let imgElementPoke = document.createElement('img');
            ulPokemonGrid.appendChild(liResultPoke);
            liResultPoke.appendChild(imgElementPoke);    
            imgElementPoke.setAttribute('src',element.img);
            liResultPoke.classList.add("col-xs-12", "col-sm-6", "col-md-3", "col-lg-3");
            //Creo el elemento Label para asignar el nombre y codigo de cada Pokemon al DIV
            const divInfoPokemon = document.createElement('div');
            liResultPoke.appendChild(divInfoPokemon);
            //Creo el parrafo para agregar el id
            const pIdPoke = document.createElement('p');
            const spanIdPoke = document.createElement('span');
            let idTextPoke = document.createTextNode('# ' + element.num);
            pIdPoke.appendChild(spanIdPoke);
            spanIdPoke.appendChild(idTextPoke);
            divInfoPokemon.appendChild(pIdPoke);
            //Creo un H5 para el nombre
            const hCincoNombre = document.createElement('h5');
            let nombreTextPoke = document.createTextNode(element.name);
            divInfoPokemon.appendChild(hCincoNombre);
            hCincoNombre.appendChild(nombreTextPoke);
        });



    });

    // const elementLabelZero = document.createElement('label');
    //     const elementNick = document.createElement('input');
    //     let labelZeroText = document.createTextNode('Nombre: ');
    //     elementLabelZero.appendChild(labelZeroText);
    //     elementLabelZero.appendChild(elementNick);
    //     containmentStudent.appendChild(elementLabelZero);
    //     elementNick.setAttribute('placeholder','Nick Name');
    //     elementNick.setAttribute('id','nameStudent');
    //     elementNick.classList.add('text');



}
