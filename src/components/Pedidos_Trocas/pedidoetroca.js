import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Container } from "reactstrap";



import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";


const for_cod = localStorage.getItem('for_cod')

const PedidoTroca = (props) => {
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
            <Container >
                <h2 id='titulo'>Think - Pedido/Troca</h2>
                <hr id="linha"></hr>
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
                
               

                <div className="Ped">
                    <TextField label='Valor Pedidos: ' >Valor Pedidos</TextField>
                    <TextField label='Valor Torca: ' >Valor Troca</TextField>
                    <TextField label='Valor Total: ' >Valor Total</TextField>
                    <Button className="meta" color='btn btn-primary'>Metas</Button>
                    <p >tabela</p>
                </div>
            </Container>
        </div>
    );
}
export default PedidoTroca;