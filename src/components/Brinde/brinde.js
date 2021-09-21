import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { Button, Container} from "reactstrap";

import MenuSuperior from "../menuSuperior/MenuSuperior";

const Brinde = (props) => {
    return (
        <div>
            <MenuSuperior />
            <Container>
                <h2>Sistema Controle de Brinde</h2>
                <hr></hr>

                <TextField > CPF/CNPJ</TextField>
                <Select>Escolha o Brinde</Select>
                    <MenuItem></MenuItem>

                <Button>Registrar</Button>
                <p>logo think</p>

            </Container>
        </div>
    );
}

export default Brinde;