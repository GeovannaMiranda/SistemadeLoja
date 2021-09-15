import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Brinde from "./components/Brinde/brinde";
import EstoqueLoja from "./components/Estoqueloja/estoque";

import EstoqueFornecedor from "./components/Estoques/estoqueFornecedor";
import Lancamento from "./components/Lancamento_Caixa/lancamento";
import Metasloja from "./components/MetasLoja/metas";
import MetasVendedoras from "./components/MetasVendedoras/metasvend";
import Movimentacoes from "./components/Movimentacoes_Lojas/movimentacoes";
import PedidoTroca from "./components/Pedidos_Trocas/pedidoetroca";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "metasloja"  component={Metasloja}/>
                <Route path = "metasvend" exact component={MetasVendedoras}/>
                <Route path = "movimentacoes" exact component={Movimentacoes}/>
                <Route path = "estoquefornecedor" component={EstoqueFornecedor}/>
                <Route path = "/" exact component={EstoqueLoja}/>
                <Route path = "lancamento" component={Lancamento}/>
                <Route path = "pedidoetrocas" component={PedidoTroca}/>
                <Route path = "brinde" component={Brinde}/>
            </Switch>
        </BrowserRouter>
    )
}