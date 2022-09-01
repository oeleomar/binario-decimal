const convert = () => {
  let inputValue = document.querySelector('#binario').value;
  if(
    inputValue.includes('2') || 
    inputValue.includes('3') ||
    inputValue.includes('4') ||
    inputValue.includes('5') ||
    inputValue.includes('6') ||
    inputValue.includes('7') ||
    inputValue.includes('8') ||
    inputValue.includes('9')){
    alert('Digite um número binário válido!');
    document.querySelector('#binario').value = '';
    return
  }
  const reversed = inputValue.split('').reverse();

  let result = 0;

  for(let i = 0; i < reversed.length; i++){
    if(reversed[i] === '1'){
      result += Math.pow(2, i);
    }
  }

  mostraResultado(result);
  document.querySelector('#binario').value = '';
}

const mostraResultado = (result) => {
  const resultDisplay = document.querySelector('#result');
  resultDisplay.innerHTML = '';
  resultDisplay.innerHTML = `Resultado: ${result}`;
}