import Datepicker from '@/components/datepicker/DatePickerComponent.vue';
import DateInput from '@/components/datepicker/DateInput.vue';
import { mount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('Datepicker unmounted', () => {
  let wrapper;
  beforeEach(()=>{
    en = Langlist.data['en'];
     wrapper = mount(Datepicker);
  })

  it('has a mounted hook', () => {

    expect(wrapper.find('input')).toBeTruthy()
  })

  it('sets the correct default data', () => {
    expect(wrapper.vm.selectedDate).toEqual(null)
    expect(wrapper.vm.showDayView).toEqual(false)
    expect(wrapper.vm.showMonthView).toEqual(false)
    expect(wrapper.vm.showYearView).toEqual(false)
    expect(wrapper.vm.calendarHeight).toEqual(0)
  })
})

describe('Datepicker mounted', () => {
    beforeEach(()=>{
      en = Langlist.data['en'];
    })

  let wrapper
  let date
  beforeEach(async () => {
    date = new Date(2016, 1, 15)
    wrapper = await mount(Datepicker, {
      props: {
        format: 'yyyy-MM-dd',
        value: date
      }
    })
  })

  it('correctly sets the value when created', () => {
    expect(wrapper.vm.value).toEqual(date)
  })

  it('correctly sets the value from method', () => {
    const newDate = new Date(2016, 9, 15)
    // expect(typeof wrapper.vm.setValue).toEqual('function')
    wrapper.vm.setValue(newDate)
    expect(wrapper.vm.selectedDate).toEqual(newDate)
    const now = new Date()
    wrapper.vm.setValue()
    expect(wrapper.vm.selectedDate).toEqual(null)
    const pageDate = new Date(wrapper.vm.pageDate)
    expect(pageDate.getFullYear()).toEqual(now.getFullYear())
    expect(pageDate.getMonth()).toEqual(now.getMonth())
    expect(pageDate.getDate()).toEqual(1)
  })

  it('sets the date', async () => {
    const date = new Date(2016, 9, 9)
    const wrapper = mount(Datepicker, {
      props: {
        format: 'yyyy-MM-dd'
      }
    })
    wrapper.vm.setDate1(date.getTime())
    expect(wrapper.vm.selectedDate.getTime()).toEqual(date.getTime())
  })

  it('clears the date', async () => {
    const date = new Date(2016, 9, 9)
    const wrapper = await mount(Datepicker)
    wrapper.vm.setDate1(date.getTime())
    wrapper.vm.clearDate()
    expect(wrapper.vm.selectedDate).toEqual(null)
  })

  it('should open and close the calendar', () => {
    wrapper.vm.close()
    expect(wrapper.vm.isOpen).toEqual(false)

    wrapper.vm.showMonthCalendar()
    expect(wrapper.vm.isOpen).toEqual(true)

    wrapper.vm.close()
    expect(wrapper.vm.isOpen).toEqual(false)

    wrapper.vm.showYearCalendar()
    expect(wrapper.vm.isOpen).toEqual(true)

    wrapper.vm.close()
    expect(wrapper.vm.isOpen).toEqual(false)

    wrapper.vm.showDayCalendar()
    expect(wrapper.vm.isOpen).toEqual(true)
    // calendar is already open so acts as a toggle
    wrapper.vm.showCalendar()
    expect(wrapper.vm.isOpen).toEqual(false)
  })

  it('should emit selectedDisabled on a disabled timestamp', () => {
    const date = new Date(2016, 9, 1)
    wrapper.vm.selectDisabledDate({timestamp: date.getTime()})
    expect(wrapper.emitted()['selected-disabled']).toBeTruthy()
  })

  it('can select a day', () => {
    const date = new Date(2016, 9, 1)
    wrapper.vm.selectDate({timestamp: date.getTime()})
    expect(wrapper.vm.pageTimestamp).toEqual(date.getTime())
    expect(wrapper.vm.selectedDate.getMonth()).toEqual(9)
    expect(wrapper.vm.showDayView).toEqual(false)
    expect(wrapper.emitted()['selected']).toBeTruthy()
  })

  it('can select a month', () => {
    const date = new Date(2016, 9, 9)
    wrapper.vm.selectMonth({timestamp: date.getTime()})
    expect(wrapper.emitted()['changed-month']).toBeTruthy()
    expect(wrapper.emitted()['changed-month'][0][0].timestamp).toEqual(date.getTime())
    expect(new Date(wrapper.vm.pageTimestamp).getMonth()).toEqual(date.getMonth())
    expect(wrapper.vm.showDayView).toEqual(true)
  })

  it('can select a year', () => {
    const date = new Date(2018, 9, 9)
    wrapper.vm.selectYear({timestamp: date.getTime()})
    expect(wrapper.emitted()['changed-year']).toBeTruthy()
    expect(wrapper.emitted()['changed-year'][0][0].timestamp).toEqual(date.getTime())
    expect(new Date(wrapper.vm.pageTimestamp).getFullYear()).toEqual(date.getFullYear())
    expect(wrapper.vm.showMonthView).toEqual(true)
  })

  it('resets the default page date', async () => {
    const wrapper = await mount(Datepicker)
    const today = new Date()
    expect(wrapper.vm.pageDate.getFullYear()).toEqual(today.getFullYear())
    expect(wrapper.vm.pageDate.getMonth()).toEqual(today.getMonth())
    expect(wrapper.vm.pageDate.getDate()).toEqual(1)
  })

  // it('does not set the default page date if a date is selected', async () => {
  //   const wrapper = await mount(Datepicker)
  //   const today = new Date()
  //   const pastDate = new Date(2018, 3, 20)
  //   expect(wrapper.vm.pageDate.getFullYear()).toEqual(today.getFullYear())
  //   expect(wrapper.vm.pageDate.getMonth()).toEqual(today.getMonth())
  //   expect(wrapper.vm.pageDate.getDate()).toEqual(1)
  //   wrapper.vm.setDate(pastDate.getTime())
  // })

  it('sets the date on typedDate event', async () => {
    const wrapper = await mount(Datepicker)
    const today = new Date()
    wrapper.vm.setTypedDate(today)
    expect(wrapper.vm.selectedDate).toEqual(today)
  })

  // it('watches value', async (done) => {
  //   const wrapper = await mount(Datepicker, {
  //     props: {
  //       value: new Date('2018-01-01')
  //     }
  //   })
  //   const spy = jest.spyOn(wrapper.vm, 'setValue')
  //   wrapper.vm.value = new Date('2018-04-26')
  //   wrapper.vm.$nextTick(() => {
  //     expect(spy).toBeCalled()
  //     done()
  //   })
  // })

  // it('watches openDate', async (done) => {
  //   const wrapper = await mount(Datepicker, {
  //     props: {
  //       openDate: new Date(2018, 0, 1)
  //     }
  //   })
  //   console.log(wrapper.vm);
  //   const spy = jest.spyOn(wrapper.vm, 'setPageDate')
  //   wrapper.vm.openDate = new Date(2018, 3, 26)
  //   wrapper.vm.$nextTick(() => {
  //     expect(spy).toBeCalled()
  //     done()
  //   })
  // })

  // it('watches initialView', async (done) => {
  //   const wrapper = await mount(Datepicker, {
  //     propsData: {
  //       initialView: 'day'
  //     }
  //   })
  //   const spy = jest.spyOn(wrapper.vm, 'setInitialView')
  //   wrapper.vm.initialView = 'month'
  //   wrapper.vm.$nextTick(() => {
  //     expect(spy).toBeCalled()
  //     done()
  //   })
  // })

  // it('should emit changedMonth on a month change received from PickerDay', () => {
  //   const date = new Date(2016, 9, 1)
  //   wrapper.vm.handleChangedMonthFromDayPicker({timestamp: date.getTime()})
  //   expect(wrapper.emitted()['changed-month']).toBeTruthy()
  // })
})

describe('Datepicker.vue set by string', () => {
  let wrapper
  it('can parse a string date', async () => {
    wrapper = await mount(Datepicker, {
      props: {
        format: 'yyyy MM dd',
        value: '2016-02-20'
      }
    })
    const date = new Date('2016-02-20')
    expect(wrapper.vm.selectedDate.getFullYear()).toEqual(date.getFullYear())
    expect(wrapper.vm.selectedDate.getMonth()).toEqual(date.getMonth())
    expect(wrapper.vm.selectedDate.getDate()).toEqual(date.getDate())
  })

  it('should nullify malformed value', async () => {
    wrapper = await mount(Datepicker, {
      props: {
        value: 'today'
      }
    })
    expect(wrapper.vm.selectedDate).toBeNull()
  })
})


describe('Datepicker.vue using UTC', () => {
  let wrapper
  it('correctly sets the value using UTC', async (done) => {
    const timezoneOffset = ((new Date()).getTimezoneOffset() / 60)

    // this is ambiguous because localzone differs by one day than UTC
    const ambiguousHour = 25 - timezoneOffset
    const ambiguousDate = new Date(2018, 3, 15, ambiguousHour)
    const ambiguousYear = ambiguousDate.getUTCFullYear()
    const ambiguousMonth = (`0${ambiguousDate.getUTCMonth() + 1}`).slice(-2)
    const ambiguousDay = (`0${ambiguousDate.getUTCDate()}`).slice(-2)
    const UTCString = `${ambiguousYear} ${ambiguousMonth} ${ambiguousDay}`

    // It's important to use the `mount` helper here
    wrapper = await mount(Datepicker, {
      props: {
        format: 'yyyy MM dd',
        value: ambiguousDate,
        useUtc: true // This should fail if `useUtc=false`
      }
    })
    // It's important to assert the input rendered output
    await wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(DateInput).vm.formattedValue).toEqual(UTCString)
      done()
    })
  })
})

describe('Datepicker with initial-view', () => {
  let wrapper
  it('should open in Day view', async () => {
    wrapper = await mount(Datepicker)
    wrapper.vm.showCalendar()
    expect(wrapper.vm.computedInitialView).toEqual('day')
    expect(wrapper.vm.showDayView).toEqual(true)
    expect(wrapper.vm.showMonthView).toEqual(false)
    expect(wrapper.vm.showYearView).toEqual(false)
  })

  it('should open in Month view', async () => {
    wrapper = await mount(Datepicker, {
      props: {
        initialView: 'month'
      }
    })
    wrapper.vm.showCalendar()
    expect(wrapper.vm.computedInitialView).toEqual('month')
    expect(wrapper.vm.showDayView).toEqual(false)
    expect(wrapper.vm.showMonthView).toEqual(true)
    expect(wrapper.vm.showYearView).toEqual(false)
  })

  it('should open in Year view', async () => {
    wrapper = await mount(Datepicker, {
      props: {
        initialView: 'year'
      }
    })
    wrapper.vm.showCalendar()
    expect(wrapper.vm.computedInitialView).toEqual('year')
    expect(wrapper.vm.showDayView).toEqual(false)
    expect(wrapper.vm.showMonthView).toEqual(false)
    expect(wrapper.vm.showYearView).toEqual(true)
  })
})
