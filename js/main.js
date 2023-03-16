const { createApp } = Vue

  createApp({
    data() {
      return {
        taskList:[
          {
            text: 'Task 1',
            done: false,
          },
          {
            text: 'Task 2',
            done: true,
          },          
          {
            text: 'Task 3',
            done: false,
          },          
          {
            text: 'Task 4',
            done: false,
          },
        ]
      }
    }
  }).mount('#app')





//  - text, una stringa che indica il testo del todo
//  - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.