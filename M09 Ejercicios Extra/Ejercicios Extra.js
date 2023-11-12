/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = [];
   var claves = Object.keys(objeto);

   arregloDeArreglos = claves.map(function(clave) {
      return [clave, objeto[clave]];
   });
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var numVeces = {};
   for (var i = 0; i < string.length; i++){
      var letra = string[i].toLowerCase();
      if (numVeces.hasOwnProperty(letra)){
         numVeces[letra]++;
      }else{
         numVeces[letra]=1;
      }
   }
   return numVeces;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = "";
   var minusculas = "";

   for (var i = 0; i < string.length; i++){
      if(string[i] === string[i].toUpperCase()){
         mayusculas = mayusculas + string[i];
      } else {
         minusculas = minusculas + string[i];
      }
   }

   var resultado = mayusculas + minusculas;
   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split('');
   var resultado = '';
   for (var i = 0; i < palabras.length ; i++){
      var invertida = palabras[i].split('').reverse().join('');
      resultado = resultado + invertida;
      if (i<palabras.length - 1){
         resultado = resultado + ' ';
      }
   }
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numString = numero.toString();
   var inverso = numString.split('').reverse().join('');
   if(numString === inverso) {
      return "Es capicua";
   } else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var palabra = string.split('');
   var resultado = '';
   for (var i = 0; i < palabra.length; i++){
      if(palabra[i] !== 'a' && palabra[i] !== 'b' && palabra[i] !== 'c'){
         resultado = resultado + palabra[i];
      }
   }
   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArreglo = arrayOfStrings.sort(function(a,b) {
      return a.length - b.length;
   });
   return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];

   for(var i = 0; i < array1.length; i++){
      if(array2.includes(array1[i]) %% !interseccion.includes(array1[i])) {
         interseccion.push(array1[i]);
      }
   }
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
