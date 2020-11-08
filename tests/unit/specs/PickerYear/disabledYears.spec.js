import PickerYear from '@/components/datepicker/PickerYear.vue';
import { mount, shallowMount } from '@vue/test-utils'
import * as Langlist from '@/components/datepicker/locale';

let en;

describe('PickerYear', () => {

  beforeEach(()=>{
    en = Langlist.data['en'];
  })

  let wrapper

  beforeEach(() => {
    wrapper = mount(PickerYear, {
      shallow: true,
      propsData: {
        allowedToShowView: () => true,
        translation: en,
        pageDate: new Date(2018, 3, 1),
        selectedDate: new Date(2018, 3, 19),
        disabledDates: {
          to: new Date(2018, 2, 14),
          from: new Date(2018, 4, 15)
        }
      }
    })
  })

  it('cant select a disabled year', async () => {
    await wrapper.find('.cell').trigger('click')
    expect(wrapper.emitted()['select-year']).toBeFalsy()
  })

  it('cant navigate to a disabled year', () => {
    expect(wrapper.vm.previousDecade()).toBeFalsy()
    expect(wrapper.vm.nextDecade()).toBeFalsy()
  })

  it('can\'t change decade when previous or next decades are disabled', () => {
    const shallowWrapper = shallowMount(PickerYear, {
      props: {
        allowedToShowView: () => true,
        translation: en,
        pageDate: new Date(2018, 3, 1),
        selectedDate: new Date(2018, 3, 19),
        disabledDates: {
          to: new Date(2018, 2, 14),
          from: new Date(2018, 4, 15)
        }
      }
    })
    expect(shallowWrapper.vm.isPreviousDecadeDisabled()).toBeTruthy()
    expect(shallowWrapper.vm.isNextDecadeDisabled()).toBeTruthy()
  })

  it('can change decade despite having a disabled decade', async () => {
    wrapper.setProps({
      pageDate: new Date(2016, 9, 15),
      disabledDates: {
        to: new Date(2010, 11, 19),
        from: new Date(2021, 11, 19)
      }
    })
    await expect(wrapper.vm.isPreviousDecadeDisabled()).toEqual(true)
    await expect(wrapper.vm.isNextDecadeDisabled()).toEqual(false)
  })

  it('can accept a customPredictor to check if the year is disabled',  () => {
    const shallowWrapper = shallowMount(PickerYear, {
      props: {
        allowedToShowView: () => true,
        translation: en,
        pageDate: new Date(2018, 3, 1),
        selectedDate: new Date(2018, 3, 19),
        disabledDates: {
          customPredictor (date) {
            return (date.getFullYear() % 3) === 0
          }
        }
      }
    })
     expect(shallowWrapper.vm.isDisabledYear(new Date(2018, 4, 29))).toEqual(false)
     expect(shallowWrapper.vm.isDisabledYear(new Date(2019, 9, 28))).toEqual(true)
     expect(shallowWrapper.vm.isDisabledYear(new Date(2020, 8, 24))).toEqual(false)
     expect(shallowWrapper.vm.isDisabledYear(new Date(2021, 2, 11))).toEqual(false)
     expect(shallowWrapper.vm.isDisabledYear(new Date(2022, 2, 11))).toEqual(true)
  })

  it('does not disable the next decade button when disabled from date is in the first year of the next decade', () => {
    wrapper.setProps({
      pageDate: new Date(1998, 9, 15),
      disabledDates: {
        from: new Date(2000, 0, 1)
      }
    })
     expect(wrapper.vm.isNextDecadeDisabled()).toEqual(true)
  })

  it('does disable the next decade button when disabled from date is the last day year of the current decade',  () => {
    const shallowWrapper =  shallowMount(PickerYear, {
          props: {
            allowedToShowView: () => true,
            translation: en,
            pageDate: new Date(2029, 3, 1),
            selectedDate: new Date(2029, 3, 19),
            disabledDates: {
              from: new Date(2029, 12, 31)
            }
          }
        })
    expect(shallowWrapper.vm.isNextDecadeDisabled()).toEqual(true)
  })
})
