import { TextField } from "@material-ui/core";
import React from "react";
import { Button } from "reactstrap";

const Lancamento = (props) => {
    return(
        <div>
            <h2>Think - Lançamento de Caixa</h2>
            <hr></hr>

            <TextField>Data Caixa</TextField>
            <Button>Filtrar</Button>

            <p>tabela</p>

            <TextField>Data caixa</TextField>
            <TextField>Valor Total Caixa</TextField>
            <TextField>Valor Total Digitado</TextField>
            <TextField>Observação</TextField>

            <Button>Salvar</Button>
            <Button>Fechar Caixa</Button>
            <Button>Relatório</Button>
            
        </div>
    );
}
export default Lancamento;