let nomeContato = document.getElementById('nome-contato')
let numeroContato = document.getElementById('numero-contato')
let botaoSalvar = document.getElementById('salvar-contato')
let tabela = document.getElementById('tabela-contatos')

botaoSalvar.addEventListener('click', () => {

  if (nomeContato.value === '' || numeroContato.value === '') {
    alert('Preencha os dois campos do formulário!')
  } else {
    tabela.innerHTML += montarLinhaTabela(nomeContato.value, numeroContato.value)
  
    nomeContato.value = ''
    numeroContato.value = ''
  }
  //TODO: apagar os campos depois de clicar em salvar, mudar o campo de número para texto
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
