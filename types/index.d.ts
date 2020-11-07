export interface Datepicker {
  modelValue :[Date, String]
  value :[Date, String]
  format: [String, Function]
  openDate:Date
  minimumView:String
  maximumView: String
  dayCellContent: Function
  fullMonthName: Boolean
  disabledDates: Object
  highlighted: Object
  placeholder:String
  inline:Boolean
  calendarClass: [String, Object]
  inputClass:[String, Object]
  wrapperClass: [String, Object]
  mondayFirst: Boolean
  clearButton: Boolean
  clearButtonIcon: String
  calendarButton:Boolean
  calendarButtonIcon: String
  calendarButtonIconContent: String
  initialView: String
  disabled: Boolean
  required: Boolean
  typeable: Boolean
  useUtc: Boolean
}