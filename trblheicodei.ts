class Pessoa{
    private nome:string;
    private cpf:string;
    constructor(nome:string,cpf:string)
    {
        this.nome = nome;
        this.cpf = cpf;
    }
     public getnome(){
        return this.nome
    }
     public getcpf(){
        return this.cpf
    }
     public setnome(novonome:string){
        this.nome = novonome
    }
    }
    
    ///////
    
    abstract class veiculo{
     private dono: Pessoa | null;
     constructor(dono: Pessoa | null){
        this.dono = dono
     }
     public getdono(){
        return this.dono
    }
        public setdono(novodono: Pessoa | null){
            this.dono = novodono
        }
    }
    
    class Bicicleta extends veiculo{}
    
    abstract class VeiculoMotorizado extends veiculo{
        private placa:string;
        constructor(placa:string, dono: Pessoa | null){
            super(dono)
            this.placa = placa
            
        }
        public getplaca(){
            return this.placa
        }
        getCpfDono(): string| null{
            let dono = this.getdono();
            if(dono === null){
                return null
            }
            else{
                return dono.getcpf()
            }
        }
        abstract numeroDeRodas():number;
        }
        class carro extends VeiculoMotorizado{
            constructor(placa:string, dono: Pessoa | null){
                super(placa,dono)}
                numeroDeRodas(){
                    let rodas = 4;
                    return rodas;
                }
        }
        class moto extends VeiculoMotorizado{
            constructor(placa:string, dono: Pessoa | null){
                super(placa,dono)}
                numeroDeRodas(){
                    let rodas = 2;
                    return rodas;
                }
        }
        class Estacionamento{
            listaveiculado: VeiculoMotorizado[] = []
            Botaveiculo(novobotaveiculo:VeiculoMotorizado){
                this.listaveiculado.push(novobotaveiculo);
            }
            achaveiculadouy(indice:number){
                return this.listaveiculado[indice-1];
            }     
        }
    let elitemotors:Pessoa = new Pessoa("marcinhascarros","055.789.447-27")
    let volksvoguei:Pessoa = new Pessoa("80 mil vridros","80.000.087-55")
    let volkswagen:carro = new carro("KGB2424",volksvoguei)
    let shoreicarrinhos:carro = new carro("MSA8874",elitemotors)
    let sequestradordoarthur:Pessoa = new Pessoa("anonimei","244.244.244-24")
    let fortnitecarrinhossuperpoderosos:carro = new carro("FTN2025",sequestradordoarthur)
    let faaaaalamanu:Pessoa = new Pessoa("vamo lá pessoaal","312.564.819-95")
    let aguasdorio:carro = new carro("BNM879",faaaaalamanu)
    let prafinalizarpessoal:Pessoa = new Pessoa("professor,os suditos ingleses... são suditos ingleses?","547.147.639-87")
    let masvoceehacoloniaprofessor:carro = new carro("GHJ519",prafinalizarpessoal)
    let masissonaoehacompetenciadoprofessor:Pessoa = new Pessoa("Mas isso ai é o fator sorte","453.980.934-17")
    let maseunaotodandoseuexemplo:moto = new moto("SDS578",masissonaoehacompetenciadoprofessor)
    let aminhafydotiktokehamaismais:Pessoa = new Pessoa("#pulo na bala pelo assfe","175.437.293-67")
    let purinhasarrara:moto = new moto("FFF015",aminhafydotiktokehamaismais)
    let cariocaquentinho:Pessoa = new Pessoa("#i believe in afsse","516.537.204-84")
    let carrinhosandadadinhos:moto = new moto("VJH987",cariocaquentinho)
    let juliajuda:Pessoa = new Pessoa("naoajudou","675.056.715-01")
    let naoqueremosajudar:moto = new moto("GGA843",juliajuda)
    let brzcapacapa:Pessoa = new Pessoa("naocapamos","381.463.384-71")
    let tapapandominhakillmano:moto = new moto("XCV001",brzcapacapa)
    
    let estacionamento:Estacionamento = new Estacionamento()
    estacionamento.Botaveiculo(volkswagen)
    estacionamento.Botaveiculo(shoreicarrinhos)
    estacionamento.Botaveiculo(fortnitecarrinhossuperpoderosos)
    estacionamento.Botaveiculo(aguasdorio)
    estacionamento.Botaveiculo(masvoceehacoloniaprofessor)
    estacionamento.Botaveiculo(maseunaotodandoseuexemplo)
    estacionamento.Botaveiculo(purinhasarrara)
    estacionamento.Botaveiculo(carrinhosandadadinhos)
    estacionamento.Botaveiculo(naoqueremosajudar)
    estacionamento.Botaveiculo(tapapandominhakillmano)
    for(let l = 1; l <= 10; l++){
        let dono = estacionamento.achaveiculadouy(l).getdono()
        if(dono === null){
            console.log('Veiculo without dono')
        }
        else{
            console.log(dono.getnome())
        }
    }
    