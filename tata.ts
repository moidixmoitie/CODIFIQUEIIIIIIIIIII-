class jogador{
  protected nome: string
  protected idade: number
  protected Lista: habilidade[] = []
  adicionar(novapoderzin: habilidade){
      this.Lista.push(novapoderzin)
  }
  imprimehabilidade(){
      let mar: number;
      mar = 0 
      let len = this.Lista.length
      while (mar < len){
          console.log(this.Lista[mar])
          mar++
      }
  }
  public ataque(outroJogador: jogador){}
  constructor(nome:string,idade:number){
    this.nome = nome
    this.idade = idade
  }
  getNome():string{return this.nome};
}

class habilidade{
  protected nomeh: string
  protected spiritpoint: number
  protected dano: number
  constructor(nomeh:string,spiritpoint:number,dano:number){

    this.nomeh = nomeh
    this.spiritpoint = spiritpoint
    this.dano = dano
  }
  getdano():number{
        return this.dano;
  }
  }
class guerreiro extends jogador{
  public ataque(outroJogador: jogador): void {
    console.log (this.nome + ' atacou ' + outroJogador.getNome() + ' e deu... ' + this.Lista[0].getdano())
  }
}
class mago extends jogador{
  public ataque(outroJogador: jogador): void {
    console.log (this.nome + ' atacou ' + outroJogador.getNome() + ' e deu... ' + this.Lista[0].getdano() )
  }
}
class arqueiro extends jogador{
  public ataque(outroJogador: jogador): void {
    console.log (this.nome + ' atacou ' + outroJogador.getNome() + ' e deu... ' + this.Lista[0].getdano() )
  }
}

let ale: arqueiro
ale = new arqueiro('ale',17)
let xan: guerreiro
xan = new guerreiro('xan',88)
let dra: mago
dra = new mago('dra',35)
let ajudou: guerreiro
ajudou = new guerreiro('ajudou',22)
let flereous: habilidade
flereous = new habilidade('fogoso',33,1155)
let leviathan: habilidade
leviathan = new habilidade('e toma RAJADAOOOOOO', 60, 2579)
let lucifer: habilidade
lucifer = new habilidade('ó o GASSSSSSSSSSSSSS *musiquinha*',87, 3458)
let belial: habilidade
belial = new habilidade('TERROSOOOOOOOJAFHKASKFJHASKJFHK',91,4111)
ale.adicionar(flereous)
xan.adicionar(belial)
dra.adicionar(lucifer)
ajudou.adicionar(leviathan)
ale.ataque(xan)
xan.ataque(dra)
dra.ataque(ale)
ajudou.ataque(ale)

