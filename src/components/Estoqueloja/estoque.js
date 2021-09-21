import { Select, TextField, InputLabel, MenuItem } from "@material-ui/core";
import React from "react";
import { Button, Container, Input, Label } from "reactstrap";
import '../Estoqueloja/estoque.css';
import MenuSuperior from "../menuSuperior/MenuSuperior";

const EstoqueLoja = (props) => {
    return (
        <div>
            <MenuSuperior/>
            <Container lassName="ContainerEstoque">
                <h2 id='titulo'>Estoque Loja</h2>
                <hr id='linha'></hr>

                <div className='Campo'>
                    <InputLabel>Revista</InputLabel>
                    <Select>
                        <MenuItem value="disable">Selecione Opção</MenuItem>
                        <MenuItem></MenuItem>
                    </Select>
                    <TextField label="Fornecedor" />
                    <TextField label="Página" />
                    <TextField label="Referência" />
                    <TextField label="Item" />
                </div>

                <div className="Campo1" >
                    <TextField
                        id="Campo"
                        label="Estoque menor igual à: "
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button color='btn btn-primary' className='Botaofil'>Filtrar</Button>
                </div>

                <div className="Campo2">
                    <TextField label="Total Estoque" />
                    <TextField label="Valor Total Estoque" />
                </div>
            </Container>
        </div>
    );
}
export default EstoqueLoja;