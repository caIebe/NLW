//procurar o botao
document.querySelector("#add-time")
.addEventListener('click',cloneField)

//quando clicar no botao

//executar uma acao
function cloneField(){

   //duplicando os campos e colocalos na pag
   //achando o campo
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar dados
    const fields = newFieldContainer.querySelectorAll('input')

    //for
    fields.forEach(function(field){
        field.value = ""
    })


    //colocando na pag
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

