class Prato{
    constructor(preco,validade,peso){
        this.preco = preco
        this.validade = validade
        this.peso = peso
        //this.array = []
    }

    get getPrecoPrato(){
        return this.preco
    }

    set setPrecoPrato(preco){
        this.preco = preco
    }

    get getValidadePrato(){
        return this.validade
    }
    set setValidadePrato(validade){
        this.validade = validade
    }

    get getPesoPrato(){
        return this.peso
    }

    set setPesoPrato(peso){
        this.peso = peso
    }

    get getArray(){
        return this.array
    }
    set setArray(arr){
        this.array.push(arr)
    }

}

class Pizza extends Prato {
    constructor(recheio,bordas,molho,nome,preco,validade,peso){
        super(preco,validade,peso)
        this.recheio = recheio
        this.bordas = bordas
        this.molho = molho
        this.nome = nome
    }

    get getNomePizza(){
        return this.nome
    }
     
    set setNomePizza(name){
        this.nome = name
    }

    get getRecheioPizza(){
        return this.recheio
    }
     
    set setRecheioPizza(name){
        this.recheio = name
    }

    get getBordasPizza(){
        return this.bordas
    }

    set setBordasPizza(borda){
        this.bordas - borda
    }

    get getMolhoPizza(){
        return this.molho
    }

    set setMolhoPizza(molho){
        this.molho = molho
    }

}

class Lanche extends Prato{
    constructor(pao,recheio,molho,nome,preco,validade,peso){
        super(preco,validade,peso)
        this.pao = pao
        this.recheio = recheio
        this.molho = molho
        this.nome = nome
    }

    get getNomeLanche(){
        return this.nome
    }
     
    set setNomeLanche(name){
        this.nome = name
    }

    get getRecheioLanche(){
        return this.recheio
    }
     
    set setRecheioLanche(rech){
        this.recheio = rech
    }

    get getPaoLanche(){
        return this.pao
    }

    set setPaoLanche(pao){
        this.pao = pao
    }

    get getMolhoLanche(){
        return this.molho
    }

    set setMolhoLanche(molho){
        this.molho = molho
    }

}

class Salgadinho extends Prato{
    constructor(recheio,massa,nome,preco,validade,peso){
        super(preco,validade,peso)
        this.nome = nome
        this.massa =massa
        this. recheio = recheio
    }

    get getNomeSal(){
        return this.nome
    }
     
    set setNomeSal(name){
        this.nome = name
    }

    get getMassaSal(){
         return this.massa
    }
    set setMassaSal(massa){
        this.massa = massa
    }

    get getRecheioSal(){
        return this.recheio
    }
     
    set setRecheioSal(rech){
        this.recheio = rech
    }

}


