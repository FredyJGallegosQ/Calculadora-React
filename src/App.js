import './App.css';
import React, {useState} from 'react';

function App() {
  const [nro1, setNro1] = useState("");
  const [nro2, setNro2] = useState("");
  const [operacion, setOperacion] = useState("");
  const [resul, setResul] = useState(0);
  function clickNro (value){
    if(operacion === ""){
      setNro1(nro1 + value);
    }
    else{
      setNro2(nro2 + value);
    }
  }
  function clickOperacion(value){
    setOperacion(value);
  }
  function clickResul(){
    switch(operacion){
      case "+":
        setResul(Number(nro1) + Number(nro2));
        break;
      case "-":
        setResul(Number(nro1) - Number(nro2));
        break;
      case "x":
        setResul(Number(nro1) * Number(nro2));
        break;
      case "/":
        setResul(Number(nro1) / Number(nro2));
        break;
    }
  }
  function clickAC(){
    setNro1("");
    setNro2("");
    setOperacion("");
    setResul("");
  }
  return (
    <div className="App">
      <h1 className = "title">Calculadora con react</h1>
      <div className = "Calculadora-grid">
        <div className = "output">
          <div className = "Operando">{resul ? nro1 + operacion + nro2 : 
          (operacion ? nro1 + operacion : "")}</div>
          <div className = "Operador">{resul ? resul : (!operacion ? nro1 : nro2)}</div>
        </div>
        <button onClick = {() => {clickAC()}} className = "AC">AC</button>
        <button onClick = {() => {clickOperacion("/")}}>/</button>
        <button onClick = {() => {clickNro(7)}}>7</button>
        <button onClick = {() => {clickNro(8)}}>8</button>
        <button onClick = {() => {clickNro(9)}}>9</button>
        <button onClick = {() => {clickOperacion("x")}}>x</button>
        <button onClick = {() => {clickNro(4)}}>4</button>
        <button onClick = {() => {clickNro(5)}}>5</button>
        <button onClick = {() => {clickNro(6)}}>6</button>
        <button onClick = {() => {clickOperacion("+")}}>+</button>
        <button onClick = {() => {clickNro(1)}}>1</button>
        <button onClick = {() => {clickNro(2)}}>2</button>
        <button onClick = {() => {clickNro(3)}}>3</button>
        <button onClick = {() => {clickOperacion("-")}}>-</button>
        <button onClick = {() => {clickNro(0)}}>0</button>
        <button onClick = {() => {clickNro(".")}}>.</button>
        <button onClick = {() => {clickResul()}} className = "igual">=</button>
      </div>
      <h2 className = "Alumno">Gallegos Quiñones, Fredy Julmer    120886</h2>
    </div>
  );
}

export default App;
