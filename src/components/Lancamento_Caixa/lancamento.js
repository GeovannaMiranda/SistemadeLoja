import { Card, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Container, Input, Label } from "reactstrap";
import { Cell, Row, StickyTable } from "react-sticky-table";

import "../Lancamento_Caixa/lancamento.css";


import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from "../../Api";

const Lancamento = (props) => {
    function hoje() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatado = dd + '/' + mm + '/' + yyyy;
        var bd = yyyy + '' + mm + '' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }


   
    const [selectDateIni, setSelectDateIni] = useState(null);   
    const [isActive, setIsActive] = useState(false)
    function onChange(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateIni(value); console.log(value)
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")

    const [tabelalancamentocaixa, setTabelalancamentocaixa] = useState([]);
    useEffect(() => {
        console.log(tabelalancamentocaixa);
        api.get(`http://192.168.0.62:3350/pedidotrocacaixatable/${hoje().bd}`).then(response => {
            setTabelalancamentocaixa(response.data)
        })
    }, []);

    

    return (
        <div className='d1'>
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Think - Lançamento de Caixa</h2>
                <hr id='linha'></hr>

                <div className="Campolan">
                    <TextField
                        id='datalancamento'                  
                        onChange={onChange}                     
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                    />

                
                    <Button className="botaolancamento"  color="btn btn-primary">Filtrar</Button>
                </div>

                <div className='tabelaecampo'>
                    <StickyTable className='Tabelalancamento'>
                        <Cell style={{ background: '#007bff', color: '#fff' }}>#</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> CPF/CNPJ</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }} > Cliente</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Total</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }} > Lançar</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Lançado</Cell>


                        {tabelalancamentocaixa.map((tabelalancamentocaixa, idx) => (
                            <Row className="cabecalho2" key={idx} tabelalancamentocaixa={tabelalancamentocaixa}>
                                <Cell></Cell>
                                <Cell>{tabelalancamentocaixa.docto_cli}</Cell>
                                <Cell>{tabelalancamentocaixa.nome_cli}</Cell>
                                <Cell>{tabelalancamentocaixa.valor_total}</Cell>
                                <Cell ><i class="large material-icons text-primary">attach_money</i></Cell>
                                <Cell><i class="large material-icons text-danger">clear</i></Cell>
                            </Row>
                        ))}


                    </StickyTable>

                    <div className="CampLan">
                        <TextField label="Data Caixa:"></TextField>
                        <TextField label="Valor Total Caixa: " ></TextField>
                        <TextField label="Valor Total Digitado:" ></TextField>

                        <Label for="exampleText" color="#696969">Observação:</Label>
                        <Input type="textarea" name="text" id="exampleText" />

                        <Button id='botaolan' color='btn btn-primary' >Salvar <i class="material-icons right">save</i></Button>
                        <Button id='botaolan1' color='btn btn-primary' >Fechar Caixa <i class="material-icons right">subdirectory_arrow_right</i></Button>
                        <Button id='botaolan2' color='btn btn-primary' >Relatório <i class="material-icons right">print</i></Button>
                    </div>
                </div>

                <div>
                    <Card className='Cardlancamento' color='primary'>
                        <Card className='CardCampos'>
                            <div className='Camposlan'>
                                <TextField label='Valor Total:'></TextField>
                                <TextField label='Valor que Falta:'></TextField>
                            </div>
                        </Card>
                        <Card className='CardCampos1'>
                            <div className='Camposlan1'>
                                <h6>Forma de pagamento</h6>
                                <Select className='Camposelect1'>
                                    <MenuItem></MenuItem>
                                    <MenuItem>DINHEIRO</MenuItem>
                                    <MenuItem>CARTÃO CRÉDITO</MenuItem>
                                    <MenuItem>CARTÃO DÉBITO</MenuItem>
                                    <MenuItem>CHEQUE</MenuItem>
                                    <MenuItem>DEPÓSITO</MenuItem>
                                    <MenuItem>VENDA CASADA</MenuItem>
                                    <MenuItem>VALE CLIENTE</MenuItem>
                                    <MenuItem>VALE CHEQUE</MenuItem>
                                    <MenuItem>VALE FORNECEDOR</MenuItem>
                                    <MenuItem>VALE FUNCIONÁRIO</MenuItem>
                                    <MenuItem>DIFERENÇA DE TROCA (Perda)</MenuItem>
                                    <MenuItem>COBRANÇA INDEVIDA (Crédito)</MenuItem>
                                    <MenuItem>CRÉDITO CLIENTE</MenuItem>
                                    <MenuItem>AJUSTE PEDIDO/TROCA</MenuItem>
                                    <MenuItem>CRÉDITO DEFEITO</MenuItem>
                                    <MenuItem>DIFERENÇA DE PEDIDO (Perda)</MenuItem>
                                    <MenuItem>BRINDE</MenuItem>
                                    <MenuItem>FRETE</MenuItem>
                                </Select>
                            </div>

                            <div className='Botoes2'>
                                <Button color='danger '>Sair<i class="large material-icons text-white">clear</i></Button>
                                <Button color='primary' >Salvar<i class="material-icons right">save</i></Button>
                            </div>
                        </Card>

                    </Card>
                </div>

                <div>
                    <Card className='Cardlancamento2' color='primary'>
                        <Card className='cartao'>
                            <div className='Camposlan2'>
                                <TextField label='Valor Total:'></TextField>
                                <TextField label='Valor que Falta:'></TextField>
                            </div>

                            <StickyTable className='Tabelalancamentocaixa'>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>CPF/CNPJ</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>PAGAMENTO</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>N° DOC/AUT.</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>BANDEIRA</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>PARCELAS</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>VALOR</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>DESCONTO</strong></Cell>
                                <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}><strong>EXCLUIR</strong></Cell>

                                <Row>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell></Cell>
                                    <Cell><i class="large material-icons" >clear</i></Cell>
                                </Row>
                            </StickyTable>
                            <div className='Botoes2'>
                                <Button color='danger'>Sair<i class="large material-icons text-white">clear</i></Button>
                                <Button color='primary'>Inserir Pagamento<i class="material-icons right">send</i></Button>
                            </div>
                        </Card>
                    </Card>
                </div>

            </Container>
        </div>
    );
}
export default Lancamento;