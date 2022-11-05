import { useState, useEffect } from "react";
import FormComPlano from "../components/Forms/FormComPlano";

const CadastroPaciente = () => {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState(Date);
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [plano, setPlano] = useState(true);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [endereco, setEndereco] = useState([]);
  const [carteira, setCarteira] = useState(0);
  const [dataIngresso, setDataIngresso] = useState(0);
  const [carencia, setCarencia] = useState(false);

  return (
    <>
      <div>
        <FormComPlano />
      </div>
    </>
  );
};

export default CadastroPaciente;
