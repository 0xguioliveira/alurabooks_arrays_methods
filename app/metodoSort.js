let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    // Para retornar uma ordenação do menor para o maior elemento com o método sort, é necessário a implementação de uma função nesse método:
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibibirLivrosNaTela(livrosOrdenados)
}