const pedido = []

function carregaDados(){

    listaProdutos()
    //listaPedido()
  
}

function listaPedido(valor){
    if(valor === 'pizza1'){
        pedido.push(pizza1)
    }
    if(valor === 'pizza2'){
        pedido.push(pizza2)
    }
    if(valor === 'pizza3'){
        pedido.push(pizza3)
    }

    if(valor === 'lanche1'){
        pedido.push(lanche1)
    }
    if(valor === 'lanche2'){
        pedido.push(lanche2)
    }
    if(valor === 'lanche3'){
        pedido.push(lanche3)
    }

    if(valor === 'sal1'){
        pedido.push(sal1)
    }
    if(valor === 'sal2'){
        pedido.push(sal2)
    }
    if(valor === 'sal3'){
        pedido.push(sal3)
    }



    console.log(pedido)

}