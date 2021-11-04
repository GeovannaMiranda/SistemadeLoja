import React, { useState } from "react";
import { Button, Input, Label, Container } from "reactstrap";
import { TextField } from '@material-ui/core';
import { Row, Cell, StickyTable } from 'react-sticky-table';

import "../Movimentacoes_Lojas/movimentacao.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";
import api from "../../Api";
import $ from "jquery";


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





    const [tipo, setTipo] = useState(null);

    function onChange2(ev) {
        const {
            nome, value
        } = ev.target;
        setTipo(value)

    }

    const [selectDateIni, setSelectDateIni] = useState(null);   
    const [isActive6, setIsActive6] = useState(false)
    function onChange(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateIni(value); 
        if (ev !== '') {
            setIsActive6(true);
        } else {
            setIsActive6(false);
        }
    }

    const [selectDateFim, setSelectDateFim] = useState(null);    
    const [isActive5, setIsActive5] = useState(false)
    function onChange1(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateFim(value); 
        if (ev !== '') {
            setIsActive5(true);
        } else {
            setIsActive5(false);
        }
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")
    console.log(datainicial);

    const datafinal = moment(selectDateFim).format("YYYYMMDD")


    const [campofornecedor, setCampofornecedor] = useState(null);
    const [isActive1, setIsActive1] = useState(false)
    function onChange6(ev) {
        const {
            name, value
        } = ev.target;
        setCampofornecedor(value);
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
    }

    const [campovendedoras, setCampovendedoras] = useState([]);
    const [isActive2, setIsActive2] = useState(false)
    function onChange3(ev) {
        const {
            name, value
        } = ev.target;
        setCampovendedoras(value);
        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }

    const [camponomcliente, setCamponomcliente] = useState([]);
    const [isActive3, setIsActive3] = useState(false)
    function onChange4(ev) {
        const {
            name, value
        } = ev.target;
        setCamponomcliente(value);
        if (ev !== '') {
            setIsActive3(true);
        } else {
            setIsActive3(false);
        }
    }

    const [campocpf, setCampocpf] = useState([]);
    const [isActive4, setIsActive4] = useState(false)
    function onChange5(ev) {
        const {
            name, value
        } = ev.target;
        setCampocpf(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }





    const [tabelatroca, setTabelatroca] = useState([]);
    const [tabelapedido, setTabelapedido] = useState([]);
    const [tabelaentrada, setTabelaentrada] = useState([]);
    const [tabeladevolucao, setTabeladevolucao] = useState([]);
    const [tabelacancelamento, setTabelacancelamento] = useState([]);



    function tabelapedidos(tipo) {

        console.log(tipo)

        if (tipo === '0') {

            $("#tabelaspedidos").hide();
            $("#tabelastrocas").hide();
            $("#tabeladevolucoes").hide();
            $("#tabelacancelamentos").hide();
            $("#tabelaentradas").show();

            api.get(`http://192.168.0.62:3350/entradas/` + datainicial + '/' + datafinal + '/' + campocpf + '/' + campofornecedor + '/' + campovendedoras + '/' + camponomcliente).then(response => { setTabelaentrada(response.data) })

        }


        if (tipo === '1') {

            $("#tabelaentradas").hide();
            $("#tabelastrocas").hide();
            $("#tabeladevolucoes").hide();
            $("#tabelacancelamentos").hide();
            $("#tabelaspedidos").show();


            api.get(`http://192.168.0.62:3350/pedidos/` + datainicial + '/' + datafinal +  '/' + campocpf + '/' + campofornecedor + '/' + campovendedoras + '/' + camponomcliente).then(response => { setTabelapedido(response.data) })


        }
        if (tipo === '2') {

            $("#tabelaspedidos").hide();
            $("#tabeladevolucoes").hide();
            $("#tabelaentradas").hide();
            $("#tabelastrocas").hide();
            $("#tabelastrocas").show();

            api.get(`http://192.168.0.62:3350/trocas/`+ datainicial + '/' + datafinal +  '/' + campocpf + '/' + campofornecedor + '/' + campovendedoras + '/' + camponomcliente).then(response => { setTabelatroca(response.data) })



        }


        if (tipo === '3') {
            $("#tabelaspedidos").hide();
            $("#tabelastrocas").hide();
            $("#tabelacancelamentos").hide();
            $("#tabelaentradas").hide();
            $("#tabeladevolucoes").show();

            api.get(`http://192.168.0.62:3350/devolucoes/` + datainicial + '/' + datafinal +  '/' + campocpf + '/' + campofornecedor + '/' + campovendedoras + '/' + camponomcliente).then(response => { setTabeladevolucao(response.data) })
        }

        if (tipo === '4') {

            $("#tabeladevolucoes").hide();
            $("#tabelaentradas").hide();
            $("#tabelastrocas").hide();
            $("#tabelaspedidos").hide();
            $("#tabelacancelamentos").show();

            api.get(`http://192.168.0.62:3350/cancelamentos/` + datainicial + '/' + datafinal +  '/' + campocpf + '/' + campofornecedor + '/' + campovendedoras + '/' + camponomcliente).then(response => { setTabelacancelamento(response.data) })
        }



    }
   






    return (
        <div>
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Movimentação Loja</h2>
                <hr id="linha"></hr>
                <h6 id='tipo'>Tipo de Movimentação</h6>
                <div className="caixa" onChange={onChange2}>

                    <Input type="radio" value={0} name='tipo'></Input>
                    <Label id='estilocheck1'>Entradas</Label>
                    <Input type="radio" value={1} name='tipo'></Input>
                    <Label id='estilocheck2'>Pedidos</Label>
                    <Input type="radio" value={2} name='tipo' >Trocas</Input>
                    <Label id='estilocheck3'>Trocas</Label>
                    <Input type="radio" value={3} name='tipo' ></Input>
                    <Label id='estilocheck4'>Devoluções</Label>
                    <Input type="radio" value={4} name='tipo'></Input>
                    <Label id='estilocheck5'>Cancelamento</Label>


                </div>


                <h6 id='titulo2'>Data de Movimentação</h6>
                <div className='datamovimentacaocampo'>
                    <TextField
                        id='datamovimentacao'                  
                        onChange={onChange}                     
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                    />
                    
                    <TextField
                       id='datamovimentacao2'                  
                       onChange={onChange1}                      
                       locale={ptBR}
                       dateFormat="P"
                       withPortal
                       type='date'
                    />
                   
                </div>
                <div className='Campomovimentacao ' >
                    <TextField onChange={onChange6} id='C1' label="Fornecedores" />
                    <TextField onChange={onChange3} id='C2' label="Vendedoras" />
                    <TextField onChange={onChange4} id='C3' label="Nome Cliente" />
                    <TextField onChange={onChange5} id='C4' label="CPF/CNPJ" />
                </div>
                <Button color='btn btn-primary' className="botaomovimentacao" type='submit' onClick={function (event) { tabelapedidos(tipo); }}>Filtrar</Button>

                { /* Entrada */}
                <StickyTable className='hide tab1' id='tabelaentradas'>
                    <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Documento</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Vendedor</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Itens</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Total</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Hora</Cell>

                    {tabelaentrada.map((tabelaentrada, idx) => (
                        <Row key={idx} tabelaentrada={tabelaentrada}>
                            <Cell>#</Cell>
                            <Cell>{tabelaentrada.documento}</Cell>
                            <Cell>{tabelaentrada.codigovend + ' - '}{tabelaentrada.nome}</Cell>
                            <Cell>{tabelaentrada.totalitens}</Cell>
                            <Cell>{tabelaentrada.totalgeral}</Cell>
                            <Cell>{tabelaentrada.data}</Cell>
                            <Cell>{tabelaentrada.hora}</Cell>
                        </Row>

                    ))}

                </StickyTable>

                { /* Devolução */}
                <StickyTable className='hide tab2' id='tabeladevolucoes'>
                    <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Documento</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Vendedor</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Itens</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Total</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Hora</Cell>
                    {tabeladevolucao.map((tabeladevolucao, idx) => (
                        <Row key={idx} tabeladevolucao={tabeladevolucao}>
                            <Cell>#</Cell>
                            <Cell>{tabeladevolucao.documento}</Cell>
                            <Cell>{tabeladevolucao.codigovend + ' - '}{tabeladevolucao.nome}</Cell>
                            <Cell>{tabeladevolucao.totalitens}</Cell>
                            <Cell>{tabeladevolucao.totalgeral}</Cell>
                            <Cell>{tabeladevolucao.data}</Cell>
                            <Cell>{tabeladevolucao.hora}</Cell>
                        </Row>

                    ))}
                </StickyTable>

                { /* Pedido */}
                <StickyTable className='hide tab3' id='tabelaspedidos'>
                    <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Doc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>CPF/CNPJ</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Itens</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Desc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Acrésc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Vendedor</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Hora</Cell>

                    {tabelapedido.map((tabelapedido, idx) => (
                        <Row key={idx} tabelapedido={tabelapedido}>
                            <Cell>#</Cell>
                            <Cell>{tabelapedido.documento}</Cell>
                            <Cell>{tabelapedido.doctoclie}</Cell>
                            <Cell>{tabelapedido.totalitens}</Cell>
                            <Cell>{tabelapedido.totaldesc}</Cell>
                            <Cell>{tabelapedido.totalacre}</Cell>
                            <Cell>{tabelapedido.codigovend + ' - '}{tabelapedido.nome}</Cell>
                            <Cell>{tabelapedido.data}</Cell>
                            <Cell>{tabelapedido.hora}</Cell>
                        </Row>
                    ))}

                </StickyTable>

                { /* Troca */}
                <StickyTable className='hide tab4' id="tabelastrocas">
                    <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Doc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>CPF/CNPJ</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Itens</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Desc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Acrésc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Vendedor</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Hora</Cell>

                    {tabelatroca.map((tabelatroca, idx) => (
                        <Row key={idx} tabelatroca={tabelatroca}>

                            <Cell>#</Cell>
                            <Cell>{tabelatroca.documento}</Cell>
                            <Cell>{tabelatroca.doctoclie}</Cell>
                            <Cell>{tabelatroca.totalitens}</Cell>
                            <Cell>{tabelatroca.totaldesc}</Cell>
                            <Cell>{tabelatroca.totalacre}</Cell>
                            <Cell>{tabelatroca.codigovend + ' - '}{tabelatroca.nome}</Cell>
                            <Cell>{tabelatroca.data}</Cell>
                            <Cell>{tabelatroca.hora}</Cell>
                        </Row>
                    ))}

                </StickyTable>
                {/* DEVOLUÇÃO */}
                <StickyTable className='hide tab5' id="tabelacancelamentos">
                    <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Doc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>CPF/CNPJ</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Itens</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Desc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Acrésc</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Vendedor</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Data</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Hora</Cell>

                    {tabelacancelamento.map((tabelacancelamento, idx) => (
                        <Row key={idx} tabelacancelamento={tabelacancelamento}>

                            <Cell>#</Cell>
                            <Cell>{tabelacancelamento.documento}</Cell>
                            <Cell>{tabelacancelamento.doctoclie}</Cell>
                            <Cell>{tabelacancelamento.totalitens}</Cell>
                            <Cell>{tabelacancelamento.totaldesc}</Cell>
                            <Cell>{tabelacancelamento.totalacre}</Cell>
                            <Cell>{tabelacancelamento.codigovend + ' - '}{tabelacancelamento.nome}</Cell>
                            <Cell>{tabelacancelamento.data}</Cell>
                            <Cell>{tabelacancelamento.hora}</Cell>
                        </Row>
                    ))}

                </StickyTable>


            </Container>
        </div>
    );
}
export default Movimentacoes;