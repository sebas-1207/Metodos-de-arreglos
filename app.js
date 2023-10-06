const btnJoin = document.getElementById('btn-join');
if (btnJoin) {
  btnJoin.addEventListener('click', ejecutarJoin);

  //Funcion para el ejemplo del join()
  function ejecutarJoin(e) {
    e.preventDefault();
    const inputArray = document.getElementById('inputArray').value;

    // Separador ingresado por el usuario
    const separador = document.getElementById('inputSeparator').value;

    // Dividir la entrada en elementos de un arreglo
    const arr = inputArray.split(',');

    // Unir los elementos con el separador
    const resultado = arr.join(separador);

    // Mostrar el resultado
    const outputElement = document.getElementById('join-output');
    outputElement.textContent = resultado;

    // Almacenar el resultado en el localStorage
    localStorage.setItem('resultadoJoin', resultado);
  }
}


const btnArray = document.getElementById('btn-array');
if (btnArray) {
  btnArray.addEventListener('click', verificarArray);

  //Funcion para el ejemplo del isArray()
  function verificarArray(e) {
    e.preventDefault();
    const inputValue = document.getElementById('inputValue').value;

    // Intentar convertir el valor a un objeto
    let parsedValue;
    try {
      parsedValue = JSON.parse(inputValue);
    } catch (error) {
      mostrarResultado(false);
      return;
    }

    // Verificar si es un arreglo
    const esArreglo = Array.isArray(parsedValue);

    // Mostrar el resultado
    mostrarResultado(esArreglo);
  }

  function mostrarResultado(esArreglo) {
    const outputElement = document.getElementById('isArray-output');
    outputElement.textContent = esArreglo ? 'Es un arreglo.' : 'No es un arreglo.';

    // Almacenar el resultado en el localStorage
    localStorage.setItem('resultadoisArray', esArreglo);
  }
}





btntoString = document.getElementById('btn-toString');
if (btntoString) {
  btntoString.addEventListener('click', ejecutarToString);

  //Funcion para el ejemplo de toString()
  function ejecutarToString(e) {
    e.preventDefault();
    const inputArrayToString = document.getElementById('inputArrayToString').value;

    // Eliminar corchetes, comillas y espacios
    const cleanedInput = inputArrayToString.replace(/[\[\]'" ]/g, '');

    // Dividir la entrada en elementos de un arreglo
    const arr = cleanedInput.split(',');

    // Convertir el arreglo a una cadena de texto usando toString()
    const resultado = arr.toString();

    // Mostrar el resultado
    const outputElement = document.getElementById('toString-output');
    outputElement.textContent = resultado;

    // Almacenar el resultado en el localStorage
    localStorage.setItem('resultadotoString', resultado);
  }
}
