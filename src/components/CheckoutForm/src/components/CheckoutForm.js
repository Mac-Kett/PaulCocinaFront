
export default {
  name: 'src-components-checkout-form',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 2,
      alturaMax : 6,
      codigoPostalMax:4,
      numeroTarjetaMax:16,
      fechaExpiracionMax: 4,
      nroCVVMax:3,
    }
  },
  computed: {
    cartQuantity() {
      return this.$store.state.carrito.length
    },
    cartItems() {
      return this.$store.state.carrito
    },
    cartTotal() {
      return this.$store.getters.getCartTotal
    }    
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        direccion: '',
        altura: '',
        piso: '',
        codigoPostal: '',
        nombreTarjeta: '',
        numeroTarjeta: '',
        fechaExpiracion: '',
        nroCVV: '',
        producto: this.$route.query.receta,
        precio: this.$route.query.precio,

      }
    },

    enviar() {
      
      console.log({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}


