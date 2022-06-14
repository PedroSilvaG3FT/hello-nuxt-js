import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

const head = () => ({
  title: 'Hello World',
  meta: [
    { hid: 'helloWorld', name: 'helloWorld', content: 'Meta Hello World' },
  ],
})

export default {
  head,
  name: 'HelloWorld',
  computed: {
    ...mapGetters('hello-world', ['getName']),

    title() {
      const defaultTitle = 'Hello World'

      if(!this.getName) return defaultTitle
      return `${defaultTitle}, ${this.getName} :)`
    },
  },
  data() {
    return { name: '' }
  },
  validations: {
    name: { required, minLength: minLength(4) },
  },
  methods: {
    ...mapActions('hello-world', ['setName']),

    submit() {
      this.$v.$touch()

      this.setName(this.name)
      console.log('submit', this.name)
    },
  },
}
