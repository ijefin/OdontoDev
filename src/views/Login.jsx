import LogoDente from "../assets/images/newDentes.png";
import MyLogin from "../components/Login/Login";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 myBox bg-light">
            <img
              src={LogoDente}
              alt="logo"
              className="img-fluid myFadeAnimation"
            />
          </div>
          <div className="col bg-info myBox ">
            <div className=" text-white mb-3">
              <MyLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
