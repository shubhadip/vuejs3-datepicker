const disabledDates = {
  dates: [new Date(2020, 11, 16), new Date(2020, 11, 17), new Date(2020, 11, 18)],
}
const highlightDates = {
  to: new Date(2020, 12, 16),
  from: new Date(2020, 11, 17),
}
const initialDate = new Date()

const app = Vue.createApp({
    data() {
      return {
        courseGoalA: 'Finish the course and learn Vue!',
        courseGoalB: 'Master Vue and build amazing apps!',
        vueLink: 'https://vuejs.org/',
        disabledDates: disabledDates,
        initialDate: initialDate,
        highlightDates:highlightDates,
        month: "month"
      };
    },
    methods: {
      selectMonth(payload){
        debugger
      },
      outputGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          return this.courseGoalA;
        } else {
          return this.courseGoalB;
        }
      }
    },
    mounted() {
      document.addEventListener('changed-month', ()=>{
        debugger
      })
    },
  });
  
  app.component('appdate-picker',Datepicker);
  app.mount('#user-goal');