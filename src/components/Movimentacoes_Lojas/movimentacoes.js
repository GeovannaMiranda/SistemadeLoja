import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import { TextField } from '@material-ui/core';
import { Container } from "reactstrap";

import "../Movimentacoes_Lojas/movimentacao.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'

const for_cod = localStorage.getItem('for_cod')

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
            <Container className="Container">
                <h2 id='titulo'>Movimentação Loja</h2>
                <hr id="linha"></hr>
                <h6>Tipo de Movimentação</h6>
                <div className="caixa">
                    <Input type="checkbox" >Entradas</Input>
                    <Input type="checkbox" >Pedidos</Input>
                    <Input type="checkbox" >Trocas</Input>
                    <Input type="checkbox" >Devoluções</Input>
                    <Input type="checkbox" >Cancelamento</Input>
                </div>
                <h6 id='titulo2'>Data de Movimentação</h6>
                <div className='data'>
                    <DatePicker
                        id='data'
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
                        id="data1"
                        onChange={onChange1}
                        selected={selectDateFim}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal

                    />
                </div>
                <div className='Campo'>
                    <TextField label="Fornecedores" />
                    <TextField Label="Vendedores"/>
                    <TextField Label="Nome Cliente" />
                    <TextField Label="CPF/CNPJ"/>
                </div>
                <Button color='btn btn-primary' className="botao">Filtrar</Button>
            </Container>
        </div>
    );
}
export default Movimentacoes;