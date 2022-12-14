import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetySharpIcon from "@mui/icons-material/HealthAndSafetySharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Switch from "@mui/material/Switch";
import React, { useState, useEffect } from "react";
import AuthServices from "../../services/auth";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import SaveService from "../../services/crudService";
import initialState from "../../../mock/initialState";

const FormComPlano = () => {
  let [formData, setFormData] = useState({});

  const [displayPlano, setdisplayPlano] = useState("none");
  const [isChecked, setIsChecked] = useState(false);

  const authServices = AuthServices();

  const [token, setToken] = useState();

  const service = SaveService();

  useEffect(() => {
    setToken(authServices.verifyToken());
  });

  const verifyChecked = (e) => {
    setIsChecked(e.target.checked);

    isChecked ? setdisplayPlano("none") : setdisplayPlano("flex");
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const saveData = () => {
    service.save(formData);
    toast.success("Cadastrado com sucesso!");
    clearFields();
  };

  const clearFields = () => {
    setFormData(initialState);
  };

  return (
    <>
      <div className="container-fluid myGradientBg text-light fullHeightContainer">
        <div className="pt-2 ">
          <div className="row ">
            <div className="col-sm-4 text-center myRMoveAnimation myMargin">
              <PersonAddIcon sx={{ fontSize: "100px" }} />
              <h1>Cadastro de paciente</h1>
              <p>
                Preencha os campos para a <br /> conclusão do cadastro. <br />{" "}
                Campos marcados com * <br />
                <b> São obrigatórios.</b>
              </p>
            </div>
            <div className="col-md-7 mt-5 bg-light myFontColor myLeftBorder myFadeAnimation">
              <div className="container p-5">
                <div className="card-title mt-2 mb-4">
                  <h5>
                    Dados Pessoais <AccountCircleIcon />:
                  </h5>
                </div>
                <div className="card-body">
                  <div id="form" className="row">
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label htmlFor="nome">Nome completo: *</label>
                        <input
                          id="nome"
                          type="text"
                          onChange={(e) => handleInput(e)}
                          name="nome"
                          value={formData.nome}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label htmlFor="data-nascimento">
                          Data de nascimento: *
                        </label>
                        <input
                          id="data-nascimento"
                          type="date"
                          onChange={handleInput}
                          name="nascimento"
                          value={formData.dataNascimento}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group">
                        <label htmlFor="cpf">CPF: *</label>
                        <input
                          id="cpf"
                          type="text"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleInput}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label htmlFor="rg">RG: *</label>
                        <input
                          id="rg"
                          name="rg"
                          value={formData.rg}
                          onChange={handleInput}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3 pb-3">
                      <div className="form-group">
                        <label htmlFor="estado-civil">Estado Civil: *</label>
                        <input
                          id="estado-civil"
                          type="text"
                          name="estadoCivil"
                          value={formData.estadoCivil}
                          onChange={handleInput}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <label>Possui plano? *</label>
                      <div className="switch">
                        <label htmlFor="switch">Não</label>
                        <Switch
                          inputProps={{ "aria-label": "controlled" }}
                          onChange={verifyChecked}
                          checked={isChecked}
                          value={isChecked === true ? "Sim" : "Não"}
                          id="switch"
                        />
                        <label htmlFor="switch">Sim</label>
                      </div>
                    </div>
                    <div className="col-sm-3 pt-4"></div>
                  </div>
                  <div className="card-title mt-2 mb-4">
                    <h5>
                      Endereço <LocationOnIcon />:
                    </h5>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>CEP: *</label>
                        <input
                          className="form-control"
                          name="cep"
                          value={formData.cep}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Rua: *</label>
                        <input
                          className="form-control"
                          name="rua"
                          value={formData.rua}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-1">
                      <div className="form-group pb-3">
                        <label>Numero°</label>
                        <input
                          className="form-control"
                          name="numero"
                          value={formData.numero}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group pb-3">
                        <label>Bairro:</label>
                        <input
                          className="form-control"
                          name="bairro"
                          value={formData.bairro}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Complemento:</label>
                        <input
                          className="form-control"
                          name="complemento"
                          onChange={handleInput}
                          value={formData.complemento}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ display: displayPlano }}>
                    <div className="card-title mt-2 mb-2">
                      <h5>
                        Plano <HealthAndSafetySharpIcon />:
                      </h5>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>OP do plano: *</label>
                        <input
                          onChange={handleInput}
                          className="form-control"
                          name="operadorPlano"
                          value={formData.operadorPlano}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Número da carteira: *</label>
                        <input
                          className="form-control"
                          name="numeroCarteira"
                          value={formData.numeroCarteira}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Data de ingresso no plano: *</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dataDoIngresso"
                          value={formData.dataDoIngresso}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Plano de saúde:</label>
                        <input
                          className="form-control"
                          name="planoDeSaude"
                          value={formData.planoDeSaude}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="form-group pb-3">
                        <label>Carência:</label>
                        <input
                          className="form-control"
                          name="carencia"
                          value={formData.carencia}
                          onChange={handleInput}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <Button
                      onClick={saveData}
                      variant="contained"
                      className="m-1"
                      endIcon={<SaveIcon />}
                    >
                      Cadastrar
                    </Button>
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
