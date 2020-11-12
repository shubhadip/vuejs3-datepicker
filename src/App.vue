<template>
  <div class="page-head">
    <h1>Vue 3 Datepicker</h1>
    <a href="https://github.com/shubhadip/vuejs3-datepicker">
      <img src="./assets/github.svg" alt="vuejs3-datepicker" />
    </a>
  </div>
  <div class="wrapper">
    <div class="ind" id="typeable">
      <Typeable />
    </div>
    <div class="ind" id="disabled">
      <Disabled />
    </div>
    <div class="ind" id="defaultValue">
      <DefaultValue />
    </div>
    <div class="ind" id="Vmodel">
      <VModel />
    </div>
    <div class="ind" id="programmaticaccess">
      <ProgrammaticAccess />
    </div>
    <div class="ind" id="dayview">
      <DayView />
    </div>
    <div class="ind" id="hview">
      <HighlightedView />
    </div>
    <div class="ind" id="month-view">
      <MonthView />
    </div>
    <div class="ind" id="year-view">
      <YearView />
    </div>
    <div class="ind" id="calendar-icon">
      <CalendarIcon />
    </div>
    <div class="ind" id="inline-view">
      <InlineView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Typeable from './components/examples/Typeable.vue';
import Disabled from './components/examples/Disabled.vue';
import DefaultValue from './components/examples/DefaultValue.vue';
import InlineView from './components/examples/InlineView.vue';
import CalendarIcon from './components/examples/CalendarIcon.vue';
import YearView from './components/examples/YearView.vue';
import MonthView from './components/examples/MonthView.vue';
import DayView from './components/examples/DayView.vue';
import HighlightedView from './components/examples/HighlightedView.vue';
import VModel from './components/examples/VModel.vue';
import ProgrammaticAccess from './components/examples/ProgrammaticAccess.vue';

export default defineComponent({
  name: 'App-Home',
  components: {
    Typeable,
    Disabled,
    DefaultValue,
    InlineView,
    CalendarIcon,
    YearView,
    MonthView,
    DayView,
    HighlightedView,
    VModel,
    ProgrammaticAccess,
  },
});
</script>
<style scoped lang="postcss">
@import '@css/_settings.css';

.page-head {
  background-color: #2f9668;
  text-align: center;
  margin-bottom: 30px;
}
.page-head h1 {
  color: #fff;
  font-size: 25px;
  padding: 20px;
  margin: 0px;
}

input {
  outline: none;
}

label {
  text-align: left;
  margin: 10px 0px;
  display: block;
  font-size: 24px;
}
.ind {
  width: 100%;
  padding: 20px;
}
.wrapper {
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
