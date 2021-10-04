import { useState } from "react";
import { render } from "react-dom";

let acu = 0;
let acu1 = 0;
let num;
let ope = "";
let contador = "1";

const Calculadora = (props) => {
  return (
    <div>
      <div style={etiquetaStyle}>
        <Etiqueta caption="0" id="lbl_operacion" />
      </div>
      <div style={etiquetaStyle}>
        <Etiqueta caption="0" id="lbl_res" />
      </div>
      <div style={btnStyle}>
        <Boton caption="C" id="C" />
      </div>
      <div style={btnStyle}>
        <Boton caption="+" id="+" />
        <Boton caption="-" id="-" />
        <Boton caption="*" id="*" />
        <Boton caption="/" id="/" />
        <Boton caption="=" id="=" />
      </div>
      <div style={btnStyle}>
        <Boton caption="0" id="0" />
        <Boton caption="1" id="1" />
        <Boton caption="2" id="2" />
        <Boton caption="3" id="3" />
        <Boton caption="4" id="4" />
        <Boton caption="5" id="5" />
        <Boton caption="6" id="6" />
        <Boton caption="7" id="7" />
        <Boton caption="8" id="8" />
        <Boton caption="9" id="9" />
      </div>
    </div>
  );
};

const btnStyle = {
  border: "1px solid red",
  fontWeight: "bold",
  width: "100px"
};

const etiquetaStyle = {
  border: "1px solid red",
  //fontWeight: "bold",
  width: "100px",
  fontSize: "20px"
};
function setValue(x) {
  acu = acu + x;
  if (x === "+" || x === "-" || x === "*" || x === "/") {
    ope = x;
    console.debug(ope);
  } else {
    num = parseFloat(x);
    if (contador === "1") {
      acu1 = num;
      contador = "0";
    }
    console.debug("numero " + num);
    console.debug("acumulado " + acu1);
    switch (ope) {
      case "+":
        acu1 = parseFloat(acu1) + num;
        //console.debug(acu1);
        break;
      case "-":
        acu1 = parseFloat(acu1) - num;
        break;
      case "*":
        acu1 = parseFloat(acu1) * num;
        break;
      case "/":
        acu1 = parseFloat(acu1) / num;
        break;
      default:
    }
    console.debug("acumulado " + acu1);
  }

  //document.getElementById("lbl_operacion").setValue = x;
  if (x === "C") {
    acu = 0;
    acu1 = 0;
    document.getElementById("lbl_operacion").innerHTML = "0";
  } else {
    document.getElementById("lbl_operacion").innerHTML = acu;
  }
  //  console.debug(acu1);
}

const Boton = (props) => {
  /*  const [result, setResult] = useState([]);
  setResult("omar");*/
  return (
    <button id={props.id} onClick={() => setValue(props.id)}>
      {props.caption}
    </button>
  );
};

const Etiqueta = (props) => {
  return <label id={props.id}>{props.caption}</label>;
};

export default Calculadora;
