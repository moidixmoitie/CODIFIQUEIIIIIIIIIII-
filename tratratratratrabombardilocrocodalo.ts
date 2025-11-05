//Dúvidas no código? Favor perguntar que explico!

class Trabalhador
{
    constructor(
        public nome: string,
        public salario: number = 3000
    )
	{
        this.salario = salario < 3000 ? 3000 : salario; //Operador ternário. Leiam assim: "this.salario recebe 3000 SE salario < 3000; SENÃO, this.salario recebe salario.
    }
    setConcendemosaumento(ca:number){
    if(ca > this.salario){
        this.salario = ca
    }
    else{
        throw Error("Deeuuu errorrr HAJSDHJSDHJSADHJASHDJSh")
    }
}
}

class FuncionarioBancario extends Trabalhador
{
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000
    )
	{
        super(nome, salario);
        
    }
}

class Faxineiro extends FuncionarioBancario
{
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000,
        public turno: string = "manhã" //turno pode ser manhã, tarde ou noite
    )
	{
        
        super(nome, cpf, salario);
        
    }

    public atualizaTurno(novoTurno: string): void 
	{
        if(novoTurno != "manhã" && novoTurno != "tarde" && novoTurno != "noite")
		{
			throw new Error("Turno inválido");
		}
		else
		{
			this.turno = novoTurno;
		}
    }
}

class Caixa extends FuncionarioBancario
{
	//Nada novo, mas herda TUDO
    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 3000
    )
	{
        super(nome, cpf, salario);
    }
}

class gerenterrr extends FuncionarioBancario{
    equipados: FuncionarioBancario[] = []
    blofblepsad(iquipi:FuncionarioBancario){
        this.equipados.push(iquipi)
    }

    constructor(
        public nome: string,
        public cpf: string,
        public salario: number = 6666
        
    )
	{
    super(nome, cpf, salario )
}
setConcendemosaumento(ca:number){
    if(ca > this.salario){
        this.salario = ca
    }
    else{
        throw Error("Deeuuu errorrr HAJSDHJSDHJSADHJASHDJSh")
    }
}
setAlteremesturnos(Faxineiro:Faxineiro, nturno: string){
    Faxineiro.atualizaTurno(nturno)
}}
let parmesaoGlorioso: gerenterrr
parmesaoGlorioso = new gerenterrr("parmesao", "777.777.777-67",2)
let marcelonei: Faxineiro
marcelonei = new Faxineiro("marci lonei","455.321.951-69",482670, "noite")
let baixinhacaicxinha: Caixa
baixinhacaicxinha = new Caixa("Cixas Bixas", "557.881.459=22",3999)
let chirinhihimpazini: Faxineiro
chirinhihimpazini = new Faxineiro("Mircis Linda", "923.765.900-64", 8976, "tarde")
let morninhasanoite: Caixa
morninhasanoite = new Caixa("a noite a gente naoooo NAOO faxinha", "001.032.000-00", 207727)
let mintiscasd: Faxineiro
mintiscasd = new Faxineiro("As meia noite eu chro","312.485.809-11",23409889, "manhã")
let j: Faxineiro
j = new Faxineiro("Julia não ajuda mais","312.485.809-01",8876390, "manhã")
let tropicanagrande: Faxineiro
tropicanagrande = new Faxineiro("ja ta dando meia noite hien eu vou pro discord","312.485.809-33",90764673, "manhã")
parmesaoGlorioso.blofblepsad(marcelonei)
parmesaoGlorioso.blofblepsad(baixinhacaicxinha)
parmesaoGlorioso.blofblepsad(chirinhihimpazini)
parmesaoGlorioso.blofblepsad(morninhasanoite)
parmesaoGlorioso.blofblepsad(mintiscasd)
parmesaoGlorioso.blofblepsad(j)
parmesaoGlorioso.blofblepsad(tropicanagrande)
baixinhacaicxinha.setConcendemosaumento(8647659380)
tropicanagrande.setConcendemosaumento(147836137569037)
j.setConcendemosaumento(456871263486589000)
tropicanagrande.atualizaTurno("noite")
for(let funcionario of parmesaoGlorioso.equipados)
{
    console.log("O " + funcionario.nome +" de cpf "+ funcionario.cpf +" recebe o salario de "+ funcionario.salario + " reais")
}
