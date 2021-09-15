import React, {useState} from "react";
import { Container, Button } from "reactstrap";
import '../MetasVendedoras/metasvend.css';


import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { ptBR } from 'date-fns/locale'



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
    return(
        <div>
            <Container>
                <h2 id='titulo'>Acompanhamento de Metas</h2>
                <hr id='linha'></hr>              

                <div className='Campo'>
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
                    <Button id='Botao' color='btn btn-primary'>Filtrar</Button>
                </div>

                <Button className='botao2' color='btn btn-primary'>FILTRAR PROGRESSO</Button>

            </Container>
        </div>
    );
}

export default MetasVendedoras;