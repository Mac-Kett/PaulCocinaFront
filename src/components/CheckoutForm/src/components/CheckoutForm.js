export default {
  name: 'src-components-checkout-form',
  components: {},
  props: [],
  data () {
    return {
      formData: this.$store.state.pedido,
      formState: {},
      nombreLengthMin: 2,
      alturaMax: 6,
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
    async enviar() {
      this.$store.dispatch("addItemsAPedido");
      this.axios.post(process.env.VUE_APP_API_URL+"pedidos",this.$store.state.pedido,{'content-type':'application/json'}).then(res=>{
        console.log(res)
        this.$store.state.pedido = res.data
        this.$router.push({
          path: '/payment'
        })
      }).catch((error) => {
          console.log(error)
          this.$store.state.pedido = error.data
          this.$router.push({
            path: '/payment'
          })
      })
    }
  }
}


