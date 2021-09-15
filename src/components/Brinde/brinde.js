import { TextField } from "@material-ui/core";
import React from "react";
import { Button, Label } from "reactstrap";

const Brinde = (props) => {
    return(
        <div>
            <h2>Sistema Controle de Brinde</h2>
            <hr></hr>


            <TextField > CPF/CNPJ</TextField>
            <Label>Escolha o Brinde</Label>
            <input>
               <option></option>
            </input>

            <Button>Registrar</Button>
            <p>logo think</p>

        

        </div>
    );
}

export default Brinde;