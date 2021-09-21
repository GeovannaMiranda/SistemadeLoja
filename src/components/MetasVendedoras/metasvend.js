import React, { useState } from "react";
import { Container, Button, Progress } from "reactstrap";
import '../MetasVendedoras/metasvend.css';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";



const for_cod = localStorage.getItem('for_cod')

const MetasVendedoras = (props) => {

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
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Acompanhamento de Metas</h2>
                <hr id='linha'></hr>

                <div className='Campomet'>
                    <DatePicker
                        id='datamet'
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
                        id="datamet1"
                        onChange={onChange1}
                        selected={selectDateFim}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal

                    />
                    <Button id='Botao' color='btn btn-primary'>Filtrar</Button>
                </div>

                <Button className='botao2' color='btn btn-primary'>FILTRAR PROGRESSO</Button>

                <div>
                    <div className="text-center" style={{background: '#007bff', fontFamily: 'Robot, sans-serif', color: '#fff', borderRadius: '5px'}}>Vendedor</div>
                    <Progress value={30} />
                    <br/>
                    <div className="text-center" style={{background: '#FFFF00', fontFamily: 'Robot, sans-serif', color: '#fff', borderRadius: '5px'}}>Vendedor</div>
                    <Progress value="25"/>
                    <br/>
                    <div className="text-center" style={{background: '#FF8C00', fontFamily: 'Robot, sans-serif', color: '#fff', borderRadius: '5px'}}>Vendedor</div>
                    <Progress value={50} />
                    <br/>
                    <div className="text-center" style={{background: '#FF0000', fontFamily: 'Robot, sans-serif', color: '#fff', borderRadius: '5px'}}>Vendedor</div>
                    <Progress value={75} />
                    <br/>
                    <div className="text-center" style={{background: '#DC143C', fontFamily: 'Robot, sans-serif', color: '#fff', borderRadius: '5px'}}>Vendedor</div>
                    <Progress value="100" />                    
                </div>
            </Container>
        </div>
    );
}

export default MetasVendedoras;