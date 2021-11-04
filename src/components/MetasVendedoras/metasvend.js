import React, { useEffect, useState } from "react";
import { Container, Button, Progress, Card, Label } from "reactstrap";
import '../MetasVendedoras/metasvend.css';
import api from "../../Api";
import { TextField } from "@material-ui/core";

import moment from 'moment';
import { ptBR } from 'date-fns/locale'
import MenuSuperior from "../menuSuperior/MenuSuperior";


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


    var loja = 5;

    const [progresso, setProgresso] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/metavendedoravend/${hoje().bd}/${hoje().bd}/${loja}`).then(response => {
            setProgresso(response.data)
        })
    }, [loja])

    const [totais, setTotais] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/metavendedoratotalrev/${hoje().bd}/${hoje().bd}/${loja}`).then(response => {
            setTotais(response.data)
        })
    }, [loja]);

    const [totaisvendedoras, setTotaisvendedoras] = useState([]);
    useEffect(() => {
        api.get(`http://192.168.0.62:3350/metavendedoratotal/${hoje().bd}/${hoje().bd}/${loja}`).then(response => {
            setTotaisvendedoras(response.data)
        })
    }, [loja]);



    return (
        <div>
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Acompanhamento de Metas</h2>
                <hr id='linha'></hr>

                <div className='Campomet'>
                    <TextField
                        id='datamet'
                        onChange={onChange}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                        Label='De:'
                    />

                    <TextField
                        id='datamet1'
                        onChange={onChange1}
                        locale={ptBR}
                        dateFormat="P"
                        withPortal
                        type='date'
                    />
                    <Button id='Botao' color='btn btn-primary'>Filtrar</Button>
                </div>

                <Button className='botao2' color='btn btn-primary'>FILTRAR PROGRESSO</Button>

                <div className='progresso'>
                    <Card className='card1'>
                        <h6 className='titulocard' ><strong>NOME VENDEDORA</strong></h6>
                        {progresso.map((progresso) => (

                            <div className='barra1'>
                                <Label key={progresso.ven_nome}></Label>
                                <Label >{progresso.rev_nom}</Label>
                                <Progress multi id='estilobarra' >
                                    <Progress max={100} bar color="success" value={progresso.venda}>{'R$ ' + progresso.venda + '  -  (' + progresso.porcentagemvenda + '%)'}</Progress>
                                    <Progress max={100} bar color="danger" value={progresso.falta}>{'R$ ' + progresso.falta + ' - (' + progresso.procentagemfalta + '%)'}</Progress>

                                </Progress>
                            </div>
                        ))}
                    </Card>

                    <Card className='card2'>
                        <h6 className='titulocard1'><strong> TOTAIS REVISTAS </strong> </h6>
                        {totais.map(totais => (
                            <div totais={totais} className='barra2'>
                                <Label>{totais.rev_nom}</Label>
                                <Progress multi id='estilobarra1'>
                                    <Progress max={100} bar color="success" value={totais.venda}>{'R$ ' + totais.venda + '  -  (' + totais.porcentagemvenda + '%)'}</Progress>
                                    <Progress max={100} bar color="danger" value={totais.falta}>{'R$ ' + totais.falta + '  -  (' + totais.procentagemfalta + '%)'}</Progress>
                                </Progress>
                            </div>
                        ))}
                    </Card>

                    <Card className='card3'>
                        <h6 className='titulocard2'><strong>TOTAIS VENDEDORAS</strong></h6>
                        {totaisvendedoras.map(totaisvendedoras => (
                            <div totaisvendedoras={totaisvendedoras} className='barra3'>
                                <Label>{totaisvendedoras.codigovend + '  -  ' + totaisvendedoras.ven_nome}</Label>
                                <Progress multi id='estilobarra2'>
                                    <Progress max={100} bar color="success" value={totaisvendedoras.venda}>{'R$ ' + totaisvendedoras.venda + '  -  (' + totaisvendedoras.porcentagemvenda + '%)'}</Progress>
                                    <Progress max={100} bar color="danger" value={totaisvendedoras.falta}>{'R$ ' + totaisvendedoras.falta + '  -  (' + totaisvendedoras.procentagemfalta + '%)'}</Progress>
                                </Progress>
                            </div>
                        ))}
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default MetasVendedoras;