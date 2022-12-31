



let newTask = document.querySelector("input#item-text");
let res = document.querySelector("div.res");
let task = [];





function NewElement() {
  if (newTask.length == 0){
    window.alert('Desculpa meu parça! n/ Mas o seu texto é invalido!')
  } else {
    task.push(Number(newTask.value));
    let item = document.createElement("p");
    item.txt = `dddd${newTask.value}`;
    res.appendChild(item);
    res.innerHTML = ''
    
  }

}





























// var res = document.querySelector("div.res");




// function adicionar() {
//     if (isNumero(num.value) && !inLista(num.value, valores)) {
//       valores.push(Number(num.value));
//       let item = document.createElement("option");
//       item.text = `Valor  ${num.value} adicionado.`;
//       lista.appendChild(item);
//       res.innerHTML = ''
//     } else {
//       window.alert("Valor inválido ou já encontrado na lista.");
//     }
//     num.value = ''
//     num.focus()
//   }
  



// if (nome.length == 0) {
//     window.alert('Adicione uma tarefa rapaiz')
//   } else {
//     res.innerHTML = `Agora não sei o que fazer com isso [ ${nome} ] `
//   }
  

