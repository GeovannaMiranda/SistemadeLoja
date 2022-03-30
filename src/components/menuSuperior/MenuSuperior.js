import React, { useState } from 'react';
import "./MenuSuperior.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle
} from 'reactstrap';
import logo from "../img/logo_branca.png"
//import MaterialIcon from '@material/react-material-icon';


const MenuSuperior = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src={logo} className="img"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} className="Hamburger" />
        <Collapse isOpen={isOpen} navbar id="geral">
          <Nav className="mr-auto" navbar id="geral">
            <Nav>
              <UncontrolledDropdown nav inNavbar href="/metas" className='link1'>
                <DropdownToggle nav caret ><i className="material-icons md-36 souza-left ">attach_money</i>
                  Metas
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/">
                    Metas Loja
                  </DropdownItem>
                  <DropdownItem href="/metasvendedoras">
                    Metas Vendedoras
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>              
            </Nav>
            <NavItem className='link2'>
              <NavLink href="/movimentacoes" id="menus"><i className="material-icons md-36 souza-left ">store</i>Movimentações Lojas</NavLink>
            </NavItem>
            <NavItem className='link3'>
              <NavLink href="/movpedidotroca" id="menus"><i class="material-icons md-36 souza-left">account_circle</i>Movimentações Clientes</NavLink>
            </NavItem>
            <Nav >
              <UncontrolledDropdown nav inNavbar href="/metas" className='link4' >
                <DropdownToggle nav caret className='link4' ><i className="material-icons md-36 souza-left ">local_shipping</i>
                  Estoques
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/estoque">
                    Estoque Loja
                  </DropdownItem>
                  <DropdownItem href="/estoqueFornecedor">
                    Estoque Fornecedor
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavItem className='link5' >
              <NavLink href="/pedidotroca" id="menus"><i className="material-icons md-36 souza-left ">compare_arrows</i>Pedido - Troca</NavLink>
            </NavItem>
            <NavItem  className='link6'>
              <NavLink href="/lancamento" id="menus"><i className="material-icons md-36 souza-left ">add_shopping_cart</i>Lançamento Caixa</NavLink>
            </NavItem>
            
            <NavItem className='link6' >
              <NavLink href="/brinde" id="menus"><i className="material-icons md-36 souza-left ">redeem</i>Brinde</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuSuperior;