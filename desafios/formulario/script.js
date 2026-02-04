document.querySelector('#formulario').addEventListener('submit', (evento)=>{
    
    evento.preventDefault()
     
    
    let nomes = document.querySelector('#nomes').value;
    let errNome = document.querySelector('#errNome')
    let envio = true

    errNome.innerHTML = ''


    if(nomes.length < 3){
        envio = false
        errNome.innerHTML = 'O nome deve conter mais de 3 letras'
        console.log(nomes.length)
    }
    
    if(envio){
        alert('Dados enviados com sucesso!')
    }
})