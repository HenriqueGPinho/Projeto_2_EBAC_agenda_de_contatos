let nomeContato = document.getElementById("nome-contato")
let numeroContato = document.getElementById("numero-contato")
let botaoSalvar = document.getElementById("salvar-contato")
let tabela = document.getElementById("tabela-contatos")

botaoSalvar.addEventListener("click", e => {
  e.preventDefault()

  tabela.innerHTML += montarLinhaTabela(nomeContato.value, numeroContato.value)
})

function montarLinhaTabela(nome, contato) {
  return (
    `
      <tr>
        <td>${nome}</td>
        <td>${contato}</td>
      </tr>
    `
  )
}
