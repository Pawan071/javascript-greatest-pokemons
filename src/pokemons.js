// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const getAllFirePokemons = (pokemons) =>
    pokemons.filter(pokemons => pokemons.type.includes('Fire'));

const FirePokemons = getAllFirePokemons(pokemons);
console.log(FirePokemons);

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

const shortestPokemon = (pokemons) => {
  if (pokemons.length === 0) return 0;

  let shortest = pokemons[0];

  pokemons.forEach((pokemon) => {
    const pokemonHeight = parseFloat(pokemon.height);
    const shortestHeight = parseFloat(shortest.height);

    if (pokemonHeight < shortestHeight) {
      shortest = pokemon;
    }
  });

  return shortest.name;
};

const shortest = shortestPokemon(pokemons);
console.log(shortest);

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

const candyAverage = (pokemons) => {
  const totalCandyCount = pokemons.reduce((sum, pokemon) => {
    return sum + (pokemon.candy_count || 0);
  }, 0);

  const count = pokemons.length;

  if (count === 0) return 0;

  const averageCandyCount = totalCandyCount / count;
  return Number(averageCandyCount.toFixed(2));
};

const averageCandy = candyAverage(pokemons);
console.log(averageCandy);

// Iteration 4: images for the first 10 `Ground`  Pokemons

const getGroundPokeImg = (pokemons) =>{
  if(pokemons.length === 0) return 0;

  const groundPokemon = pokemons.filter(pokemon => pokemon.type.includes('Ground'));

  const groundPokeImg = groundPokemon.slice(0 ,10).map(pokemon => pokemon.img)
  return groundPokeImg
}

const groundPokeImges = getGroundPokeImg(pokemons);
console.log(groundPokeImges)

// Iteration 5: Find all pokemon names heavier than Pikachu

const getHeavyPokemons = (pokemons) => {
  if(pokemons.length === 0) return 0;

  const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");

  const pikachuWeight = parseFloat(pikachu.weight);

  const heavyPokemon = pokemons.filter((pokemon) => 
    parseFloat(pokemon.weight) > pikachuWeight
  );

  return heavyPokemon.map(pokemon => pokemon.name);
}

const heavyPokemon = getHeavyPokemons(pokemons);
console.log(heavyPokemon);


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

const orderAlphabetically = (pokemons) => {
  return pokemons
  .map(pokemon=> pokemon.name)
  .sort((a, b)=> a.localeCompare(b))
  .slice(0, 20);
}

const first20Pokemons = orderAlphabetically(pokemons);
console.log(first20Pokemons);  

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (pokemons) => {
  const strongPokemons = pokemons.filter((pokemon) =>
   pokemon.weaknesses.length === 1);

  const strongPokemonName = strongPokemons.slice(0, 15)
  .map(pokemon => pokemon.name)
  return strongPokemonName
}

const strongPokemonName = strongPokemons(pokemons);
console.log(strongPokemonName);