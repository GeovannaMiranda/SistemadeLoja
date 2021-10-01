import React, { useState } from "react";
//import { Button, Container } from "reactstrap";
import { Row, Cell, StickyTable } from 'react-sticky-table';
import "../menuSuperior/MenuSuperior"
import "../MetasLoja/metas.css";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";


const for_cod = localStorage.getItem('for_cod')



const Metasloja = (props) => {

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
           <div class='container'>
                <div>
                    <h2 id="Titulo1">Acompanhamento de Metas</h2>
                    <hr></hr>
                </div>
                <div className='CampoMetas'>
                    <DatePicker
                        id='data'
                        placeholderText='Data inicial:'
                        onChange={onChange}
                        selected={selectDateIni}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='reset'
                    />
                    <DatePicker
                        placeholderText='Data final:'
                        id="data1"
                        onChange={onChange1}
                        selected={selectDateFim}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal

                    />
                    <button className="Botao" color='btn btn-primary'>Filtrar</button>
                </div>
                <StickyTable className="Tabela" >
                    <Row>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Loja</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Meta</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Total Venda</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Diferenças</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Percentual Meta</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Atingiu Meta</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Atualizado</Cell>
                    </Row>

                    <Row className="cabecalho2">
                        <Cell style={{ background: '#007bff', color: 'white' }} > M1 </Cell>
                    </Row>
                    <Row className="cabecalho2">
                        <Cell style={{ background: '#007bff', color: 'white' }}>B4</Cell>
                    </Row>
                    <Row className="cabecalho2">
                        <Cell style={{ background: '#007bff', color: 'white' }}>B5</Cell>
                    </Row>
                    <Row className="cabecalho2">
                        <Cell style={{ background: '#007bff', color: 'white' }}>B8</Cell>
                    </Row>

                </StickyTable>

                <StickyTable className="Tabela1" >

                    <Cell style={{ background: '#007bff', color: 'white' }}>Perido</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Meta Total</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Venda Total</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Diferença Total</Cell>
                    <Cell style={{ background: '#007bff', color: 'white' }}>Percentual Total</Cell>

                    <Row>
                        <Cell >  </Cell>
                        <Cell >  </Cell>
                        <Cell >  </Cell>
                        <Cell >  </Cell>
                    </Row>

                </StickyTable>

                <h6 className="meta">Meta mensal:</h6>
          
             </div>
        </div>
    );
}

export default Metasloja;