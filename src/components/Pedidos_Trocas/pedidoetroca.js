import { TextField } from "@material-ui/core";
import React from "react";
import { Button } from "reactstrap";

const PedidoTroca = (props) => {
    return(
        <div>
            <h2>Think - Pedido/Troca</h2>
            <hr></hr>

            <TextField>Data Caixa</TextField>
            <Button>Filtrar</Button>

            <p>tabela</p>

            <TextField>Valor Pedidos</TextField>
            <TextField>Valor Troca</TextField>
            <TextField>Valor Total</TextField>
            <Button>Metas</Button>
            <p>tabela</p>
        </div>
    );
}
export default PedidoTroca;