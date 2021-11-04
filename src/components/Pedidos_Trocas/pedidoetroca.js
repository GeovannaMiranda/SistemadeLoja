import { TextField } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import { Button, Container } from "reactstrap";
import { Cell, Row, StickyTable } from "react-sticky-table";
import api from "../../Api";
import axios from "axios";

import '../Pedidos_Trocas/pedidoetroca.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";

import moment from 'moment';
import { ptBR } from 'date-fns/locale'



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
    const [isActive, setIsActive] = useState(false)
    function onChange(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateIni(value); 
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")



    const [tabelapedido, setTabelapedido] = useState([]);

    useEffect(() => {
        api.get(`http://192.168.0.62:3350/pedidotrocatable/${hoje().bd}`).then(response => {
            setTabelapedido(response.data)
        })
    }, [tabelapedido]);


    const [campos, setCampos] = useState([]);

    useEffect(() => {
        api.get(`http://192.168.0.62:3350/pedidotrocacaixatotais/${hoje().bd}`).then(response => {
            setCampos(response.data)
        })
    }, [campos]);


    const [tabelavend, setTabelavend] = useState([]);

    useEffect(() => {
        api.get(`http://192.168.0.62:3350/pedidotrocacaixavendedoras/${hoje().bd}`).then(response => {
            setTabelavend(response.data)
        })
    }, [tabelavend]);


    const filtrar = useCallback(() => {
        axios.post('http://192.168.0.62:3350/pedidotrocacaixavendedoras/' + datainicial);

    }, [datainicial]);

    return (
        <div>
            <MenuSuperior />
            <Container >
                <h2 id='titulo'>Think - Pedido/Troca</h2>
                <hr id="linha"></hr>
                <div className="dataped">
                    <TextField
                        id='datapedido'                  
                        onChange={onChange}                     
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                    />
                    <Button className="botaopedido" color="btn btn-primary" onClick={filtrar}>Filtrar</Button>
                </div>

                <div >
                    <StickyTable className='Tabelapedido'>

                        <Cell style={{ background: '#007bff', color: '#fff' }}> </Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> CPF/CNPJ</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Cliente Documento</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Pedidos</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Trocas</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}> Total</Cell>

                        {tabelapedido.map((tabelapedido, idx) => (

                            <Row className="cabecalho2" key={idx} tabelapedido={tabelapedido}>
                                <Cell></Cell>
                                <Cell>{tabelapedido.docto_cli}</Cell>
                                <Cell>{tabelapedido.nome_cli}</Cell>
                                <Cell>{tabelapedido.valor_total_pedidos}</Cell>
                                <Cell>{tabelapedido.valor_total_trocas}</Cell>
                                <Cell>{tabelapedido.valor_total}</Cell>
                            </Row>
                            
                        ))}

                    </StickyTable>
                </div>

                <div className="Ped">

                    {campos.map(campos => (
                        <TextField key={campos.valor_total_pedidos} value ={campos.valor_total_pedidos}label="Valor Pedidos: "></TextField>        
                                            
              
                    ))}

                    {campos.map(campos => (
                        <TextField key={campos.valor_total_trocas} value={campos.valor_total_trocas} label='Valor Troca: ' ></TextField>    
                                            
              
                    ))}
                    {campos.map(campos => (
                         <TextField key={campos.valor_total} value={campos.valor_total} label='Valor Total: ' ></TextField>
                                            
              
                    ))}
                        
                       


                    <Button className="botaopedido2" color='btn btn-primary' >Metas</Button>

                    <StickyTable className='Tab2'>
                        <Cell style={{ background: '#007bff', color: '#fff' }}></Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}>Vendedor</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}>Pedido</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}>Troca</Cell>
                        <Cell style={{ background: '#007bff', color: '#fff' }}>Total</Cell>
                        {tabelavend.map((tabelavend, idx) => (
                            <Row className='cabecalho2' key={idx} tabelavend={tabelavend}>
                                <Cell></Cell>
                                <Cell>{tabelavend.nomven}</Cell>
                                <Cell>{tabelavend.valor_total_pedidos}</Cell>
                                <Cell>{tabelavend.valor_total_trocas}</Cell>
                                <Cell>{tabelavend.valor_total}</Cell>

                            </Row>
                        ))}

                    </StickyTable>
                </div>


            </Container>
        </div>
    );
}
export default PedidoTroca;