import Navbar from "../Navs/Navbar";
const FormComPlano = () => {
  return (
    <>
      <Navbar />
      <div className="container text-dark">
        <div className="jumbotron bg-light">
          <div className="container p-5">
            <div className="myBorder p-5">
              <div class="alert alert-info">
                <h3 className="text-center">Cadastrar novo paciente</h3>
              </div>
              <div className="row">
                <div className="col-sm">
                  <div className="col-sm-3">
                    <div className="form-group pb-3">
                      <label>
                        <h5>Nome *</h5>
                      </label>
                      <input type="text" name="nome" className="form-control" />
                    </div>
                    <div className="form-group pb-3">
                      <label>
                        <h5>CPF *</h5>
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome do produto"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComPlano;
