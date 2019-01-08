// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// window.dataPokemon = {

const order = (data,status) => {
  if (status === 'ascendente'){
    data.sort(function (a,b){
      if(a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      } 
      return 0;
    });
  } 
  if(status === 'descendente'){
    data.reverse(function (a,b){
      if(a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      } 
      return 0;
    });
  } 
};

const typePoke = () => {
  // function onlyUnique(value,index,self){
  //   return self.indexOf(value) === index;
  // }
  let pokeTypeAll = POKEMON.pokemon
  .map(element => element.type)
  // .filter(onlyUnique)

  let cadaTipo = [];
  let individual = [];
  
  for (let i = 0; i < pokeTypeAll.length; i++ ){
      cadaTipo.push(pokeTypeAll[i]);
      for (let j = 0; j < cadaTipo.length; j++ ){
          if (individual.indexOf(cadaTipo[i][j])=== -1) {
              individual.push(cadaTipo[i][j]);
          }
      }  
  }
  return individual;
}

const filterPokeType = (data,typePoke) => {
  // console.log('typePoke ' + typePoke);
  // console.log('data ' + data);
  const filtered = data.filter(element => {
    return element.type.indexOf(typePoke) >= 0;
  });
  return filtered;  
}

const searchForID = (pokeId) => {
  let arrayPokeID = POKEMON["pokemon"][pokeId];
  return arrayPokeID;
}

const comparar = (pokeOne,pokeTwo) => {
  //debe traer el id del pokemon a buscar
  // POKEMON[]

  return arrayPokes;
}

// }
