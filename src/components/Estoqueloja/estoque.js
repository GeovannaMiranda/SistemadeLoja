import { Select, TextField, InputLabel, MenuItem } from "@material-ui/core";
import React from "react";
import { Button, Container } from "reactstrap";
import {StickyTable, Cell, Row} from "react-sticky-table";
import '../Estoqueloja/estoque.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";

const EstoqueLoja = (props) => {
    return (
        <div>
            <MenuSuperior />
            <Container >
                <h2 id='titulo'>Estoque Loja</h2>
                <hr id='linha'></hr>

                <div className='Campo'>
                    <div>
                        <InputLabel className='labelrestoqueloja'>Revista</InputLabel>
                        <Select className='selectestoqueloja'>
                            <MenuItem value="disable">Selecione Opção</MenuItem>
                            <MenuItem></MenuItem>
                        </Select>
                    </div>
                    <TextField
                        id="Campo"
                        label="Fornecedor "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                     <TextField
                        id="Campo"
                        label="Página "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                     <TextField
                        id="Campo"
                        label="Referência "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField                        
                        id="Campo"                        
                        label="Item "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className="Campo1" >
                    <TextField
                        id="Campo"
                        label="Estoque menor igual à: "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button color='btn btn-primary' className='Botaoestoqueloja'>Filtrar</Button>
                </div>
                
                <StickyTable className="Tableestoqueloja">
                        <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Fornecedor</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Estq.Loja</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Valor Estoque</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Qtde. Vendas Quinzena</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Total Quinzena</Cell>


                        <Row className="cabecalho2">
                            <Cell style={{ background: '#DCDCDC' }}></Cell>
                        </Row>

                        
                        <Row className="cabecalho2">
                            <Cell></Cell>
                        </Row>
                    </StickyTable>

                <div className="Campo2">
                    <TextField label="Total Estoque" />
                    <TextField label="Valor Total Estoque" />
                </div>
            </Container>
        </div>
    );
}
export default EstoqueLoja;