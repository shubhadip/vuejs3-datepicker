# Vue 3 Datepicker

A datepicker Vue component. Compatible with Vue 3 Only

- [Install](#install)
- [Usage](#usage)
- [Date Formatting](#date-formatting)
- [Props](#available-props)
- [Events](#events)
- [Disabled dates](#disabled-dates)
- [Highlighted dates](#highlighted-dates)

To view demo examples locally clone the repo and run `npm install && npm run serve`

## Install

``` bash
npm install vuejs3-datepicker --save

yarn add vuejs3-datepicker
```

``` javascript
import Datepicker from 'vuejs3-datepicker';

export default {
  // ...
  components: {
    Datepicker
  }
  // ...
}
```

## Usage

``` html
<datepicker></datepicker>
```

*value* prop if passed should be a Date object

``` html
<script>
var state = {
  date: new Date(2016, 9,  16)
}
</script>
<datepicker :value="state.date"></datepicker>
```
support name attribute for normal html form submission
``` html
<datepicker :value="state.date" name="uniquename"></datepicker>
```
Using `v-model`
``` html
<datepicker v-model="state.date" name="uniquename"></datepicker>
```
Emits events
``` html
<datepicker @selected="parentfunctionSelectedhandler" @opened="datepickerOpenedFunction" @closed="parentfunctionCloseHandler">
```
Inline always open version
``` html
<datepicker :inline="true"></datepicker>
```
Programtic Acess of value of datepicker
```html
<datepicker ref="inputRef" :autoValidate="true" @selected="handleSelectDate" :disabled-dates="disabledDates" :highlighted="highlightDates" :value="emptyDate" @closed="handleCalendarClose" :validations="validations" ></datepicker>
```
```javascript
const isValid = (inputRef.value as any).isValid();
const { selectedDate } = (inputRef.value  as any).value; 
```

## Available props

| Prop                          | Type            | Default     | Description                              |
|-------------------------------|-----------------|-------------|------------------------------------------|
| modelValue                    | Date\|String    |             | Date value of the datepicker             |
| value                         | Date\|String    |             | Date value of the datepicker             |
| format                        | String\|Function| dd MMM yyyy | Date formatting string or function       |
| full-month-name               | Boolean         | false       | To show the full month name              |
| disabled-dates                | Object          |             | See below for configuration              |
| placeholder                   | String          |             | Input placeholder text                   |
| inline                        | Boolean         |             | To show the datepicker always open       |
| calendar-class                | String\|Object  |             | CSS class applied to the calendar el     |
| input-class                   | String\|Object  |             | CSS class applied to the input el        |
| wrapper-class                 | String\|Object  |             | CSS class applied to the outer div       |
| monday-first                  | Boolean         | false       | To start the week on Monday              |
| clear-button                  | Boolean         | false       | Show an icon for clearing the date       |
| clear-button-icon             | String          |             | Use icon for button (ex: fa fa-times)    |
| calendar-button               | Boolean         | false       | Show an icon that that can be clicked    |
| calendar-button-icon          | String          |             | Use icon for button (ex: fa fa-calendar) |
| calendar-button-icon-content  | String          |             | Use for material-icons (ex: event)       |
| day-cell-content              | Function        |             | Use to render custom content in day cell |
| initial-view                  | String          | minimumView | If set, open on that view                |
| disabled                      | Boolean         | false       | If true, disable Datepicker on screen    |
| required                      | Boolean         | false       | Sets html required attribute on input    |
| typeable                      | Boolean         | false       | If true, allow the user to type the date |
| use-utc                       | Boolean         | false       | use UTC for time calculations            |
| open-date                     | Date\|String    |             | If set, open on that date                |
| minimum-view                  | String          | 'day'       | If set, lower-level views won't show     |
| maximum-view                  | String          | 'year'      | If set, higher-level views won't show    |
| autovalidate                  | Boolean         | false       | Basic Date Validtion on Blur             |
| validations                   | Array           |             | Accepts an Array of Objects [{'name':'required', message: 'custom Message'}]|


## Events

These events are emitted on actions in the datepicker

| Event             | Output     | Description                          |
|-------------------|------------|--------------------------------------|
| opened            |            | The picker is opened                 |
| closed            |            | The picker is closed                 |
| selected          | Date\|null | A date has been selected             |
| input             | Date\|null | Input value has been modified        |
| cleared           |            | Selected date has been cleared       |
| changed-month     | Object     | Month page has been changed          |
| changed-year      | Object     | Year page has been changed           |
| changed-decade    | Object     | Decade page has been changed         |

## Disabled Dates
Dates can be disabled in a number of ways.

``` html
<script>
var state = {
  disabledDates: {
    to: new Date(2016, 0, 5), // Disable all dates up to specific date
    from: new Date(2016, 0, 26), // Disable all dates after specific date
    
    dates: [ // Disable an array of dates
      new Date(2016, 9, 16),
      new Date(2016, 9, 17),
      new Date(2016, 9, 18)
    ]
  }
}
</script>
<datepicker :disabled-dates="state.disabledDates"></datepicker>
```

## Highlighted Dates
``` html
<script>
var state = {
  highlighted: {
    to: new Date(2016, 0, 5), // Highlight all dates up to specific date
    from: new Date(2016, 0, 26), // Highlight all dates after specific date
    dates: [ // Highlight an array of dates
      new Date(2016, 9, 16),
      new Date(2016, 9, 17),
      new Date(2016, 9, 18)
    ]
    },
    includeDisabled: true // Highlight disabled dates
  }
}
</script>
<datepicker :highlighted="state.highlighted"></datepicker>
```