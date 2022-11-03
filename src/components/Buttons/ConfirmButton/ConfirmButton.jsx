import AuthServices from "../../../helpers/auth";

const ConfirmButton = () => {
  const authService = AuthServices();

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        onClick={authService.handleLogout}
        data-bs-dismiss="modal"
      >
        Confirmar
      </button>
    </>
  );
};

export default ConfirmButton;
