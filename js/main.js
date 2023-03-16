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
    },
    methods:{
      remouveTask(index){
        this.taskList.splice(index, 1);
      },
    }
  }).mount('#app')



  // MILESTONE 2
  // Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.