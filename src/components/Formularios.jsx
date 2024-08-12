import React, { useState } from "react";
import Swal from "sweetalert2";

const Formularios = ({ agregarTarea }) => {
  // informacion de los input
  const [tarea, setTarea] = useState({
    title: "",
    description: "",
    state: true,
    priority: false,
  });
  const { title, description, state, priority } = tarea;

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...😐",
        text: "Complete todos los campos",
      });
      return;
    }
    const nuevaTarea = {
        id: Date.now(),
        title: title,
        description: description,
        state: 'Completado' === state ? true : false,
        priority: priority

    }
    agregarTarea(nuevaTarea)


    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tú tarea fué enviada exitosamente 😎",
      showConfirmButton: true,
      timer: 5000,
    });
  };

  return (
    <>
      <form onSubmit={(e) => enviarFormulario(e)} className="container mt-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese tarea"
          value={title}
          onChange={(e) => setTarea({ ...tarea, title: e.target.value })} // con setTarea modifico el valor por defecto e ingreso lo que el usuario ingrese en el input
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese un comentario"
          value={description}
          onChange={(e) => setTarea({ ...tarea, description: e.target.value })}
        ></textarea>
        <select
          className="form-control mb-2"
          value={state}
          onChange={(e) => setTarea({ ...tarea, state: e.target.value })}
        >
          <option>Pendiente</option>
          <option>Completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="priority"
            checked={priority}
            onChange={(e) => setTarea({ ...tarea, priority: e.target.checked })}
          />
          <label>Prioridad</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formularios;
