import Vue from 'vue'
import animate from './animate'
import { VueMaskDirective } from 'v-mask'
import scrollAnimate from './scroll-animate'

Vue.directive('animate', animate)
Vue.directive('mask', VueMaskDirective)
Vue.directive('scroll-animate', scrollAnimate)
