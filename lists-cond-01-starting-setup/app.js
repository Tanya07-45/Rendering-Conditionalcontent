const app = Vue.createApp({
  data() {
    
    return { 
      enteredGoalValue:'',
      goals: []
     };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx){
this.goals.splice(idx,1);//remove the goal at this index
    }
  }
});

app.mount('#user-goals');
