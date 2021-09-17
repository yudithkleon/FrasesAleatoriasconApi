import React, { useEffect, useState } from "react";
import Mostrar from "../Component/Mostrar";

const initialFrase = {
  Title: "quote",
  Description: "sdcsd",
  Autor: "autodr",
};

const App = () => {
 const [frase, setFrase] = useState(initialFrase);

  const updateFrase = async () => {
    const url = "http://localhost:4000/frases";
    const resp = await fetch(url);
    const newData = await resp.json();
    console.log(newData);
    let posi = Math.floor(Math.random() * newData.length);

    const { Title, Description, Autor } = newData[posi];
    console.log(posi);

    setFrase({
      Title,
      Description,
      Autor,
    });
  };

  useEffect(() => {
    updateFrase();
  }, []);

  return (
    <body class="p-3 mb-2 bg-info text-dark">
    <div className="container m-9 p-9">
      <div className="m-8">
        <Mostrar key={frase.id} frase={frase} />
      </div>
      <button
        onClick={() => updateFrase(initialFrase)}
        type="button"
        className="btn btn-outline-success"
      >
        Siguiente
      </button>
    </div>
    </body>
  );
};

export default App;

