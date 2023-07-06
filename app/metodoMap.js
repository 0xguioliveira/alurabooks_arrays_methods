function aplicarDesconto (livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        // "..." faz uma cópia de todo o array livros, e então modificamos apenas o preço.
    })
    return livrosComDesconto
}