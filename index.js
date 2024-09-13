const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:" })

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia.')
        return
    }
    
    metas.push(
        { value: meta, checked: false }
    )
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    })

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada!")
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) concluída(s)')
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        console.log("Não existe metas realizadas! :(")
        return 
    }

    await select({
        message: "Metas realizadas" + realizadas.length,
        choices: [...realizadas]
    })
}

// Essa constante ela filtra para ver se está marcada a opção ou não 
const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    // Aqui é a verificação se há metas abertas ou não
    if(abertas.length == 0){
        console.log("Não existem metas abertas! :)")
        return
    }

    // Essa parte é onde espera a seleção que a pessoa vai selecionar a opção desejada e irá retornar a mensagem, se foi adicionado uma meta ou não.
    await select({
        message: "Metas Abertas" + abertas.length,
        choices: [...abertas]
    })
}

// Aqui damos o start da aplicação onde fazemos a criação do menu para selecionar as opções.
const start = async () => {

    while(true){
        // Criamos aqui a const de seleção de opções que aparecerá no menu.
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Metas abertas",
                    value: "abertas"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        // Aqui foi feito a seleção de opção onde mostra toda a parte se caso a pessoa quer cadastrar uma meta, listar e etc...
        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                console.log("vamos listar")
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()