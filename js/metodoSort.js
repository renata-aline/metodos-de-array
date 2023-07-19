
let btnOrdenarPorpreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorpreco.addEventListener('click',ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados);
}