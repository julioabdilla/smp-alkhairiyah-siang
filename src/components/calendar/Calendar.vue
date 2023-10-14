<template>
  <div class="p-4 text-sm">
    <div class="flex justify-between items-center mb-4">
      <button @click="goToPreviousMonth">«</button>
      <h2 class="text-2xl">{{ monthYear }}</h2>
      <button @click="goToNextMonth">»</button>
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
            <span :class="{'font-semibold': day.isThisMonth, 'font-light': !day.isThisMonth, 'text-red-500': day.isHoliday}">
              {{ day ? day.date.format('D') : '' }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
  data() {
    return {
      currentDate: moment().month(1).locale('id'),
      calendarData: [],
    }
  },
  created() {
    // Make a GET request to fetch data
    axios.get(`https://api-harilibur.vercel.app/api?month=${this.currentDate.format('MM')}&year=${this.currentDate.format('YYYY')}`)
      .then(response => {
        // Handle the response and store the data in your data property
        this.calendarData = response.data.filter(data => data.is_national_holiday)
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
          const weekObj = {
            date: currentDay.clone(),
            isThisMonth: currentDay.month() === this.currentDate.month(), 
            isHoliday: false,
            holidayName: '',
          }
          week.push(weekObj)
          currentDay.add(1, 'days')
        }
        days.push(week)
      }
      for (let i = 0; i < days.length; i++) {
        for (let j=0; j < days[i].length; j++) {
          console.log(days[i][j]);
        }
      }
      return days
    },
  },
  methods: {
    goToPreviousMonth() {
      this.currentDate.subtract(1, 'month')
      this.$forceUpdate()
    },
    goToNextMonth() {
      this.currentDate.add(1, 'month')
      this.$forceUpdate()
    },
  },
}
</script>
