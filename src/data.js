// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window


// window.dataPokemon = {

  const example = () => {
  return 'example';
};

// window.example = example;

const searchForID = (pokeId) => {
  let arrayPokeID = POKEMON["pokemon"][pokeId];
  return arrayPokeID;
}

const wholePokes = () => {
  let arrayCompletePoke = POKEMON.pokemon;
  return arrayCompletePoke;
}

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

const filterPokeType = (typePoke) => {
  let pokeType = POKEMON.pokemon;
  const tipo = pokeType.filter((element) => {
      return element.type[0] === typePoke || element.type[1] === typePoke;    
  });
  //console.log(tipo);
  };
    
//Filtrados, esto creará un nuevo arreglo "newNumbers", y guardo todos los elementos del arreglo que estoy
//buscando, cuando se cumpla la condición, en este caso, cuando sean pares.
/* const numbers = [1,2,3,4,5];

const newNumbres = numbers.filter((element) => {
  return element % 2 === 0 ;
}) */


const comparar = (pokeOne,pokeTwo) => {
  //debe traer el id del pokemon a buscar
  // POKEMON[]

  return arrayPokes;
}

// }
