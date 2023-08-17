const btnGerardados = document.querySelector('#btnGerardados');
console.log(btnGerardados);

btnGerardados.addEventListener('click', () => {

    document.querySelector('#campo1').textContent = '';
    document.querySelector('#negativos').textContent = '';
    document.querySelector('#sucessores').textContent = '';
    document.querySelector('#pares').textContent = '';
    document.querySelector('#quantidade').textContent = '';
    document.querySelector('#soma').textContent = '';

    const array = Array.from({length: 20}, () => Math.round(Math.random() * 100));

    document.querySelector('#campo1').textContent += ` ${array} `;
    

    for (let i = 0; i < array.length; i++) {
        let negativos = "-" + array[i] + ", ";
        document.querySelector('#negativos').textContent += `${negativos}`;
    }

    for (let i = 0; i < array.length; i++) {
        calcular1(array[i], 1)

        function calcular1(n1, n2) {
            let prox = (array[i] + 1);
            document.querySelector('#sucessores').textContent += `${prox}` + " , ";
        }
    }

    let cont = 0;
    let par = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            par = array[i];
            cont++;
             document.querySelector('#pares').textContent += `${par}` + " , ";
        }   
        document.querySelector('#quantidade').textContent = cont;
          
    }

    let soma = 0;
    for (let i = 0; i < array.length; i++) {
       soma = soma + array[i];
    }
     document.querySelector('#soma').textContent += soma; 
    





    










})
