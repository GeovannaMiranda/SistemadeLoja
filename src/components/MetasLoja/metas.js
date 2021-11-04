import React, { useState } from "react";
import { Row, Cell, StickyTable } from 'react-sticky-table';
import "../menuSuperior/MenuSuperior"
import "../MetasLoja/metas.css";
import { TextField } from "@material-ui/core";

import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Label } from "reactstrap";


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

    const [selectDateFim, setSelectDateFim] = useState(null);    
    const [isActive1, setIsActive1] = useState(false)
    function onChange1(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateFim(value); 
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
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
                   
                    <TextField
                        id='data'                  
                        onChange={onChange}                     
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                    />
                    
                    <TextField
                       id='data1'                  
                       onChange={onChange1}                      
                       locale={ptBR}
                       dateFormat="P"
                       withPortal
                       type='date'
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