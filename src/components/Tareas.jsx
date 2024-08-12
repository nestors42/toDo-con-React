import React from "react";
import CardTarea from "./CardTarea";

const Tareas = ({ tareasArray, eliminarTarea, editarTarea, mostrarMensaje }) => {
  return (
    <div className="my-5">
      <h2 className="mb-2 text-primary text-center">Tareas</h2>
      {mostrarMensaje ()}
      <ul>
        {tareasArray.map((item) => (
          <CardTarea
            key={item.id}
            item={item}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
