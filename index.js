// hello world
let mensagem = "olá, mundo!"
mensagem = 2;
console.log(mensagem);

// arrays, objetos
let metas = ["Gabriel", "alô"];
console.log(metas[1] + " " + metas[0]);


// objetos
let meta = {
    value: 'ler um livro por mês',
    checked: true,
}

// Exemplo

let metasAgendadas = [
    meta,
    {
        value: "caminhar 30 minutos todos os dias",
        checked: false
    }
]

console.log(metasAgendadas[1].value)

meta.value = "Não é mais um ler um livro"
meta.log(meta.value);

// function // Arrow function
let criarMeta = () => {}

// function criarMeta() {}