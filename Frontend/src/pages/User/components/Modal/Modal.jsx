import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Modal({ dataModal }) {
  return (
    <div
      className={
        dataModal.isOpenModal ? "modal-container" : "modal-container hidden"
      }
    >
      <div onClick={dataModal.handleCloseModal} className="overlay"></div>
      <div className="Modal">
        <FontAwesomeIcon
          className="close-modal"
          onClick={dataModal.handleCloseModal}
          icon={faXmark}
        />
        <span className="title">Edit name</span>
        <p className="description">
          Update your first and last name here. Click save when you're done
        </p>
        <label htmlFor="firstName">
          First name
          <input
            id="firstName"
            type="text"
            value={dataModal.firstName}
            onChange={(e) => dataModal.setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            id="lastName"
            type="text"
            value={dataModal.lastName}
            onChange={(e) => dataModal.setLastName(e.target.value)}
          />
        </label>
        <div className="btn-zone">
          <button onClick={dataModal.handleCloseModal} className="cancel">
            Cancel
          </button>
          <button className="save" onClick={dataModal.handleEditName}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
