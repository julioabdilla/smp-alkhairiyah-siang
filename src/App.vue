<template>
  <div id="app">
    <div id="banner" class="flex flex-col">
      <div id="top-bar" class="flex w-full mb-8 px-96 py-1">
        <div class="w-full text-left">
          <span class="text-s font-bold">Berita Terbaru:</span>
        </div>
        <div class="w-full text-right">
          <span class="text-s">{{ currentTime }}</span>
        </div>
      </div>
      <div class="flex items-center mx-96">
        <a href="/">
          <img class="w-28 h-28 blur" :src="require('@/assets/images/logo.png')" />
        </a>
        <div class="flex flex-col ml-4 text-left">
          <a href="/" class="text-3xl font-medium">SMP Al-Khairiyah 2 Siang</a>
          <a
            href="https://maps.app.goo.gl/wdGxFXoiKyjLJEfVA"
            target="_blank"
            class="text-sm font-light">
            Jl. Mindi Raya No. 2, Lagoa, Kec. Koja, Kota Jakarta Utara
          </a>
        </div>
      </div>
      <div class="nav mx-auto flex p-2 rounded-full mt-[-0.4rem] z-10 border border-white">
        <router-link to="/" class="mx-3 nav-menu">Home</router-link>
        <router-link to="/profil" class="mx-3 nav-menu">Profil</router-link>
        <router-link to="/guru" class="mx-3 nav-menu">Guru</router-link>
        <router-link to="/siswa" class="mx-3 nav-menu">Kesiswaan</router-link>
        <router-link to="/galeri" class="mx-3 nav-menu">Galeri</router-link>
        <router-link to="/berita" class="mx-3 nav-menu">Berita</router-link>
        <router-link to="/kontak" class="mx-3 nav-menu">Kontak</router-link>
      </div>
      <carousel class="mt-[-1.2rem]"/>
    </div>
    <div class="mt-14 px-96 flex">
      <router-view></router-view>
      <div class="ml-auto flex flex-col text-left pl-12">
        <div id="side">
          <div class="text-sm">
            <span class="font-semibold">Alamat:</span>
            <p>Jl. Mindi Raya No. 2, Lagoa, Kec. Koja, Kota Jakarta Utara</p>
          </div>
          <div class="text-sm mt-4">
            <span class="font-semibold">Telp:</span>
            <p>(021) 439-3162-9</p>
          </div>
          <div class="text-sm mt-4">
            <span class="font-semibold">Email:</span>
            <p>info.smp.alkhairiyah.2@gmail.com</p>
          </div>
          <div class="mt-4">
            <google-map class="w-40"></google-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'
import Carousel from './components/carousel/Carousel.vue'
import GoogleMap from './components/googlemap/GoogleMap.vue'

export default {
  components: {
    GoogleMap,
    Carousel,
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
  padding-bottom: 36px;
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
    color: #d9d9d9;
  }
}

#side {
  background-color: #fffad2;
  color: #5a5a5a;
  padding: 24px;
  width: 360px;
  border-radius: 8px;
}
</style>
