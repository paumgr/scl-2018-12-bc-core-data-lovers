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

        //Creo Section de buscar y filtrar
        const sectionSearch = document.createElement('section');
        containment.appendChild(sectionSearch);
        //sectionSearch.classList.add('container');
        //Creo div de buscar
        const divSearch = document.createElement('div');
        sectionSearch.appendChild(divSearch);
        divSearch.classList.add('pokedex-filter','col-6','push-1');
        

        const labelSearch = document.createElement('label');
        const searchText = document.createTextNode('Nombre o Número ');
        const elementSearch = document.createElement('input');
        const buttonSearch = document.createElement('button');
        labelSearch.appendChild(searchText);
        divSearch.appendChild(labelSearch);
        divSearch.appendChild(elementSearch);
        divSearch.appendChild(buttonSearch);
        elementSearch.setAttribute('type','text');
        elementSearch.setAttribute('placeholder','Ej: 005, "Charmander", etc.');
        elementSearch.setAttribute('id','searchInputPoke');
        buttonSearch.setAttribute('type','submit');
        buttonSearch.setAttribute('value','Search');
        buttonSearch.setAttribute('id','search');
        buttonSearch.classList.add('button','button-search');

        //Creo DIV de Filtrar
        const divFilter = document.createElement('div');
        sectionSearch.appendChild(divFilter);
        divFilter.classList.add('pokedex-filter');





        //Creo contenedor del listado de Pokes
        const ulPokemonGrid = document.createElement('ul');
        containment.appendChild(ulPokemonGrid);
        ulPokemonGrid.setAttribute('id','ulPokemon');
        ulPokemonGrid.setAttribute('style','height:auto');
        ulPokemonGrid.classList.add("main");

        arrayShowWhole.forEach(element => {
            const liResultPoke = document.createElement('li');
            //Creo el elemento imagen y lo asigno a LI
            const figureElement = document.createElement('figure');
            let imgElementPoke = document.createElement('img');
            ulPokemonGrid.appendChild(liResultPoke);
            liResultPoke.appendChild(figureElement);
            figureElement.appendChild(imgElementPoke);    
            imgElementPoke.setAttribute('src',element.img);
            liResultPoke.classList.add("animating", "col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");
            //Creo el elemento Label para asignar el nombre y codigo de cada Pokemon al DIV
            const divInfoPokemon = document.createElement('div');
            liResultPoke.appendChild(divInfoPokemon);
            divInfoPokemon.classList.add("pokemon-info");
            //Creo el parrafo para agregar el id
            const pIdPoke = document.createElement('p');
            const spanIdPoke = document.createElement('span');
            let idTextPoke = document.createTextNode('# ' + element.num);
            pIdPoke.appendChild(spanIdPoke);
            spanIdPoke.appendChild(idTextPoke);
            divInfoPokemon.appendChild(pIdPoke);
            //Creo un H5 para el nombre
            const hFiveName = document.createElement('h5');
            let nombreTextPoke = document.createTextNode(element.name);
            divInfoPokemon.appendChild(hFiveName);
            hFiveName.appendChild(nombreTextPoke);
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
