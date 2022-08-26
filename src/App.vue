<template>
  <div class="page-wrapper">
    <div class="page-head md-hidden">
      <a href="https://github.com/shubhadip/vuejs3-datepicker">
        <img src="./assets/github.svg" alt="vuejs3-datepicker" />
      </a>
      <span
        class="hamburger-icon md-hidden"
        :class="{ active: isHamburgerOpen }"
        @click="isHamburgerOpen = !isHamburgerOpen"
      >
        <hr />
      </span>
    </div>
    <div class="app-sidebar" :class="`${isHamburgerOpen ? '' : 'sm-hidden'}`">
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
        <li><a href="#slot-view">Custom Slots</a></li>
        <li><a href="#string-view">Date as String</a></li>
        <li><a href="#inline-view">Inline View</a></li>
        <li><a href="#language-view">Language View</a></li>
      </ul>
    </div>
    <div class="app-wrapper">
      <div class="page-head sm-hidden">
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
        <div class="ind" id="slot-view">
          <SlotView />
        </div>
        <div class="ind" id="string-view">
          <StringView />
        </div>
        <div class="ind" id="inline-view">
          <InlineView />
        </div>
        <div class="ind" id="language-view">
          <Language />
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
import SlotView from './components/examples/Slotview.vue';
import StringView from './components/examples/StringView.vue';
import Language from './components/examples/Language.vue';

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
    SlotView,
    StringView,
    Language,
  },
  data: () => ({
    isHamburgerOpen: false,
  }),
});
</script>
<style lang="postcss">
@import '@css/app.css';
</style>
