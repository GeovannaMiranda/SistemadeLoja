import React, { useState } from "react";
import { Button, Input, Label,Container } from "reactstrap";
import { TextField } from '@material-ui/core';

import "../Movimentacoes_Lojas/movimentacao.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";



const Movimentacoes = (props) => {
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


    const [selectDateFim, setSelectDateFim] = useState(null);

    const onChange1 = selectDateFim => {
        setSelectDateFim(selectDateFim);
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")
    const datafinal = moment(selectDateFim).format("YYYYMMDD")

    return (
        <div>
            <MenuSuperior/>
            <Container>
                <h2 id='titulo'>Movimentação Loja</h2>
                <hr id="linha"></hr>
                <h6>Tipo de Movimentação</h6>
                <div className="caixa">
                    <Input type="checkbox" ></Input>                  
                    <Label style={{margin: "0 0 0 -14%", fontFamily: "Roboto, sans-serif"}}>Entradas</Label>
                    <Input type="checkbox" ></Input>
                    <Label style={{margin: "0 0 0 -14%", fontFamily: "Roboto, sans-serif"}}>Pedidos</Label>
                    <Input type="checkbox" >Trocas</Input>
                    <Label style={{margin: "0 0 0 -14%", fontFamily: "Roboto, sans-serif"}}>Trocas</Label>
                    <Input type="checkbox" ></Input>
                    <Label style={{margin: "0 0 0 -14%", fontFamily: "Roboto, sans-serif"}}>Devoluções</Label>
                    <Input type="checkbox" ></Input>
                    <Label style={{margin: "0 0 0 -14%", fontFamily: "Roboto, sans-serif"}}>Cancelamento</Label>
                </div>
                <h6 id='titulo2'>Data de Movimentação</h6>
                <div className='datamets'>
                    <DatePicker
                        id='dataped'
                        placeholderText='De:'
                        onChange={onChange}
                        selected={selectDateIni}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='reset'
                    />
                    <DatePicker
                        placeholderText='Até:'
                        id="dataped1"
                        onChange={onChange1}
                        selected={selectDateFim}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal

                    />
                </div>
                <div className='CampoMovimentacao'>
                    <TextField label="Fornecedores" />
                    <TextField label="Vendedoras"/>                    
                
                    <TextField label="Nome Cliente"/>
                    <TextField label="CPF/CNPJ"/>
                </div>
                <Button color='btn btn-primary' className="botaomov">Filtrar</Button>
            </Container>
        </div>
    );
}
export default Movimentacoes;