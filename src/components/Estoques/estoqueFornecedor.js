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
            <Container >
                <div>
                    <h2 id='titulofornecedor'>Estoque Fornecedor</h2>
                    <hr id='linhafornecedor'></hr>
                </div>

                <div className='Campoestoquefornecedor'>
                    <TextField label="Fornecedor" />
                    <Button id='botaofornecedor' color='btn btn-primary'>Filtrar</Button>
                </div>

                    <StickyTable className="tabelaestoquefornecedor">
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

                    <div className="Campofornecedor">
                        <TextField label="Total Estoque">Total Estoque</TextField>
                        <TextField label="Valor Total Estoque">Valor Total Estoque</TextField>
                    </div>
               
            </Container>
        </div>
    );
}

export default EstoqueFornecedor;