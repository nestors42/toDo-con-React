import React from "react";

const CardTarea = ({ item, eliminarTarea, editarTarea }) => {
  const { title, priority, id, state, description } = item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 border p-2">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {title}
          {state === true ? (
            <span className="bg-success text-light badge ms-5">Completado</span>
          ) : (
            <span className="bg-info badge ms-5">Pendiente</span>
          )}
        </div>
        <p>{description}</p>
        <div>
          <button
            className="btn btn-sm btn-danger me-1"
            onClick={() => eliminarTarea(id)}
          >
            eliminar
          </button>
          <button
            className="btn btn-sm btn-warning me-1"
            onClick={() => editarTarea(id)}
          >
            editar
          </button>
        </div>
      </div>
      {priority === true ? (
        <p className="badge rounded-pill bg-primary ">Prioritario</p>
      ) : (
        <p className="badge rounded-pill bg-warning ">No Prioritario</p>
      )}
    </li>
  );
};

export default CardTarea;
