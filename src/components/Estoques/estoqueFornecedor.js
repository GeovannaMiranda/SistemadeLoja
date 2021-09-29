import { TextField } from "@material-ui/core";
import { Button, Container } from "reactstrap";

import React from "react";
import '../Estoques/estoqueFornecedor.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Row, Cell, StickyTable } from 'react-sticky-table';



const EstoqueFornecedor = (props) => {
    return (
        <div>
            <MenuSuperior />
            <Container className="ContainerEst">
                <div>
                    <h2 id='titulo'>Estoque Fornecedor</h2>
                    <hr id='linha'></hr>
                </div>

                <div className='Campo3'>
                    <TextField label="Fornecedor" />
                    <Button id='botao' color='btn btn-primary'>Filtrar</Button>
                </div>



             
                    <StickyTable className="Table">
                        <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Fornecedor</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Estq.Loja</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Valor Estoque</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Qtde. Vendas Quinzena</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Total Quinzena</Cell>


                        <Row className="cabecalho2">
                            <Cell style={{ background: '#DCDCDC' }}>1</Cell>
                        </Row>

                        
                        <Row className="cabecalho2">
                            <Cell>2</Cell>
                        </Row>
                    </StickyTable>

                    <div className="Campo4">
                        <TextField label="Total Estoque">Total Estoque</TextField>
                        <TextField label="Valor Total Estoque">Valor Total Estoque</TextField>
                    </div>
               
            </Container>
        </div>
    );
}

export default EstoqueFornecedor;