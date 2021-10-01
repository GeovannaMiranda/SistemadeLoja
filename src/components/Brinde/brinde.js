import { TextField, Select, MenuItem, InputLabel } from "@material-ui/core";
import React from "react";
import { Button, Container } from "reactstrap";
import logo from '../img/colorido.png'
import MenuSuperior from "../menuSuperior/MenuSuperior";
import './brinde.css';
const Brinde = (props) => {
    return (
        <div>
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Sistema Controle de Brinde</h2>
                <hr id='linha'></hr>

                <TextField label='CPF/CNPJ' className='campobrinde'></TextField>

                <InputLabel className='labelbrinde'><strong>Escolha o Brinde</strong></InputLabel>
                <Select 
                    className='selectbrinde'                              
                >
                    <MenuItem value="">
                        <em>Selecione Opção</em>
                    </MenuItem>
                    <MenuItem >NOVEMBRO 21 PLUS</MenuItem>
                    <MenuItem >NOVEMBRO 21</MenuItem>
                    <MenuItem >BALADA PLUS</MenuItem>
                    <MenuItem >BALADA</MenuItem>
                    <MenuItem >OUTUBRO 21 PLUS</MenuItem>
                    <MenuItem >OUTUBRO</MenuItem>
                    <MenuItem >ALEGRIA PLUS</MenuItem>
                    <MenuItem >ALEGRIA</MenuItem>
                </Select>

                <Button color='btn  btn-primary' className='botaobrinde'>Registrar</Button>
                <img src={logo} className='logobrinde' />

            </Container>
        </div>
    );
}

export default Brinde;