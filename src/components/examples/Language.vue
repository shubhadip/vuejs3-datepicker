<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Language </template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker :localeData="localeData" placeholder="Select Date" @input="dateSelected" :value="defaultValue">
        </appdate-picker>
        <div class="change-btn">
          <button type="button" @click="changeDefaultValue">Change Default Value</button>
        </div>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/DatePickerComponent.vue';
import { ILocale } from '../datepicker/utils/interfaces';

const LocaleData = (): ILocale => {
  const langName = 'Hindi';
  const monthFullName = [
    'जनवरी',
    'फ़रवरी',
    'मार्च',
    'अप्रैल',
    'मई',
    'जून',
    'जुलाई',
    'अगस्त',
    'सितंबर',
    'अक्टूबर',
    'नवंबर',
    'दिसंबर',
  ];
  const shortName = ['जन', 'फ़र', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अगस्त', 'सितं', 'अक्टू', 'नवं', 'दिसं'];
  const days = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
  const daysNames = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
  const rtl = false;
  const ymd = false;
  const yearSuffix = '';
  return {
    months: monthFullName,
    monthsAbbr: shortName,
    days,
    language: langName,
    yearSuffix,
    ymd,
    rtl,
    langName,
    daysNames,
  };
};
export default defineComponent({
  name: 'DefaultValue',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const defaultValue = ref(new Date());
    const template = `<template>
    <appdate-picker
      placeholder="Select Date"
      @input="dateSelected"
      :value="defaultValue"
      language="hi"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
import { ILocale } from '../datepicker/utils/interfaces';
  export default {
    setup(){
      const defaultValue = ref(new Date())
      function dateSelected(payload: Date): void {
        console.log('dateSelected', payload)
      }
      return {
        dateSelected,
        defaultValue
      }
    }
  }
  <script>`;
    /**
     * Change default Value of ref
     */
    function changeDefaultValue(): void {
      defaultValue.value = new Date('2021-10-10');
    }
    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected ', payload);
    }

    return {
      script,
      template,
      defaultValue,
      dateSelected,
      changeDefaultValue,
      localeData: LocaleData(),
    };
  },
});
</script>
