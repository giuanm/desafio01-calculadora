
import Input from './components/Input';
import Button from './components/button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handledOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handledAddNumber = (num) => {
    setCurrentNumber(prev => `${prev==='0' ? '' : prev}${num}`)
  };

  const handledSumNumbers = () => {

    if( firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(String('0'));
      setOperation('');
    }

  }

  const handledMinusNumbers = () => {

    if( firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber(String('0'));
      setOperation('');
    }

  }

  const handledMultNumbers = () => {

    if( firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('x');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber(String('0'));
      setOperation('');
    }

  }
  
  const handledDivNumbers = () => {

    if( firstNumber ==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    } else {
      const mult = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber(String('0'));
      setOperation('');
    }

  }

  const handledEquals = () => {

    if( firstNumber !=='0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handledSumNumbers();
          break;
        case '-':
          handledMinusNumbers();
          break;
          case 'x':
            handledMultNumbers();
            break;
            case '/':
              handledDivNumbers();
              break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="7" onClick={() => handledAddNumber('7')}/>
          <Button label="8" onClick={() => handledAddNumber('8')}/>
          <Button label="9" onClick={() => handledAddNumber('9')}/>
          <Button label="/" onClick={handledDivNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handledAddNumber('4')}/>
          <Button label="5" onClick={() => handledAddNumber('5')}/>
          <Button label="6" onClick={() => handledAddNumber('6')}/>
          <Button label="x" onClick={handledMultNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handledAddNumber('1')}/>
          <Button label="2" onClick={() => handledAddNumber('2')}/>
          <Button label="3" onClick={() => handledAddNumber('3')}/>
          <Button label="-" onClick={handledMinusNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handledAddNumber('0')}/>
          <Button label="00" onClick={() => handledAddNumber('00')}/>
          <Button label="." onClick={() => handledAddNumber('.')}/>
          <Button label="+" onClick={handledSumNumbers}/>
        </Row>
        <Row>
          <Button id="op" label="C" onClick={handledOnClear}/>
          <Button label="=" onClick={handledEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
