import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10000, 32, 2]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("afzohWUNFad");
const sorter = new Sorter(charactersCollection);

console.log(charactersCollection.data);

sorter.sort();
console.log(charactersCollection.data);
