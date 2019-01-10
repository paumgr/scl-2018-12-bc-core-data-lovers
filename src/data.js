// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// window.dataPokemon = {
const order = (data,status) => {
  if (status === 'less'){
    data.sort(function (a,b){
      if(a.num > b.num){
        return 1;
      }
      if (a.num < b.num){
        return -1;
      } 
      return 0;
    });
  }else if(status === 'major'){
    data.reverse(function (a,b){
      if(a.num > b.num){
        return 1;
      }
      if (a.num < b.num){
        return -1;
      } 
      return 0;
    });
  }else if (status === 'upward'){
    data.sort(function (a,b){
      if(a.name > b.name){
        return 1;
      }
      if (a.name < b.name){
        return -1;
      } 
      return 0;
    });
  } else if(status === 'falling'){
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
}

const typePoke = () => {
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
  const filtered = data.filter(element => {
    return element.type.indexOf(typePoke) >= 0;
  });
  return filtered;  
}

const searchForID = (pokeId) => {
  let arrayPokeID = POKEMON["pokemon"][pokeId];
  return arrayPokeID;
}

const probability = (data, type) => {
  let calculo = data.filter((element) => {return element.type.indexOf(type) >= 0})
  .reduce((acum,element)=> {return acum + element.spawn_chance},0);

  return calculo/151;
}

// }
