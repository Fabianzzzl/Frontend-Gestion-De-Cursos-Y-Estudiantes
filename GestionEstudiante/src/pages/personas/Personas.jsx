import { useEffect, useState } from "react";
import api from "../../api/axios";
import "./personas.css";

import {
    alertaExito,
    alertaError,
    alertaAdvertencia,
    confirmarAccion
} from "../../utils/alertas";

const API_URL = "/personas/";

function Personas() {
    const [personas, setPersonas] = useState([]);
    const [formulario, setFormulario] = useState({
        dni: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        direccion: ""
    });

    const [editando, setEditando] = useState(null);
    const [cargando, setCargando] = useState(true);

    const cargarPersonas = async () => {
        try {
            setCargando(true);

            const respuesta = await api.get(API_URL);
            setPersonas(respuesta.data);

        } catch (error) {
            console.error("Error al obtener personas:", error);

            alertaError(
                error.response?.data?.detail ||
                "No se pudieron obtener las personas desde la API."
            );
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarPersonas();
    }, []);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const limpiarFormulario = () => {
        setFormulario({
            dni: "",
            nombres: "",
            apellidos: "",
            telefono: "",
            correo: "",
            direccion: ""
        });

        setEditando(null);
    };

    const guardarPersona = async (e) => {
        e.preventDefault();

        if (
            formulario.dni.trim() === "" ||
            formulario.nombres.trim() === "" ||
            formulario.apellidos.trim() === ""
        ) {
            alertaAdvertencia(
                "Complete los campos obligatorios."
            );
            return;
        }

        try {
            const datos = {
                ...formulario,
                dni: formulario.dni.trim(),
                nombres: formulario.nombres.trim(),
                apellidos: formulario.apellidos.trim(),
                telefono: formulario.telefono.trim(),
                correo: formulario.correo.trim(),
                direccion: formulario.direccion.trim()
            };

            if (editando === null) {
                await api.post(API_URL, datos);

                alertaExito(
                    "Persona registrada correctamente."
                );
            } else {
                await api.put(
                    `${API_URL}${editando}`,
                    datos
                );

                alertaExito(
                    "Persona actualizada correctamente."
                );
            }

            limpiarFormulario();
            await cargarPersonas();

        } catch (error) {
            console.error("Error al guardar persona:", error);

            alertaError(
                error.response?.data?.detail ||
                "No se pudo guardar la persona."
            );
        }
    };

    const editarPersona = (persona) => {
        setEditando(persona.id_persona);

        setFormulario({
            dni: persona.dni || "",
            nombres: persona.nombres || "",
            apellidos: persona.apellidos || "",
            telefono: persona.telefono || "",
            correo: persona.correo || "",
            direccion: persona.direccion || ""
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const eliminarPersona = async (id) => {
        const confirmado = await confirmarAccion(
            "Esta acción eliminará permanentemente la persona seleccionada."
        );

        if (!confirmado) return;

        try {
            await api.delete(`${API_URL}${id}`);

            alertaExito(
                "Persona eliminada correctamente."
            );

            await cargarPersonas();

        } catch (error) {
            console.error(
                "Error al eliminar persona:",
                error
            );

            alertaError(
                error.response?.data?.detail ||
                "No se pudo eliminar la persona."
            );
        }
    };

    return (
        <div className="personas-page container-fluid px-3 px-md-4 mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Personas</h1>
                    <p className="text-muted mb-0">
                        Gestión de personas registradas
                    </p>
                </div>

                <span className="page-count-badge">
                    {personas.length}
                </span>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-body">

                    <h4 className="mb-4">
                        {editando === null
                            ? "Registrar Persona"
                            : "Editar Persona"}
                    </h4>

                    <form onSubmit={guardarPersona}>
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="dni"
                                    className="form-label"
                                >
                                    DNI *
                                </label>

                                <input
                                    id="dni"
                                    type="text"
                                    name="dni"
                                    className="form-control"
                                    placeholder="Ej: 12345678"
                                    value={formulario.dni}
                                    onChange={manejarCambio}
                                    maxLength="8"
                                    required
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="nombres"
                                    className="form-label"
                                >
                                    Nombres *
                                </label>

                                <input
                                    id="nombres"
                                    type="text"
                                    name="nombres"
                                    className="form-control"
                                    placeholder="Ej: Juan Carlos"
                                    value={formulario.nombres}
                                    onChange={manejarCambio}
                                    required
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="apellidos"
                                    className="form-label"
                                >
                                    Apellidos *
                                </label>

                                <input
                                    id="apellidos"
                                    type="text"
                                    name="apellidos"
                                    className="form-control"
                                    placeholder="Ej: Pérez García"
                                    value={formulario.apellidos}
                                    onChange={manejarCambio}
                                    required
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="telefono"
                                    className="form-label"
                                >
                                    Teléfono
                                </label>

                                <input
                                    id="telefono"
                                    type="text"
                                    name="telefono"
                                    className="form-control"
                                    placeholder="Ej: 987654321"
                                    value={formulario.telefono}
                                    onChange={manejarCambio}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="correo"
                                    className="form-label"
                                >
                                    Correo
                                </label>

                                <input
                                    id="correo"
                                    type="email"
                                    name="correo"
                                    className="form-control"
                                    placeholder="Ej: persona@gmail.com"
                                    value={formulario.correo}
                                    onChange={manejarCambio}
                                />
                            </div>

                            <div className="col-md-4 mb-3">
                                <label
                                    htmlFor="direccion"
                                    className="form-label"
                                >
                                    Dirección
                                </label>

                                <input
                                    id="direccion"
                                    type="text"
                                    name="direccion"
                                    className="form-control"
                                    placeholder="Ej: Av. Lima 123"
                                    value={formulario.direccion}
                                    onChange={manejarCambio}
                                />
                            </div>

                        </div>

                        <div className="d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                {editando === null
                                    ? "Guardar Persona"
                                    : "Actualizar Persona"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={limpiarFormulario}
                            >
                                Limpiar
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">

                    <h4 className="mb-3">
                        Personas registradas
                    </h4>

                    {cargando ? (
                        <div className="text-center py-4">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Cargando...
                                </span>
                            </div>

                            <p className="text-muted mt-2 mb-0">
                                Cargando personas...
                            </p>
                        </div>
                    ) : personas.length === 0 ? (
                        <div className="alert alert-info">
                            No hay personas registradas.
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">

                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DNI</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Teléfono</th>
                                        <th>Correo</th>
                                        <th>Dirección</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {personas.map((persona) => (
                                        <tr
                                            key={persona.id_persona}
                                        >
                                            <td>
                                                {persona.id_persona}
                                            </td>

                                            <td>
                                                {persona.dni}
                                            </td>

                                            <td>
                                                {persona.nombres}
                                            </td>

                                            <td>
                                                {persona.apellidos}
                                            </td>

                                            <td>
                                                {persona.telefono || "-"}
                                            </td>

                                            <td>
                                                {persona.correo || "-"}
                                            </td>

                                            <td>
                                                {persona.direccion || "-"}
                                            </td>

                                            <td>
                                                <div className="d-flex gap-2">

                                                    <button
                                                        type="button"
                                                        className="btn btn-warning btn-sm"
                                                        onClick={() =>
                                                            editarPersona(
                                                                persona
                                                            )
                                                        }
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            eliminarPersona(
                                                                persona.id_persona
                                                            )
                                                        }
                                                    >
                                                        Eliminar
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )}

                </div>
            </div>

        </div>
    );
}

export default Personas;
