<template>
  <div class="font-helvetica min-h-screen">
    <div id="banner" class="flex flex-col">
      <div id="top-bar" class="hidden md:flex w-full py-1 px-4 md:px-20 lg:px-36 xl:px-60 2xl:px-80">
        <div class="w-full text-left">
          <span class="text-s font-bold">Berita Terbaru:</span>
        </div>
        <div class="w-full text-right">
          <!-- <span class="text-s">{{ currentTime }}</span> -->
        </div>
      </div>
      <div class="flex items-center mt-2 md:mt-8 mx-4 md:mx-20 lg:mx-36 xl:mx-60 2xl:mx-80 md:h-20 lg:h-25 xl:h-25 2xl:h-28">
        <a href="/">
          <img class="w-16 aspect-h-1 blur md:w-20 lg:w-25 xl:w-25 2xl:w-28" :src="require('@/assets/images/logo.png')" />
        </a>
        <div class="flex flex-col ml-4 text-left">
          <a href="/" class="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold">SMP Al-Khairiyah 2 Siang</a>
            <a
              href="https://maps.app.goo.gl/WSPAEugo8hLoq9Tz8"
              target="_blank">
              <div class="flex items-center">
                <map-pin-icon class="hidden md:block w-3 h-auto mr-1 mb-0.5" />
                <span class="text-xs md:text-sm">
                  Jl. Mindi Raya No. 2, Lagoa, Kec. Koja, Kota Jakarta Utara
                </span>
              </div>
            </a>
        </div>
      </div>
      <div class="mb-auto grid grid-cols-6 md:flex nav mx-none md:mx-auto p-2 rounded-none md:rounded-full mt-2 md:mt-[-0.3rem] lg:mt-[-0.3rem] xl:mt-[-0.3rem] 2xl:mt-[-0.4rem] md:z-1 border-none md:border border-white text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base">
        <router-link to="/" class="mx-3 nav-menu">Home</router-link>
        <router-link to="/profil" class="mx-3 nav-menu">Profil</router-link>
        <router-link to="/guru" class="mx-3 nav-menu">Guru</router-link>
        <!-- <router-link to="/siswa" class="mx-3 nav-menu">Kesiswaan</router-link> -->
        <router-link to="/berita" class="mx-3 nav-menu">Berita</router-link>
        <router-link to="/galeri" class="mx-3 nav-menu">Galeri</router-link>
        <router-link to="/kontak" class="mx-3 nav-menu">Kontak</router-link>
      </div>
      <div class="hidden md:block">
        <carousel class="mt-[-1.2rem]"/>
      </div>
    </div>
    <div class="mb-10 md:mb:28 mt-4 md:mt-10 px-4 md:px-20 lg:px-36 xl:px-60 2xl:px-80">
      <div class="w-full block md:grid grid-cols-12 gap-8">
        <div class="col-span-8 2xl:col-span-9">
          <router-view></router-view>
        </div>
        <div class="hidden md:flex flex-col text-left col-span-4 2xl:col-span-3">
          <div class="side-widget">
            <div class="text-sm">
              <div class="flex items-center">
                <map-pin-icon class="w-3 h-auto mr-1 mb-0.5" />
                <span class="font-semibold">Alamat:</span>
              </div>
              <p>Jl. Mindi Raya No. 2, Lagoa, Kec. Koja, Kota Jakarta Utara</p>
            </div>
            <div class="text-sm mt-4">
              <div class="flex items-center">
                <phone-icon class="w-3 h-auto mr-1 mb-0.5" />
                <span class="font-semibold">Telp:</span>
              </div>
              <p>(021) 439-3162-9</p>
            </div>
            <div class="text-sm mt-4">
              <div class="flex items-center">
                <envelope-icon class="w-3 h-auto mr-1 mb-0.5" />
                <span class="font-semibold">Email:</span>
              </div>
              <p class="break-words">info.smp.alkhairiyah.2@gmail.com</p>
            </div>
            <div class="mt-4">
              <a 
                href="https://maps.app.goo.gl/WSPAEugo8hLoq9Tz8"
                target="_blank">
                <google-map class="w-full"></google-map>
              </a>
            </div>
          </div>
          <div class="side-widget mt-6">
            <calendar />
          </div>
        </div>
      </div>
    </div>
    <div class="sticky top-[100vh]">
      <div class="hidden md:block footer-sub w-full h-8 mt-28">
      </div>
      <div class="footer w-full h-20 items-center text-center text-xs md:text-sm pt-3 md:pt-4">
        <div class="flex flex-col items-center text-center mb-1 md:mb-2">
          <div class="flex">
            <a href="https://instagram.com/smpaka2" target="_blank" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/>
              </svg>
              smpaka2
            </a>
            <pre> | </pre>
            <a href="https://instagram.com/osissmpaka2" target="_blank" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/>
              </svg>
              osissmpaka2
            </a>
            <pre> | </pre>
            <a href="https://www.tiktok.com/@smpaka2" target="_blank" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"/>
              </svg>
              smpaka2
            </a>
            <pre class="hidden md:block"> | </pre>
            <a href="https://youtube.com/@smpal-khairiyah2173" target="_blank" class="hidden md:flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/>
              </svg>
              SMP Al-Khairiyah 2
            </a>
            <pre class="hidden md:block"> | </pre>
            <a href="https://www.facebook.com/smpaka2" target="_blank" class="hidden md:flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/>
              </svg>
              SMP Al-Khairiyah 2
            </a>
          </div>
          <div class="flex md:hidden mt-1">
            <a href="https://youtube.com/@smpal-khairiyah2173" target="_blank" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/>
              </svg>
              SMP Al-Khairiyah 2
            </a>
            <pre> | </pre>
            <a href="https://www.facebook.com/smpaka2" target="_blank" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="16px" height="16px" class="mr-1">
                <path fill="#ededed" d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"/>
              </svg>
              SMP Al-Khairiyah 2
            </a>
          </div>
        </div>
        <span>© 2023 SMP Al-Khairiyah 2 Siang</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'
import Carousel from './components/carousel/Carousel.vue'
import GoogleMap from './components/googlemap/GoogleMap.vue'
import Calendar from './components/calendar/Calendar.vue'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, HomeIcon } from '@heroicons/vue/24/solid'
import FacebookIcon from '@/assets/images/icons8-facebook.svg'
import InstagramIcon from '@/assets/images/icons8-instagram.svg'
import TitkokIcon from '@/assets/images/icons8-tiktok.svg'
import YoutubeIcon from '@/assets/images/icons8-youtube.svg'

export default {
  components: {
    GoogleMap,
    Carousel,
    Calendar,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    HomeIcon,
    FacebookIcon,
    InstagramIcon,
    TitkokIcon,
    YoutubeIcon,
  },
  data() {
    return {
      currentTime: moment().locale('id').format('dddd, DD MMMM YYYY HH:mm:ss'),
    }
  },
  created() {
    // Update the time every second (1000 milliseconds)
    this.timer = setInterval(() => {
      this.currentTime = moment().locale('id').format('dddd, DD MMMM YYYY HH:mm:ss')
    }, 1000)
  },
  beforeUnmount() {
    // Clear the timer when the component is destroyed to prevent memory leaks
    clearInterval(this.timer)
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#banner {
  color: #5a5a5a;

  .nav {
    background-color: #0a8801;
  }

  a.nav-menu {
    font-weight: bold;
    color: #ededed;

    &.router-link-exact-active {
      color: #f9fd02;
    }
  }
}

#top-bar {
  background-color: #0a8801;
  span {
    color: #ededed;
  }
}

.side-widget {
  // background-color: #fffad2;
  background-color: #ccc;
  color: #5a5a5a;
  padding: 20px;
  border-radius: 8px;
}

.footer-sub {
  background-color: #2aa721;
}

.footer {
  background-color: #0a8801;
  color: #ededed;
}
</style>
