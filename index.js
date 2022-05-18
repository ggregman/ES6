import { add } from "./lib/addmodule.js";
import { sub } from "./lib/submodule.js";

// import { sub as sottrazione } from "./lib/submodule.js"; // ALIAS

import addizione, {sottrazione, log} from "./lib/nuovomodulo.js" //

// import * from as mathModule from "./lib"; // importa tutte le funzioni
// console.log(mathModule.add(5,5));

console.log(add(5,5));
console.log(sub(10,5));

const messaggio = log("ciao");
console.log(messaggio);

console.log(addizione(10,5));
console.log(sottrazione(10,5));


