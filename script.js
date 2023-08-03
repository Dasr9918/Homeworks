//Uso de all array functions

//Creamos un arreglo
let animales = ['Perro','Gato'];
let colores = ['Cafe','Negro'];

//Uso del .at() para acceder a los elementos de un arreglo.
let primerElemento = animales.at(0)
//console.log(primerElemento)

//Uso del .concat() para combinar dos o mas arreglos en uno solo.
let arregloConcatenado = animales.concat(colores)
//console.log(arregloConcatenado)

//Uso del constructor Array() para crear arreglos vacios o que puedan ser especificos.
let arreglo1 = new Array();

let arreglo2 = new Array(1,2,3,4,5)
//console.log(arreglo2)

//Uso del .copyWithin() para copiar una secuencia de elemenotos y sobrescribir los existentes.
let numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.copyWithin(4,0,3)
//console.log(numeros)

//Uso del .entries() para obtener un iterador que devuelve pares clave-valor.
let frutas =  ['Manzana','Pera','Platano'];
let iterador = frutas.entries();
//for (let entrada of iterador) {
//console.log(entrada);
//}

//Uso del .every() para verificar si todos los elementos de un arreglo cumplen con una condición determinada.
let numeros2 = [1,2,3,4,5,6,7,8];
let sonPares = numeros2.every(numeros => numeros % 2 == 0)
//console.log(sonPares)


//Uso del .fill() para rellenar o modificar todos los elementos de un arreglo con un valor especifico.
let numeros3 = [1,2,3,4,5,6,7,8];
numeros3.fill(0);
//console.log(numeros3)

//Uso del .filter() para crear un nuevo arreglo con todo los elementos que cumplan con determinada condición.
let numeros1 = [1,2,3,4,5,6,7,8,9,10]
//Filtramos los numeros pares en el arreglo.
let numerosPares = numeros1.filter(numero => numero % 2 == 0);
//console.log(numerosPares)

//Uso del .find() para encontrar el primer elemento de un arreglo que cumpla con una condición determinada.
let numeros4 = [1,2,3,4,5,6,7,8,9,10]
//Encontrar el primer numero par en el arreglo.
let primerNumeroPar = numeros4.find(numero => numero % 2 == 0);
//console.log(primerNumeroPar)

//Uso del .findIndex() para encontrar el primer indice de un arreglo que cumpla con una condición determinada.
let numeros0 = [1,2,3,4,5,6,7,8,9,10];
let indicePrimerNumeroPar = numeros0.findIndex(numero => numero % 2 === 0);
//console.log(indicePrimerNumeroPar)

//Uso del .flat() para aplanar un arreglo es decir eliminar niveles de anidamiento.
let arr = [1,2,[3,4],5,[6,7,[8,9],10]]
let arrAplanado = arr.flat();
//console.log(arrAplanado)

//Uso del .flatMap() mapear cada elemento de un arreglo a un nuevo valor.
let arr1 = [1,2,3];
let resultado = arr1.flatMap(numero => [numero,numero]);
//console.log(resultado)

//Uso del .forEach() para iterar sobre los elementos de un arreglo y ejecutar una funcion llamada callback en cada uno de ellos.
let frutas1 = ['Manzana','Pera','Platano'];
//frutas1.forEach(fruta => console.log(fruta));

//Uso del .includes() para verificar si un arreglo tiene un valor en especifico.
let frutas2 = ['Manzana','Pera','Platano'];
let contienePlatano = frutas.includes('Platano')
//console.log(contienePlatano)

//Uso del .InfexOf() se utiliza para encontrar la primera aparicón de un valor en especifico en un arreglo y devuelve el índice correspondiente.
let frutas3 = ['Manzana','Pera','Platano','Naranja','Platano'];
let indicePlatano = frutas3.indexOf('Platano')
//console.log(indicePlatano)

//Uso del .join() para unir todos los elementos de un arreglo en una cadena de texto.
let frutas4 = ['Manzana','Pera','Platano']
let cadenaFrutas = frutas4.join(',');
//console.log(cadenaFrutas)

//Uso del .keys() para utilizar un iterador que devuelva las claves indice de un arreglo.
let frutas5 = ['Manzana','Pera','Platano']
let iterador1 = frutas5.keys()
//for (let clave of iterador1)  {
//    console.log(clave)
//}

//Uso del .lastIndexOf() para encontrar el indice de la ultima aparición de un valor en un arreglo.
let numeros5 = [2,5,8,2,3,9,2];
let ultimoIndiceDelDos = numeros5.lastIndexOf(2);
//console.log(ultimoIndiceDelDos)

//Uso del .map() para crear un arreglo a partir de otro arreglo.
let numeros6 = [1,2,3,4,5,6,7];
let cuadrados = numeros6.map(numero => numero * numero);
//console.log(cuadrados)

//Uso del .pop() para eliminar el ultimo elemento de un arreglo.
let numeros7 = [1,2,3,4,5,6,7];
let numeroEliminado = numeros7.pop();
//console.log(numeroEliminado)

//Uso del .push() para añadir un elemento al final del arreglo.
let animales2 = animales.push('Conejo')
//console.log(animales) 

//Uso del .reduce() para reducir los elementos de un arreglo a un solo valor.
let numeros8 = [1,2,3,4,5,6,7];
//let suma = numeros8.reduce((acomulador, numero)) => acomulador + numero, 0);
//console.log(suma)

//Uso del .reduceRight() funciona de manera similar que .reduce pero itera los elementos de un arreglo de derecha a izquierda.
let numeros9 = [1,2,3,4,5,6,7];
let cadenaConcatenada = numeros9.reduceRight((acumulador,numero) => acumulador + '_' + numero)
//console.log(cadenaConcatenada)

//Uso del .reverse() para invertir el orden de los elementos de un arreglo.
let frutas6 = ['Manzana','Pera','Platano'];
frutas6.reverse();
//console.log(frutas6)

//Uso del .shift() para eliminar el primer elemento de un arreglo y devolverlo a dicho elemento.
let frutas7 = ['Manzana','Pera','Platano'];
let primeraFruta = frutas7.shift()
//console.log(primeraFruta)

//Uso del .slice() para crear una copia de un subarreglo a partir de otro arreglo.
let frutas8 = ['Manzana','Pera','Platano','Uva','Naranja'];
let subarreglo = frutas8.slice(1,3)
//console.log(subarreglo)

//Uso del .some() para verificar si al menos un elemento del arreglo cumple con cierta condición.
let numeros10 = [1,2,3,4,5,6,7]
let hayNumeroPar = numeros10.some(numero => numero % 2 === 0)
//onsole.log(hayNumeroPar)

//Uso del .sort() para ordenar los elementos de un arreglo en su lugar es decir modifica el arreglo original y devuelve el arreglo ordenado.
let numeros11 = [5,2,3,6,1,6,7]
numeros11.sort()
//console.log(numeros11)

//Uso del .splice() para modificar un arreglo eliminado, reemplazando o agregando elementos en una posición especifica.
let frutas9 = ['Manzana','Pera','Platano','Uva','Naranja'];
frutas.splice(2,1)
//console.log(frutas9)

//Uso del .toLocalString() para convertir un arreglo en una cadena de texto localizada.
let numeros12 = [1000, 2000, 3000]
let cadenaLocalizada = numeros12.toLocaleString()
//console.log(cadenaLocalizada)

//Uso del .toString() para convertir un arreglo separado por comas en una cadena de texto.
let frutas10 = ['Manzana','Pera','Platano','Uva','Naranja'];
let cadenaFrutas1 = frutas10.toString()
//console.log(cadenaFrutas1)

//Uso del .unshift() para agregar uno o mas elementos al inicio de un arreglo y devuelve la nueva longitud.
let frutas11 = ['Manzana','Pera','Platano','Uva','Naranja'];
let nuevaLongitud = frutas11.unshift('Mango','Sandia')
//console.log(frutas11)

//Uso del .values() para obtener un iterador que devuelva los valores de un arreglo.
let frutas12 = ['Manzana','Pera','Platano','Uva','Naranja'];
let iterador2 = frutas12.values()
//for (let clave of iterador2)  {
       //console.log(valor)
//}
