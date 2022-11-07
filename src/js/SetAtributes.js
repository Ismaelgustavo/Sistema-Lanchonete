
//const prato1 = new Prato('Pizza Peperone', 12.50,'10/11/2022',300)
//const prato2 = new Prato('pizza quatro queijos',20,'22/12/2023',15)
 //prato1.setArray = prato1
 //prato1.setArray = prato2

 const pizza1 = new Pizza("Bolonhesa", "Peperoni", "Catupiry","Pizza de Peperoni", 40.0, "22/11/2020", 40);
 const pizza2 = new Pizza("3 Queijos", "Gorgonzola", "Calabresa", "Pizza de 3 Queijos", 40.0, "10/2/2020", 40);
 const pizza3 = new Pizza ("Mostarda e Mel", "Provolone", "Scala", "Pizza Provoleta", 40.0, "12/8/2020", 40)

 const lanche1 = new Lanche("Brioche", "calabresa", "Catshup mostarda","Calabria", 13, "22/10/2020", 300)
 const lanche2 = new Lanche("Francês", "Ovos e bacon", "Catupiry","Francaise", 33, "13/11/2020", 400);
 const lanche3 = new Lanche("Hamburger", "Frango catupiry", "Requeijão","Catupifrango", 20, "04/2/2020", 400)

 const sal1 = new Salgadinho("Frango", "Batata","Bolete de frango", 5, "22/10/2020", 50);
 const sal2 = new Salgadinho("Calabresa", "Mandioca","Coxinha de calabresa", 6, "02/5/2020", 60)
 const sal3 = new Salgadinho("Carne moída", "Batata","Coxinha de carne moída" ,10, "13/3/2020", 70)
 //("Pizza de peperoni", 40.0, "22/11/2020", 40 , "Bolonhesa", "peperoni", "catupiry")


 function listaProdutos(){
    const p1 = document.querySelector('#p1') 
    const p2 = document.querySelector('#p2') 
    const p3 = document.querySelector('#p3') 
    p1.innerHTML = `Recheio:${pizza1.getRecheioPizza} | Borda:${pizza1.getBordasPizza} | Molho:${pizza1.getMolhoPizza} | Sabor:${pizza1.getNomePizza} | Preço:R$${pizza1.getPrecoPrato} | Validade:${pizza1.validade} | peso:${pizza1.getPesoPrato}g`
    p2.innerHTML = `Recheio:${pizza2.getRecheioPizza} | Borda:${pizza2.getBordasPizza} | Molho:${pizza2.getMolhoPizza} | Sabor:${pizza2.getNomePizza} | Preço:R$${pizza2.getPrecoPrato} | Validade:${pizza2.validade} | peso:${pizza2.getPesoPrato}g`
    p3.innerHTML = `Recheio:${pizza3.getRecheioPizza} | Borda:${pizza3.getBordasPizza} | Molho:${pizza3.getMolhoPizza} | Sabor:${pizza3.getNomePizza} | Preço:R$${pizza3.getPrecoPrato} | Validade:${pizza3.validade} | peso:${pizza3.getPesoPrato}g`

    const l1 = document.querySelector('#l1') 
    const l2 = document.querySelector('#l2') 
    const l3 = document.querySelector('#l3') 
    l1.innerHTML = `Pão:${lanche1.getPaoLanche} | Recheio:${lanche1.getRecheioLanche} | Molho:${lanche1.getMolhoLanche} | Sabor:${lanche1.getNomeLanche} | Preço:R$${lanche1.getPrecoPrato} | Validade:${lanche1.validade} | peso:${lanche1.getPesoPrato}g`
    l2.innerHTML = `Pão:${lanche2.getPaoLanche} | Recheio:${lanche2.getRecheioLanche} | Molho:${lanche2.getMolhoLanche} | Sabor:${lanche2.getNomeLanche} | Preço:R$${lanche2.getPrecoPrato} | Validade:${lanche2.validade} | peso:${lanche2.getPesoPrato}g`
    l3.innerHTML = `Pão:${lanche3.getPaoLanche} | Recheio:${lanche3.getRecheioLanche} | Molho:${lanche3.getMolhoLanche} | Sabor:${lanche3.getNomeLanche} | Preço:R$${lanche3.getPrecoPrato} | Validade:${lanche3.validade} | peso:${lanche3.getPesoPrato}g`

    const s1 = document.querySelector('#s1') 
    const s2 = document.querySelector('#s2') 
    const s3 = document.querySelector('#s3') 
    s1.innerHTML = `Recheio:${sal1.getRecheioSal} | Massa:${sal1.getMassaSal} | Sabor:${sal1.getNomeSal} | Preço:R$${sal1.getPrecoPrato} | Validade:${sal1.validade} | peso:${sal1.getPesoPrato}g`
    s2.innerHTML = `Recheio:${sal2.getRecheioSal} | Massa:${sal2.getMassaSal} | Sabor:${sal2.getNomeSal} | Preço:R$${sal2.getPrecoPrato} | Validade:${sal2.validade} | peso:${sal2.getPesoPrato}g`
    s3.innerHTML = `Recheio:${sal3.getRecheioSal} | Massa:${sal3.getMassaSal} | Sabor:${sal3.getNomeSal} | Preço:R$${sal3.getPrecoPrato} | Validade:${sal3.validade} | peso:${sal3.getPesoPrato}g`


}



