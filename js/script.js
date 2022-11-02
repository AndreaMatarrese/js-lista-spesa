// metodo for


const eleCart=[];
const form = document.querySelector('#form1')

console.log('form' + form)

form.addEventListener('submit', function (event){
    event.preventDefault();
    const eleInput = document.querySelector('#obtain')
    const eleList = document.querySelector('.list')
    const btn = document.querySelector('#accept')
    eleList.innerHTML = ''
    console.log('prova'+ eleInput.value);


    if(eleInput.value != ''){
        console.log(eleInput.value);
        eleCart.push(eleInput.value);

        let i=0
        while(i<eleCart.length){
            eleList.innerHTML += `<li>${eleCart[i]}</li>`;
            eleInput.value = '';
            i++;
        }
    } else{
        eleList.innerHTML += ('La tua lista è:'+ '' + eleCart);
        btn.disabled = true
    }


});