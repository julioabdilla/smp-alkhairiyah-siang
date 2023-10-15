<template>
  <div class="p-4 text-sm">
    <div class="flex items-center mb-4">
      <!-- <button @click="goToPreviousMonth">«</button> -->
      <calendar-icon class="w-7 h-auto mr-1.5 mb-1" /><h2 class="text-2xl">{{ monthYear }}</h2>
      <!-- <button @click="goToNextMonth">»</button> -->
    </div>
    <table class="w-full table-fixed">
      <thead>
        <tr class="font-bold">
          <th class="w-1/7 pb-2">Min</th>
          <th class="w-1/7 pb-2">Sen</th>
          <th class="w-1/7 pb-2">Sel</th>
          <th class="w-1/7 pb-2">Rab</th>
          <th class="w-1/7 pb-2">Kam</th>
          <th class="w-1/7 pb-2">Jum</th>
          <th class="w-1/7 pb-2">Sab</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in calendar" :key="week[0].date.format('YYYY-MM-DD')">
          <td v-for="day in week" :key="day.date.format('YYYY-MM-DD')">
            <span @mouseover="day.isHoliday ? calendarTooltip[day.date.format('YYYY-MM-DD')] = true : calendarTooltip[day.date.format('YYYY-MM-DD')] = false" @mouseleave="calendarTooltip[day.date.format('YYYY-MM-DD')] = false" :class="{'font-semibold': day.isThisMonth, 'font-light': !day.isThisMonth, 'text-red-500': day.isHoliday, 'cursor-pointer': day.isHoliday }">
              {{ day ? day.date.format('D') : '' }}
            </span>
            <div v-if="calendarTooltip[day.date.format('YYYY-MM-DD')]" class="absolute bg-gray-200 text-sm text-red-500 px-3 py-1 rounded-sm -mt-8 ml-4">
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
