import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Container, Input, Label } from "reactstrap";
import {Cell, Row, StickyTable} from  "react-sticky-table";

import "../Lancamento_Caixa/lancamento.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";


const for_cod = localStorage.getItem('for_cod')

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


    const onChange = selectDateIni => {
        setSelectDateIni(selectDateIni);
    }


    const datainicial = moment(selectDateIni).format("YYYYMMDD")
    return (
        <div>
            <MenuSuperior/>
            <Container>
                <h2 id='titulo'>Think - Lançamento de Caixa</h2>
                <hr id='linha'></hr>

                <div className="Campolan">
                    <DatePicker
                        id='datalancamento'
                        placeholderText='Data Caixa:'
                        onChange={onChange}
                        selected={selectDateIni}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='reset'
                    />
                    <Button className="botaolancamento" color="btn btn-primary">Filtrar</Button>
                </div>
                
                  
                <StickyTable className='Tabelalancamento'>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> </Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> CPF/CNPJ</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff'}}> Cliente Documento</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> Total</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff'}}> Lançar</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> Lançado</Cell>
                   


                    <Row className="cabecalho2">
                        
                    </Row>

                </StickyTable>

                <div className="CampLan">
                    <TextField label="Data Caixa:" ></TextField>
                    <TextField label="Valor Total Caixa: " ></TextField>
                    <TextField label="Valor Total Digitado:" ></TextField>

                    <Label for="exampleText" color="#696969">Observação:</Label>
                    <Input type="textarea" name="text" id="exampleText" />

                    <Button id='botaolan'  color='btn btn-primary' >Salvar</Button>
                    <Button id='botaolan1' color='btn btn-primary' >Fechar Caixa</Button>
                    <Button id='botaolan2' color='btn btn-primary' >Relatório</Button>
                </div>
            </Container>
        </div>
    );
}
export default Lancamento;