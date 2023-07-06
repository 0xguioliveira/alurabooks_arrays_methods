let livros = []
const endpointDaAPi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()

async function getBuscarLivrosDaApi(){
    const response = await fetch(endpointDaAPi)
    livros = await response.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibibirLivrosNaTela(livrosComDesconto);
}

