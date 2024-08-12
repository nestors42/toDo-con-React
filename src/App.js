import { useState } from "react";
import Formularios from "./components/Formularios";
import Tareas from "./components/Tareas";

const tareasIniciales = [
  {
    id: 1,
    title: "Programacion Orientada a objetos",
    description: "Modulo 1",
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: "Condicionales",
    description: "Modulo 2",
    state: true,
    priority: false,
  },
  {
    id: 3,
    title: "Diagrama de Flujo",
    description: "Modulo 2",
    state: true,
    priority: true,
  },
];

function App() {
  const [tareasArray, setTareasArray] = useState(tareasIniciales);

  const agregarTarea = (nuevaTarea) => {
    setTareasArray([nuevaTarea, ...tareasArray]);
  };

  const eliminarTarea = (id) => {
    const arrayFiltrado = tareasArray.filter((item) => item.id !== id);
    setTareasArray(arrayFiltrado);
  };

  const editarTarea = (id) => {
    const arrayEditado = tareasArray.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    setTareasArray(arrayEditado);
  };

  const mostrarMensaje = () => {
    if (tareasArray.length === 0) {
      return (
        <div className=" border rounded-3 mb-2 text-center ">
          <p className=" fs-4 text-dark text-align text-center">No hay Tareas</p>
        </div>
      );
    }
  };

  return (
    <div className="container my-1">
      <h2 className="text-primary mb-3">Formularios</h2>
      <Formularios agregarTarea={agregarTarea} />
      {/* titulo de las tareas */}
      {/* tareas */}
      <Tareas
        tareasArray={tareasArray}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
        mostrarMensaje={mostrarMensaje}
      />
    </div>
  );
}

export default App;
