const form = document.getElementById('form-agenda')
const nomes = [];
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas(){
    const inputNomeContato = document.getElementById('nome');
    const inputNumeroContato = document.getElementById('contato');

    if(contatos.includes(parseInt(inputNumeroContato.value))){
        alert(`O contato: ${inputNumeroContato.value} já foi cadastrado.`);
    }
    else{
        nomes.push(inputNomeContato.value);
        contatos.push(parseInt(inputNumeroContato.value));
        
        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}