import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Brinde from "./components/Brinde/brinde";
import EstoqueFornecedor from "./components/Estoques/estoqueFornecedor";
import EstoqueLoja from "./components/Estoqueloja/estoque";
import Lancamento from "./components/Lancamento_Caixa/lancamento";
import Metasloja from "./components/MetasLoja/metas";
import MetasVendedoras from "./components/MetasVendedoras/metasvend";
import Movimentacoes from "./components/Movimentacoes_Lojas/movimentacoes";
import PedidoTroca from "./components/Pedidos_Trocas/pedidoetroca";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component={Metasloja}/>
                <Route path = "/metasvendedoras" component={MetasVendedoras}/>
                <Route path = "/movimentacoes"  component={Movimentacoes}/>
                <Route path = "/estoquefornecedor" component={EstoqueFornecedor}/>
                <Route path = "/estoque"   component={EstoqueLoja}/>
                <Route path = "/lancamento" component={Lancamento}/>
                <Route path = "/pedidotroca" component={PedidoTroca}/>
                <Route path = "/brinde" component={Brinde}/>
            </Switch>
        </BrowserRouter>
    )
}