const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros));


function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        exibirValorTotalDeLivrosNaTela();
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDeLivrosNaTela(){
    elementoComValorTotalDeLivrosDisponivel.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>

    `
}