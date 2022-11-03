import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton";

const Modal = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="myModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModal">
                  {props.modalTitle}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"> {props.modalContent}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <ConfirmButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
