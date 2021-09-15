import { Select, TextField, InputLabel } from "@material-ui/core";
import React from "react";
import { Button, Container, Input, Label } from "reactstrap";
import '../Estoqueloja/estoque.css';

const EstoqueLoja = (props) => {
    return (
        <div>
            <Container lassName="Container">
                <h2 id='titulo'>Estoque Loja</h2>
                <hr id='linha'></hr>

               

                <div className='Campo'>
                   
                    <Select label='Revista'></Select>
                    <TextField Label="Fornecedor" />
                    <TextField Label="Página" />
                    <TextField Label="Referência" />
                    <TextField Label="Item" />
                </div>

                <TextField Label="Estoque menor igual à: " />

                <Button color='btn btn-primary' className="Botao">Filtrar</Button>

                <TextField Label="Total Estoque" />
                <TextField Label="Valor Total Estoque" />
            </Container>
        </div>
    );
}
export default EstoqueLoja;