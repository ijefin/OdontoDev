import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";

const SaveButton = () => {
  return (
    <>
      <Button variant="contained" className="m-1" endIcon={<SaveIcon />}>
        Cadastrar
      </Button>
    </>
  );
};

export default SaveButton;
