/* 
1. Creare un modulo ES6 che si chiama calcolatrice
2. Esportare due funzioni una per la moltiplicazione e una per l'addizione
3. Le due funzioni esportate devono essere create con le arrow function
4. Creare un file calcola.js e effettuare le seguenti operazioni e stamparle nella console:
    - Sommare 132 e 943
    - Moltiplicare 250 e 243
*/

// Arrow function metodo 1
export const addizione = (addendo1,addendo2) => {
    return addendo1 + addendo2
}

// Arrow function metodo 2
export const moltiplicazione = (param1,param2) => param1 * param2;

