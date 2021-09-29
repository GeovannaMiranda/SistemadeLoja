import React from "react";
import { Button, Container} from "reactstrap";

import MenuSuperior from "../menuSuperior/MenuSuperior";

const Brinde = (props) => {
    return (
        <div>
            <MenuSuperior />
            <Container>
                <h2 id='titulo'>Sistema Controle de Brinde</h2>
                <hr id='linha'></hr>


                <Button color='btn  btn-primary'>Registrar</Button>
                <p >logo think</p>

            </Container>
        </div>
    );
}

export default Brinde;