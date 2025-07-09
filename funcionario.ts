class funcionario{
    private Nome: string;
    private Salario: number;
    constructor(nome:string, salario:number){
        if(salario > 3000 && salario < 20000){
            this.Salario = salario;
        }
        else{
            console.log("Salário Inválido")
        }
    }

}