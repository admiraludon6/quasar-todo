<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat
               dense
               round
               icon="menu"
               aria-label="Menu"
               @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img src="statics/mountains.jpg"
             class="header-image absolute-top" />
    </q-header>
    <q-footer>
      <q-tabs>
        <q-route-tab
               v-for="nav in navs"
               :key="nav.label"
               :to="nav.link"
               :icon="nav.icon"
               :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen"
              show-if-above
              :width="250"
              :breakpoint="600">
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
                  v-for="nav in navs"
                  :key="nav.label"
                  :to="nav.link"
                  exact
                  clickable
                  v-ripple>
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              {{ nav.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="statics/mountains.jpg" style="height: 192px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="statics/avatar.jpg">
          </q-avatar>
          <div class="text-weight-bold">Ahmad Miqdaad</div>
          <div>@ahmadudon6</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>

import { date } from 'quasar'
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          link: '/'
        },
        {
          label: 'Help',
          icon: 'help',
          link: '/help'
        },
        {
          label: 'Settings',
          icon: 'settings',
          link: '/settings'
        }
      ],
      mobileView: [
        {
          minSize: '600px'
        }
      ]
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
}
</script>

<style lang="scss">
  .header-image{
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%)
  }
  @media screen and (min-width: 600px){
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
      background-color: rgba(15,70,125,0.2);
    }
  }
</style>
