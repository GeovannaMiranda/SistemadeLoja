/* eslint-disable no-unused-vars */
import { TextField } from "@material-ui/core";
import { Button, Container } from "reactstrap";
import api from "../../Api";


import React, { useState, useEffect, useCallback } from "react";
import '../Estoques/estoqueFornecedor.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Row, Cell, StickyTable } from 'react-sticky-table';

import moment from 'moment';



const EstoqueFornecedor = (props) => {

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
        var bd = yyyy + '-' + mm + '-' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    
    }


    function buscarUltimos30dias() {
        var datIni = hoje().bd;
        var mesPegar = datIni.split('-')[1];
        if (mesPegar === '0') {
            mesPegar = '12';
        } else {
            mesPegar = parseInt(mesPegar) - 1;
            if (mesPegar < 10) {
                mesPegar = '0' + mesPegar.toString();
            } else {
                mesPegar = mesPegar.toString();
            }
        }
        var dataMes = datIni.split('-')[0] + '-' + mesPegar + '-' + datIni.split('-')[2];
        return dataMes;
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    function buscarQuinzena() {
        var datIni = hoje().bd;
        var dia = datIni.split('-')[2];
        var mes = datIni.split('-')[1];
        var ano = datIni.split('-')[0];
        var diaIni = '01';
        var diaFim = '15';
        if (dia > '15') {
            diaIni = '16';
            diaFim = '31';
            if (mes === '02') {
                if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
                    diaFim = '29';
                } else {
                    diaFim = '28';
                }
            } else if (mes === '04' || mes === '06' || mes === '09' || mes === '11') {
                diaFim = '30';
            }
        }
        var dataIni = ano + '-' + mes + '-' + diaIni;
        var dataFim = ano + '-' + mes + '-' + diaFim;
        var valores = { 'dataIni': dataIni, 'dataFim': dataFim };
        return valores;
    }

    var loja = 5;
    //var codigoFornecedor = 136190;
   



    var datainicial = buscarQuinzena().dataIni;

    var datafinal = buscarQuinzena().dataFim;



    const datainicialfor = moment(datainicial).format("YYYYMMDD")

    const datafinalfor = moment(datafinal).format("YYYYMMDD")

    
    const [botaofiltrar, setBotaofiltrar] = useState(null);
    //console.log(botaofiltrar);
    function onChange4(ev){
        const{
           
            nome, value
        } = ev.target
        setBotaofiltrar(value);
    }

    const [camposestoquef, setCamposestoquef] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/estoquefornecedortotal/${loja}/`).then(response => {
            setCamposestoquef(response.data)
        })
    }, [loja]);



    const [tabelaestoquef, setTabelaestoquef] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/estoquefornecedortable/${datainicialfor}/${datafinalfor}/${loja}`).then(response => {
            setTabelaestoquef(response.data)
        })
    },[loja]);

 
    const filtrar = useCallback (() => {
        api.get(`http://192.168.0.62:3350/estoquefornecedortablefor/${datainicialfor}/${datafinalfor}/${botaofiltrar}/${loja}`).then(response => {
            setTabelaestoquef(response.data); 
        })
    
    },[botaofiltrar, loja]);


   
    


    return (
        <div>
            <MenuSuperior />
            <Container >
                <div>
                    <h2 id='titulofornecedor' >Estoque Fornecedor</h2>
                    <hr id='linhafornecedor'></hr>
                </div>

                <div className='Campoestoquefornecedor'>

                    <TextField label="Fornecedor" onChange={onChange4}/>
                    <Button id='botaofornecedor' color='btn btn-primary' onClick={filtrar} type='submit'>Filtrar</Button>
                </div>
            
                <div className='campoetabela'>
                    <StickyTable className="tabelaestoquefornecedor">
                        <Cell style={{ background: '#007bff', color: 'white' }}>#</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Fornecedor</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Estq.Loja</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Valor Estoque</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Qtde. Vendas Quinzena</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>Total Quinzena</Cell>

                        {tabelaestoquef.map((tabelaestoquef, idx) => (
                            <Row className="cabecalho2" key={idx} tabelaestoquef={tabelaestoquef} >
                                <Cell></Cell>
                                <Cell>{tabelaestoquef.nome_fornecedor}</Cell>
                                <Cell>{tabelaestoquef.qtd_estoque_total}</Cell>
                                <Cell>{tabelaestoquef.preco_total}</Cell>
                                <Cell>{tabelaestoquef.qtd_venda_total}</Cell>
                                <Cell>{tabelaestoquef.venda_total}</Cell>
                            </Row>

                        ))}
                    </StickyTable>

                    <div className='Campofornecedor'>
                        {camposestoquef.map(tabelaestoquef => (
                            <TextField key={tabelaestoquef.total_estoque} value={tabelaestoquef.total_estoque} label="Total Estoque" ></TextField>
                        ))}

                        {camposestoquef.map(tabelaestoquef => (
                            <TextField key={tabelaestoquef.total_valor} value={tabelaestoquef.total_valor} label="Valor Total Estoque" ></TextField>
                        ))}
                    </div>
                </div>
             
                

            </Container>
        </div>
    );
}

export default EstoqueFornecedor;