let tabuada = document.querySelector("#multiplicar");
tabuada.addEventListener("click", tabuadas);


function tabuadas(){
    let n1 = document.querySelector("#num1")
    let tab = Number(n1.value);

    if (tab > 10) {
        resultado.innerText = "Não é possível fazer esta tabuada!";
        return;
    }

    let total1 = tab * 1;
    let total2 = tab * 2;
    let total3 = tab * 3;
    let total4 = tab * 4;
    let total5 = tab * 5;
    let total6 = tab * 6;
    let total7 = tab * 7;
    let total8 = tab * 8;
    let total9 = tab * 9;
    let total10 = tab * 10;
    resultado.innerText = `A sua tabuada de ${tab} é:
    ${tab} x 1 = ${total1}
     ${tab} x 2 = ${total2}
      ${tab} x 3 = ${total3}
       ${tab} x 4 = ${total4}
        ${tab} x 5 = ${total5}
         ${tab} x 6 = ${total6}
          ${tab} x 7 = ${total7}
           ${tab} x 8 = ${total8}
            ${tab} x 9 = ${total9}
             ${tab} x 10 = ${total10}`;
}   