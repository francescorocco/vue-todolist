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
        ],
        
        newTask:'',
      }
    },
    methods:{
      remouveTask(index){
        this.taskList.splice(index, 1);
      },

      pushTask(){
        if(this.newTask.length >= 5){
            let newObject = {
              text: this.newTask,
              done: false,
            } 
          this.taskList.push(newObject);
          this.newTask = '';
        }else{
          alert('Inserisci almeno 5 caratteri');
          this.newTask = '';
        }

      },
      doneUndone(element){
        element.done = !element.done
      }
    }
  }).mount('#app')



