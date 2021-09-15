import { TextField } from "@material-ui/core";
import { Button, Container } from "reactstrap";

import React from "react";
import '../Estoques/estoqueFornecedor.css';



const EstoqueFornecedor = (props) => {
    return (
        <div>
            <Container >
                <div>
                    <h2 id='titulo'>Estoque Fornecedor</h2>
                    <hr id='linha'></hr>
                </div>

                <div className='Campo3'>
                    <TextField label="Fornecedor"/>
                    <Button className='botao' color='btn btn-primary'>Filtrar</Button>
                </div>

                <div>
                   
                </div>

                <div className='Camp'>
                    <TextField label="Total Estoque">Total Estoque</TextField>
                    <TextField label="Valor Total Estoque">Valor Total Estoque</TextField>
                </div>
            </Container>
        </div>
    );
}

export default EstoqueFornecedor;