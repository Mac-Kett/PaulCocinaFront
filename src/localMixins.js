export const miMixinLocal = {
    computed: {
        encontrados() {
        console.log('encontrados ---mixin local')
        return this.$store.state.busquedas
      }
    }
}

