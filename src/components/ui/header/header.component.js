import { scrollTo } from '@/helpers/scroll.helper'

export default {
  name: 'AppHeader',
  components: {
    SideMenu: () => import('@/components/ui/side-menu'),
    ButtonMenu: () => import('@/components/ui/button-menu'),
  },
  computed: {
    isHeaderColor() {
      return this.scrollPosition > 50
    },
    menuItems() {
      return [{ name: 'Home', id: 'banner' }]
    },
    imageRedirect() {
      return this.menuItems[0].id
    },
  },
  data: () => ({
    scrollPosition: 0,
    showSideMenu: false,
  }),
  mounted() {
    this.updateScroll()
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    goTo(id) {
      scrollTo(id)
    },
    openSideMenu() {
      this.showSideMenu = true
    },
    closeSideMenu() {
      this.showSideMenu = false
    },
    onSelectItem(item) {
      this.goTo(item.id)
      this.closeSideMenu()
    },
  },
}
