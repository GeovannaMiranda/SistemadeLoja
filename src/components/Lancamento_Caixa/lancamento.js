import { Card, FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Container, Input, Label, Modal, ModalBody } from "reactstrap";
import { Cell, Row, StickyTable } from "react-sticky-table";
import $ from "jquery";
import "../Lancamento_Caixa/lancamento.css";


import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from "../../Api";

const Lancamento = (props) => {

    // Modal open state
    const [modal, setModal] = React.useState(false);

    const [value, setValue] = React.useState(false);

    // Toggle for Modal0
    //const toggle = (value) => setModal(!modal);

    function toggle(value) {
        setModal(!modal);

        setValue(`${value}`);


    }


    // Modal open state
    const [modal1, setModal1] = React.useState(false);

    const [value1, setValue1] = React.useState(false);

    // Toggle for Modal0
    //const toggle = (value) => setModal(!modal);

    function toggle1(value1) {
        setModal1(!modal1);

        setValue1(`${value1}`);


    }



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

    $('#opt').change(function () {
        var valor = $('#opt').val();
        $('#pai').children('div').hide();
        $('#pai').children(valor).show();
    });

    $('#opt1').change(function () {
        var valor = $('#opt').val();
        $('#pai1').children('div1').hide();
        $('#pai1').children(valor).show();
    });



    /*   function handleClick(value){
           
           console.log(`${value}`)
       }*/


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


                    <Button className="botaolancamento" color="btn btn-primary">Filtrar</Button>
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
                                <Cell onClick={toggle.bind(this, tabelalancamentocaixa.docto_cli)} ><i class="large material-icons text-primary">attach_money</i></Cell>
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



                    <Modal
                        className="Modal1"
                        isOpen={modal}
                        toggle={toggle}
                    >
                        <ModalBody >
                            <Card className='Cardlancamento2 cartao' color='primary'>

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
                                    <Button color='primary' onClick={toggle1}>Inserir Pagamento<i class="material-icons right">send</i></Button>
                                </div>

                            </Card>
                            {value}
                        </ModalBody>
                    </Modal>


                </div>

                <div>
                    <div style={{
                        display: 'block', width: 700, padding: 30
                    }}>

                        <Modal isOpen={modal1}
                            toggle={toggle1}
                        >
                            <ModalBody >
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
                                       
                                                <Input name='opt' id='opt' className='Camposelect1' type="select">

                                                    <option selected disabled value="">SELECIONE OPÇÃO</option>
                                                    <option value='#opcao1'>DINHEIRO</option>
                                                    <option value='#opcao2'>CARTÃO CRÉDITO</option>
                                                    <option value='#opcao3'>CARTÃO DÉBITO</option>
                                                    <option value='#opcao4'>CHEQUE</option>
                                                    <option value='#opcao5'>DEPÓSITO</option>
                                                    <option value='#opcao6'>VENDA CASADA</option>
                                                    <option value='#opcao7'>VALE CLIENTE</option>
                                                    <option value='#opcao8'>VALE CHEQUE</option>
                                                    <option value='#opcao9'>VALE FORNECEDOR</option>
                                                    <option value='#opcao10'>VALE FUNCIONÁRIO</option>
                                                    <option value='#opcao11'>DIFERENÇA DE TROCA (Perda)</option>
                                                    <option value='#opcao12'>COBRANÇA INDEVIDA (Crédito)</option>
                                                    <option value='#opcao13'>CRÉDITO CLIENTE</option>
                                                    <option value='#opcao14'>AJUSTE PEDIDO/TROCA</option>
                                                    <option value='#opcao15'>CRÉDITO DEFEITO</option>
                                                    <option value='#opcao16'>DIFERENÇA DE PEDIDO (Perda)</option>
                                                    <option value='#opcao17'>BRINDE</option>
                                                    <option value='#opcao18'>FRETE</option>

                                                </Input>
                                   

                                            {/* CAMPO DINHEIRO */}
                                            <div id="pai" >
                                                <div id='opcao1' className="hide">
                                                    <div >
                                                        <TextField label="Valor"></TextField>
                                                        <Input type='checkbox' > </Input>
                                                        <Label>Aplicar Desconto</Label>
                                                    </div>
                                                </div>


                                                {/* CAMPO CARTAO CREDITO */}
                                                <div id='opcao2' className="hide">
                                                    <div>
                                                        <TextField label='VALOR:'></TextField>
                                                        <TextField label='NSU CARTÃO (CV):'></TextField>
                                                        <TextField label='N° EST. CARTÃO: '></TextField>
                                                        <TextField label='CPF/CNPJ CLIENTE:'></TextField>
                                                    </div>

                                                    <div>
                                                        <TextField
                                                            id='datalancamento'
                                                            onChange={onChange}
                                                            locale={ptBR}
                                                            dateFormat="P"
                                                            withPortal
                                                            type='date'
                                                        />
                                                        <TextField
                                                            label='HORA CARTÃO:'
                                                            id='datalancamento'
                                                            type='time'
                                                        />

                                                        <Select label='LOJA PARCEIRA:'>
                                                            <MenuItem selected disabled value="">Loja:</MenuItem>
                                                            <MenuItem>B4</MenuItem>
                                                            <MenuItem>B5</MenuItem>
                                                            <MenuItem>B8</MenuItem>
                                                            <MenuItem>CP</MenuItem>
                                                            <MenuItem>OPALA(M1)</MenuItem>
                                                            <MenuItem>PEDRA LUA(PC)</MenuItem>
                                                            <MenuItem>R1</MenuItem>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <Select>
                                                            <MenuItem>0 - SEM BANDEIRA</MenuItem>
                                                            <MenuItem>1 - VISA</MenuItem>
                                                            <MenuItem>2 - MASTERCARD</MenuItem>
                                                            <MenuItem>3 - ELO</MenuItem>
                                                            <MenuItem>4 - AMERICAN EXPRESS</MenuItem>
                                                            <MenuItem>5 - HIPERCARD</MenuItem>
                                                            <MenuItem>6 - PAG SEGURO</MenuItem>
                                                            <MenuItem>7 - CRED SYSTEM</MenuItem>
                                                            <MenuItem>8 - BANESCARD</MenuItem>
                                                            <MenuItem>9 - DINERS CLUB</MenuItem>
                                                            <MenuItem>10 - CABAL</MenuItem>
                                                            <MenuItem>11 - SOROCRED</MenuItem>
                                                            <MenuItem>12 - JCB</MenuItem>
                                                        </Select>

                                                        <TextField label='PARC:'></TextField>

                                                        <Input
                                                            type="checkbox"
                                                        />
                                                        <Label>Aplicar Acrésc.</Label>
                                                    </div>
                                                </div>

                                                {/* Cartao DEBITO */}
                                                <div id="opcao3" className="hide">
                                                    <div>
                                                        <TextField label='VALOR:'></TextField>
                                                        <TextField label='NSU CARTÃO (CV):'></TextField>
                                                        <TextField label='N° EST. CARTÃO: '></TextField>
                                                        <TextField label='CPF/CNPJ CLIENTE:'></TextField>
                                                    </div>

                                                    <div>
                                                        <TextField
                                                            id='datalancamento'
                                                            onChange={onChange}
                                                            locale={ptBR}
                                                            dateFormat="P"
                                                            withPortal
                                                            type='date'
                                                        />
                                                        <TextField
                                                            label='HORA CARTÃO:'
                                                            id='datalancamento'
                                                            type='time'
                                                        />

                                                        <Select label='LOJA PARCEIRA:'>
                                                            <MenuItem selected disabled value="">Loja:</MenuItem>
                                                            <MenuItem>B4</MenuItem>
                                                            <MenuItem>B5</MenuItem>
                                                            <MenuItem>B8</MenuItem>
                                                            <MenuItem>CP</MenuItem>
                                                            <MenuItem>OPALA(M1)</MenuItem>
                                                            <MenuItem>PEDRA LUA(PC)</MenuItem>
                                                            <MenuItem>R1</MenuItem>
                                                        </Select>
                                                    </div>

                                                    <div>
                                                        <Select>
                                                            <MenuItem>0 - SEM BANDEIRA</MenuItem>
                                                            <MenuItem>1 - VISA</MenuItem>
                                                            <MenuItem>2 - MASTERCARD</MenuItem>
                                                            <MenuItem>3 - ELO</MenuItem>
                                                            <MenuItem>4 - AMERICAN EXPRESS</MenuItem>
                                                            <MenuItem>5 - HIPERCARD</MenuItem>
                                                            <MenuItem>6 - PAG SEGURO</MenuItem>
                                                            <MenuItem>7 - CRED SYSTEM</MenuItem>
                                                            <MenuItem>8 - BANESCARD</MenuItem>
                                                            <MenuItem>9 - DINERS CLUB</MenuItem>
                                                            <MenuItem>10 - CABAL</MenuItem>
                                                            <MenuItem>11 - SOROCRED</MenuItem>
                                                            <MenuItem>12 - JCB</MenuItem>
                                                        </Select>

                                                    </div>
                                                </div>

                                                {/*CHEQUE */}
                                                <div id='opcao4'>
                                                    <div>
                                                        <TextField label='VALOR:'></TextField>
                                                        <TextField label='QTD CHEQUES:'></TextField>
                                                        <Input type="checkbox"> </Input>
                                                        <Label>Aplicar Desconto</Label>
                                                        <Input type="checkbox"></Input>
                                                        <Label>Aplicar Acrésc.</Label>
                                                    </div>
                                                </div>

                                                {/*DEPOSITO */}
                                                <div id='opcao5'>
                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='BANCO:'></TextField>

                                                    <Input type="checkbox"> </Input>
                                                    <Label>Aplicar Desconto</Label>
                                                </div>

                                                {/*VENDA CASADA */}
                                                <div id='opcao6'>
                                                    <Select label='TIPO:'>
                                                        <MenuItem selected disabled value="">SELECIONE OPÇÃO</MenuItem>
                                                        <MenuItem>CRÉDITO</MenuItem>
                                                        <MenuItem>DÉBITO</MenuItem>
                                                    </Select>

                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='N° DOCUMENTO:'></TextField>

                                                    <Select label='LOJA PARCEIRA:'>
                                                        <MenuItem>B4</MenuItem>
                                                        <MenuItem>B5</MenuItem>
                                                        <MenuItem>B8</MenuItem>
                                                        <MenuItem>CP</MenuItem>
                                                        <MenuItem>OPALA(M1)</MenuItem>
                                                        <MenuItem>PEDRA LUA(PC)</MenuItem>
                                                        <MenuItem>R1</MenuItem>
                                                    </Select>
                                                </div>

                                                {/*VALE CLIENTE */}
                                                <div id='opcao7'>
                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='N° DOCUMENTO:'></TextField>


                                                    <Input type="checkbox"></Input>
                                                    <Label>Aplicar Acrésc.</Label>
                                                </div>

                                                {/*VALE CHEQUE */}
                                                <div id='opcao8'>
                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='N° DOCUMENTO:'></TextField>


                                                    <Input type="checkbox"> </Input>
                                                    <Label>Aplicar Desconto</Label>

                                                    <Input type="checkbox"></Input>
                                                    <Label>Aplicar Acrésc.</Label>
                                                </div>

                                                {/*VALE FORNECEDOR */}
                                                <div id='opcao9'>
                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='N° AUTORIZAÇÃO:'></TextField>

                                                    <TextField label='COD. FORNECEDOR:'></TextField>
                                                </div>

                                                {/*VALE FUNCIONARIO */}
                                                <div id='opcao10'>
                                                    <TextField label='VALOR:'></TextField>
                                                </div>

                                                {/*DIFERENÇA TROCA */}
                                                <div id='opcao11'>

                                                </div>

                                                {/*COBRANÇA INDEVIDA */}
                                                <div id='opcao12'>

                                                </div>

                                                {/*CREDITO CLIENTE */}
                                                <div id='opcao13'>
                                                    <TextField label='VALOR:'></TextField>
                                                </div>

                                                {/*AJUSTE PEDIDO/TROCA */}
                                                <div id='opcao14'>
                                                    <Select label='TIPO:'>
                                                        <MenuItem selected disabled value="">SELECIONE OPÇÃO</MenuItem>
                                                        <MenuItem>CRÉDITO</MenuItem>
                                                        <MenuItem>DÉBITO</MenuItem>
                                                    </Select>

                                                    <TextField label='VALOR:'></TextField>
                                                </div>

                                                {/*CREDITO DEFEITO */}
                                                <div id='opcao15'>
                                                    <TextField label='VALOR:'></TextField>
                                                    <TextField label='N° DOCUMENTO:'></TextField>

                                                    <Select label='COD. FORNECEDOR:'>
                                                        <MenuItem></MenuItem>
                                                    </Select>

                                                </div>

                                                {/*DIFERENÇA DE PEDIDO (PERDA) */}
                                                <div id='opcao16'>

                                                </div>

                                                {/*BRINDE */}
                                                <div id='opcao17'>

                                                </div>

                                                {/*FRETE */}
                                                <div id='opcao18'>

                                                </div>
                                            </div>
                                        </div>

                                        <div className='Botoes2'>
                                            <Button color='danger '>Sair<i class="large material-icons text-white">clear</i></Button>
                                            <Button color='primary' >Salvar<i class="material-icons right">save</i></Button>
                                        </div>


                                    </Card>

                                </Card>
                            </ModalBody>
                        </Modal>
                    </div >

                </div>

                <div>

                </div>

            </Container>
        </div>
    );
}
export default Lancamento;