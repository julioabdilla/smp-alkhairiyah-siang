<template>
  <div class="text-sm text-center">
    <div class="flex items-center mb-1">
      <!-- <button @click="goToPreviousMonth">«</button> -->
      <calendar-icon class="w-7 h-auto mr-1.5 mb-1" /><span class="font-semibold text-base xs:text-base md:text-base lg:text-base xl:text-base 2xl:text-lg">{{ monthYear }}</span>
      <!-- <button @click="goToNextMonth">»</button> -->
    </div>
    <table class="w-full table-fixed">
      <tbody>
        <tr class="text-lg sm:text-lg md:text-lg lg:text-xs xl:text-base 2xl:text-xl">
          <td class="w-1/7 pb-1 font-semibold">Mn</td>
          <td class="w-1/7 pb-1 font-semibold">Sn</td>
          <td class="w-1/7 pb-1 font-semibold">Sl</td>
          <td class="w-1/7 pb-1 font-semibold">Rb</td>
          <td class="w-1/7 pb-1 font-semibold">Km</td>
          <td class="w-1/7 pb-1 font-semibold">Jm</td>
          <td class="w-1/7 pb-1 font-semibold">Sb</td>
        </tr>
        <tr v-for="week in calendar" :key="week[0].date.format('YYYY-MM-DD')">
          <td v-for="day in week" :key="day.date.format('YYYY-MM-DD')" class="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">
            <span @mouseover="day.isHoliday ? calendarTooltip[day.date.format('YYYY-MM-DD')] = true : calendarTooltip[day.date.format('YYYY-MM-DD')] = false" @mouseleave="calendarTooltip[day.date.format('YYYY-MM-DD')] = false" :class="{'font-semibold': day.isThisMonth, 'font-normal': !day.isThisMonth, 'text-red-500': day.isHoliday, 'cursor-pointer': true, 'today': day.isToday && !day.isHoliday, 'today-holiday': day.isToday && day.isHoliday }">
              {{ day ? day.date.format('D') : '' }}
            </span>
            <div v-if="calendarTooltip[day.date.format('YYYY-MM-DD')]" class="absolute bg-gray-200 text-red-500 px-3 py-1 rounded-sm -mt-8 ml-4 text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base">
              {{ day.holidayName }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import { CalendarIcon } from '@heroicons/vue/24/solid';

export default {
  components: {
    CalendarIcon,
  },
  data() {
    return {
      currentDate: moment().locale('id'),
      calendarData: [],
      calendarTooltip: {},
    }
  },
  created() {
    // Make a GET request to fetch data
    const prevMonth = this.currentDate.clone().subtract(1, 'month')
    const nextMonth = this.currentDate.clone().add(1, 'month')
    if (!this.calendarData) {
      this.calendarData = []
    }
    axios.get(`https://api-harilibur.vercel.app/api?month=${prevMonth.format('MM')}&year=${prevMonth.format('YYYY')}`)
    .then(response => {
      this.calendarData = [...this.calendarData, ...response.data.filter(data => data.is_national_holiday)]
      this.$forceUpdate()
    })
    axios.get(`https://api-harilibur.vercel.app/api?month=${this.currentDate.format('MM')}&year=${this.currentDate.format('YYYY')}`)
    .then(response => {
      this.calendarData = [...this.calendarData, ...response.data.filter(data => data.is_national_holiday)]
      this.$forceUpdate()
    })
    axios.get(`https://api-harilibur.vercel.app/api?month=${nextMonth.format('MM')}&year=${nextMonth.format('YYYY')}`)
    .then(response => {
      this.calendarData = [...this.calendarData, ...response.data.filter(data => data.is_national_holiday)]
      this.$forceUpdate()
    })
  },
  computed: {
    monthYear() {
      return this.currentDate.format('MMMM YYYY')
    },
    calendar() {
      const start = this.currentDate.clone().startOf('month')
      const end = this.currentDate.clone().endOf('month')
      const days = []

      let currentDay = start.clone().startOf('week')
      while (currentDay.isBefore(end)) {
        const week = []
        for (let i = 0; i < 7; i++) {
          const holiday = this.calendarData.find(data => data.holiday_date === currentDay.format('YYYY-MM-D'))
          const weekObj = {
            date: currentDay.clone(),
            isToday: currentDay.isSame(moment(), 'day'),
            isThisMonth: currentDay.month() === this.currentDate.month(), 
            isHoliday: holiday !== undefined,
            holidayName: holiday ? holiday.holiday_name : ''
          }
          this.calendarTooltip[weekObj.date.format('YYYY-MM-DD')] = false
          week.push(weekObj)
          currentDay.add(1, 'days')
        }
        days.push(week)
      }
      return days
    },
  },
  methods: {
    goToPreviousMonth() {
      this.currentDate = this.currentDate.clone().subtract(1, 'month')
      this.$forceUpdate()
    },
    goToNextMonth() {
      this.currentDate = this.currentDate.clone().add(1, 'month')
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped>
.today {
  color: #ccc;
  background-color: #5a5a5a;
  border-radius: 4px;
  padding: 2px;
}
.today-holiday {
  color: #ccc;
  background-color: #ef4444;
  border-radius: 4px;
  padding: 2px;
}
</style>