<template>
  <div class="page-wrapper">
    <div class="app-sidebar">
      <h1>Vue 3 Datepicker</h1>
      <ul>
        <li><a href="#typeable">Typeable</a></li>
        <li><a href="#disabled">Disabled</a></li>
        <li><a href="#defaultValue">Default Value</a></li>
        <li><a href="#Vmodel">V Model</a></li>
        <li><a href="#programmaticaccess">ProgrammaticAccess</a></li>
        <li><a href="#dayview">Day View</a></li>
        <li><a href="#hview">Highlighted View</a></li>
        <li><a href="#month-view">Month View</a></li>
        <li><a href="#year-view">Year View</a></li>
        <li><a href="#calendar-icon">Calendar Icon</a></li>
        <li><a href="#inline-view">Inline View</a></li>
      </ul>
    </div>
    <div class="app-wrapper">
      <div class="page-head">
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
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-sidebar h1 {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 25px;
  margin: 0px;
}
.page-head a {
  display: inline-block;
  margin-right: 10px;
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
  padding: 30px;
}
.wrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
}
.app-sidebar {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 280px;
  height: 100%;
  background-color: #2f9668;
}
.app-sidebar ul {
  margin: 0px;
  padding: 0px;
  position: relative;
  top: 20px;
  padding: 40px;
  list-style: none;
}
.app-sidebar ul li {
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #228257;
  padding: 10px;
  border-radius: 2px;
}
.app-wrapper {
  width: calc(100% - 280px);
  position: relative;
  left: 280px;
  flex: 1;
}
a {
  color: white;
  text-decoration: none;
}
</style>
