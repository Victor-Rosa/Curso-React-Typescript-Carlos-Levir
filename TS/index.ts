
// Tipos:
const string: string = "texto";
const booleano: boolean = true;
const numero : number = 100;


const arr: string[] = ["texto1", 'texto2', 'texto3', 'texto4'];
const tupla: [number, string] = [1,'victor'];

enum theme {
    Dark = 'dark',
    Light = 'light',
}

let any: any = 'a';
any = 10; 

let unknown: unknown = 'rato';
unknown = true;

function sum(a: number, b: number): never{
    while(true) {

    }
}

const result = sum(10, 20);

let test = undefined;

let test1 = null;


// any dos objetos
const obj: object = {
    nome:"Victor",
    idade: 21,
    endereço: {
        Estado: "Rio de Janeiro",
        rua: "Alvaro Lacer",
        numero: 47,
        apartamento: 201,
    }

}

// interface = obejtos tipados - mais usados
interface User{
    nome: string;
    adress?: string;
    [key: string]: string;
}

function printaUsuario(user: User) {
    console.log(user.nome);
    console.log(user.idade);
    console.log(user.age);
}


interface ContaPessoaFisica {
    cpf: string;
}


interface ContaPessoaJuridica {
    cnpj: string;
}

// Intersection &
// type alias

type ContaMEI = ContaPessoaFisica & ContaPessoaJuridica;

const novoMei: ContaMEI = {
    cpf: "123",
    cnpj: "124",
}

// Utility Types

interface GithubUserData {
     readonly followers: string;
    following: string;

}


// Partial
function printGithubUserDataPartial (user: Partial<GithubUserData>){
    console.log(user)
}
//Pick
function printGithubUserDataPick (user: Pick<GithubUserData, "followers" | "following">){
    console.log(user.following)
    console.log(user.followers)
}
//Omit
function printGithubUserDataOmit (user: Omit<GithubUserData , "location">){
    console.log(user.following)
    console.log(user.followers)
}

//Readonly
const newGithubUser: GithubUserData = {
    followers: '190',
    following: '190',
    

}

newGithubUser.following = '200'