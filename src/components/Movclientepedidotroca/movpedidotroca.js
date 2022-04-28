import { Class } from "@material-ui/icons";
import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import { Cell, Row, StickyTable } from "react-sticky-table";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import "../Movclientepedidotroca/movpedidotroca.css";
import moment from 'moment';
import { TextField } from "@mui/material";
import { ptBR } from 'date-fns/locale'
const Pedidotroca = (props) => {




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







    return (
        <>
            <MenuSuperior />
            <body>
                <section className="Titulo">
                    <h2>Movimentações Clientes</h2>
                    <hr></hr>
                </section>

                <section className="Selecao">
                    <div className="Campo-checkbox">
                        <div className="Pedido">
                            <Input type="checkbox"></Input>
                            <Label>Pedido</Label>
                        </div>

                        <div className="Troca">
                            <Input type="checkbox"></Input>
                            <Label>Troca</Label>
                        </div>
                    </div>
                </section>


                <section className="Campo-data">
                    <div className="campo-cpf">
                        <TextField
                            withPortal
                            type='Text'
                            variant="standard"
                            label='CPF Cliente:'

                        />
                    </div>
                    <div className="campo-codfab">
                        <TextField
                            withPortal
                            type='Text'
                            variant="standard"
                            label='Código Fabricante:'
                        />
                    </div>
                    <div className='campo-codpro'>
                        <TextField
                            withPortal
                            type='Text'
                            variant="standard"
                            label='Código Produto:'
                        />
                    </div>
                    <div className="campo-botao">
                        <Button color="primary" id='botao-select'>Filtrar  <i class="material-icons left">filter_alt</i></Button>
                    </div>
                </section>

                <section>
                    <StickyTable className="campo-tabela">
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Loja</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Documento</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Codigo Fabricante</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Codigo Base</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Codigo Produto</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Qtde</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>PrcBasico</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Data</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Hora</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Codigo Vend</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>Nome Cliente</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff', fontFamily: 'Roboto, sans-serif' }}>CPF</Cell>

                        <Row>
                            <Cell></Cell>
                        </Row>

                    </StickyTable>
                </section>


            </body>
        </>
    );
}
export default Pedidotroca;