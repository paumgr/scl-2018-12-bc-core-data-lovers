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
  let pokeType = [];
  POKEMON.pokemon.forEach(element => {
    pokeType.push(element.type);
  });

  // pokeType = pokeType.filter(function(item,index,inputArray){
  //   return inputArray.indexOf(item) == index;
  // });
  return pokeType;
  
}
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
