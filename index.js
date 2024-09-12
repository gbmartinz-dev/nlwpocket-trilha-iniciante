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
    address: 2,
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "Não é mais um ler um livro"
meta.log(meta.value);

// function // Arrow function
let criarMeta = () => {}

// function criarMeta() {}