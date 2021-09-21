import { TextField } from "@material-ui/core";
import { Button, Container } from "reactstrap";

import React from "react";
import '../Estoques/estoqueFornecedor.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";



const EstoqueFornecedor = (props) => {
    return (
        <div>
            <MenuSuperior/>
            <Container className="ContainerEst">
                <div>
                    <h2 id='titulo'>Estoque Fornecedor</h2>
                    <hr id='linha'></hr>
                </div>

                <div className='Campo3'>
                    <TextField label="Fornecedor"/>
                    <Button id='botao' color='btn btn-primary'>Filtrar</Button>
                </div>

                <div>
                   
                </div>

                <div className='Campo4'>
                    <TextField label="Total Estoque">Total Estoque</TextField>
                    <TextField label="Valor Total Estoque">Valor Total Estoque</TextField>
                </div>
            </Container>
        </div>
    );
}

export default EstoqueFornecedor;