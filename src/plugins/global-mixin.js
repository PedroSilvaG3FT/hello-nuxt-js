import Vue from 'vue'
import GlobalMixin from '@/mixins/global.mixin.js'

if (!Vue.globalMixin) {
  Vue.globalMixin = true
  Vue.mixin(GlobalMixin)
}
