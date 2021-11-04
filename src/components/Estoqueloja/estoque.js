import { Select, TextField, InputLabel, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import {StickyTable, Cell, Row} from "react-sticky-table";
import '../Estoqueloja/estoque.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from "../../Api";

const EstoqueLoja = (props) => {

    var loja = 5; 
    
    const [tabelaestoqueloja, setTabelaestoqueloja] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/estoquelojatable/${loja}`).then(response => {
            setTabelaestoqueloja(response.data)
        })
    },[loja]);

    
    
    
    return (
        <div>
            <MenuSuperior />
            <Container >
                <h2 id='tituloestoqueloja'>Estoque Loja</h2>
                <hr id='linhaestoqueloja'></hr>

                <div className='Campo1' >
                    <div className='revistacampo'>
                        <InputLabel className='labelrestoqueloja'>Revista</InputLabel>
                        <Select className='selectestoqueloja'>
                            <MenuItem value="disable">Selecione Opção</MenuItem>
                            <MenuItem></MenuItem>
                        </Select>
                    </div>
               
                    <TextField
                        label='Fornecedor'
                        id="Campo"                        
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

                <div className='Campo1' >
                    <TextField
                        id="Campo"
                        label="Estoque menor igual à: "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button color='btn btn-primary' className='Botaoestoqueloja' >Filtrar</Button>                   
                   
                </div>
                
                    <StickyTable className="Tableestoqueloja">
                        <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Fornecedor</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Produto</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Ref.</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Tamanho</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Pág</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Estq.Loja</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Qtd.Logística</Cell>

                        {tabelaestoqueloja.map((tabelaestoqueloja, idx) => (
                            <Row className="cabecalho2" key={idx} tabelaestoqueloja={tabelaestoqueloja} >
                                <Cell>{tabelaestoqueloja.codigo}</Cell>
                                <Cell>{tabelaestoqueloja.nome_fornecedor}</Cell>
                                <Cell>{tabelaestoqueloja.item}</Cell>
                                <Cell>{tabelaestoqueloja.tam_nom}</Cell>
                                <Cell>{tabelaestoqueloja.pagina}</Cell>
                                <Cell>{tabelaestoqueloja.qtd_estoque}</Cell>
                                <Cell>{tabelaestoqueloja.qtdlogistica}</Cell>
                         
                            </Row>

                        ))}
                        
                            
                        
                        <Row className="cabecalho2">
                            <Cell></Cell>
                        </Row>
                    </StickyTable>

                <div className="Campo2">
                    <TextField label="Total Estoque">{tabelaestoqueloja.qtd_estoque_loja}</TextField>
                    <TextField label="Valor Total Estoque">{tabelaestoqueloja.preco_venda * tabelaestoqueloja.qtd_estoque_loja}</TextField>
                </div>
            </Container>
        </div>
    );
}
export default EstoqueLoja;