import capitalize from '../code.test/capitalize.js'

if (capitalize('hello') !== 'hello') {
    throw new Error('Функция работает неверно!');
  }

  
  console.log('Все тесты пройдены!');
  