import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = (props) => {
  return (
    <>
      <button
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        className="button btn btn-danger m-1 text-light"
      >
        {props.content} <LogoutIcon sx={{ fontSize: 18 }} />
      </button>
    </>
  );
};

export default LogoutButton;
