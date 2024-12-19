import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };
    alert(`Usuario Agregado:\nNombre: ${userData.name}\nEmail: ${userData.email}`);
    setShowModal(false); // Cierra el modal después de enviar
  };

  return (
    <>
      <div className="navbar">
        <h1 className="navbar-title">Turnos</h1>
        <div className="navbar-buttons">
          <button onClick={toggleModal}>Agregar Usuario</button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Agregar Usuario</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="modal-buttons">
                <button type="submit">Guardar</button>
                <button type="button" onClick={toggleModal}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
