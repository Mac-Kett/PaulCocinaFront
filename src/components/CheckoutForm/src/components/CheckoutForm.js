export default {
  name: 'src-components-checkout-form',
  components: {},
  props: [],
  data () {
    return {
      formData : this.$store.state.pedido,
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
    pago() {
      // Agrega credenciales de SDK
      let preference = {
        items: []
      };
      for (let item in this.$store.state.carrito) {
        preference.items.push(
        {
          title: item.title,
          unit_price: item.precio,
          quantity: item.quantity,
        })
      }
      const mp = new window.MercadoPago('TEST-9446d76a-c8ee-43bc-90f5-04e30eb02261', {locale: 'es-AR'});
          
      // Inicializa el Web Tokenize Checkout
      mp.checkout({
        tokenizer: {
          totalAmount: this.$store.getters.getCartTotal,
          backUrl: 'https://www.mi-sitio.com/process'
        },
        autoOpen: true,
      });
    },
    async enviar() {
      this.$store.dispatch("addItemsAPedido");
      console.log({...this.formData})
      
      
      let respuesta = await this.axios.post(process.env.VUE_APP_API_URL+"pedidos",this.$store.state.pedido,{'content-type':'application/json'})
      console.log(respuesta)
      this.formData = this.getInicialData()
      this.formState._reset()
    }

  }
}


