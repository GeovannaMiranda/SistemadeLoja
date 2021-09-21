import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Container, Input, Label } from "reactstrap";

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

                <div className="data">
                    <DatePicker
                        id='data'
                        placeholderText='Data Caixa:'
                        onChange={onChange}
                        selected={selectDateIni}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='reset'
                    />
                    <Button className="buton" color="btn btn-primary">Filtrar</Button>
                </div>
                

                <p>tabela</p>
                <div className="CampLan">
                    <TextField label="Data Caixa:" ></TextField>
                    <TextField label="Valor Total Caixa: " ></TextField>
                    <TextField label="Valor Total Digitado:" ></TextField>

                    <Label for="exampleText" color="#696969">Observação:</Label>
                    <Input type="textarea" name="text" id="exampleText" />

                    <Button id='blan' color='btn btn-primary' >Salvar</Button>
                    <Button id='blan' color='btn btn-primary' >Fechar Caixa</Button>
                    <Button id='blan' color='btn btn-primary' >Relatório</Button>
                </div>
            </Container>
        </div>
    );
}
export default Lancamento;