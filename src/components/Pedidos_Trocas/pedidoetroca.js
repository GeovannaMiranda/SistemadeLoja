import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Container } from "reactstrap";
import {Cell, Row, StickyTable} from "react-sticky-table";



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
                
                <StickyTable className='Tab'>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> </Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> CPF/CNPJ</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff'}}> Cliente Documento</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> Pedidos</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff' }}> Trocas</Cell>
                    <Cell style={{ background: '#007bff', color: '#fff'}}> Total</Cell>


                    <Row className="cabecalho2">
                        
                    </Row>

                </StickyTable>
               

                <div className="Ped">
                    <TextField label='Valor Pedidos: ' >Valor Pedidos</TextField>
                    <TextField label='Valor Torca: ' >Valor Troca</TextField>
                    <TextField label='Valor Total: ' >Valor Total</TextField>
                    <Button className="meta" color='btn btn-primary'>Metas</Button>
                    
                    <StickyTable className='Tab2'>
                        <Cell style={{ background: '#007bff', color: '#fff'}}></Cell>
                        <Cell style={{ background: '#007bff', color: '#fff'}}>Vendedor</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff'}}>Pedido</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff'}}>Troca</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff'}}>Total</Cell>

                        <Row className='cabecalho2'>
                            
                        </Row>
                    </StickyTable>
                </div>
            </Container>
        </div>
    );
}
export default PedidoTroca;