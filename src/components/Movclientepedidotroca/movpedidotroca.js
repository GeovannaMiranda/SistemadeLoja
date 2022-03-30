import React, {useState} from "react";
import { Input, Label, Button, Modal, ModalBody, ModalHeader, ModalFooter  } from "reactstrap";
import MenuSuperior from "../menuSuperior/MenuSuperior";

const Pedidotroca = (props) => {

    
    //Modal open state
    const [modal, setModal] = React.useState(false);

    const [value, setValue] = React.useState(false);

    // Toggle for Modal0
    //const toggle = (value) => setModal(!modal);

    function toggle(value) {
        setModal(!modal);

        setValue(`${value}`);


    }


    

    return (
        <>
            <MenuSuperior />
            <h4>Movimentações Clientes</h4>
            <hr></hr>
            <section>
                <Input type="checkbox"></Input>
                <Label>Pedido</Label>

                <Input type="checkbox"></Input>
                <Label>Troca</Label>
            </section>

            <section>
                <Button color="primary" onClick={toggle}>
                    click me
                </Button>
                <Modal
                    fullscreen="xl"
                    size="xl"
                    isOpen={modal}
                    toggle={toggle}
                >
                    <ModalHeader >
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                        
                        >
                            Do Something
                        </Button>
                   
                        <Button >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </section>

        </>
    );
}
export default Pedidotroca;