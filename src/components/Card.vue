<template>
  <section class="src-components-card">
    <div class="card mb-3 h-md-250">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="foto" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <strong class="d-inline-block mb-2 text-muted font-italic">
              {{ descripcion }}
            </strong>
            <h3 class="mb-0">{{ titulo }}</h3>
            <br />
            <p class="card-text mb-auto" style="white-space: pre-line;">
              {{ trimInstrucciones }}
            </p>
            <a @click="goToCard" class="stretched-link"> seguir leyendo... </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-card',
    props: ['id','foto','descripcion','titulo','instrucciones','precio','ingredientes','categoria'],
    mounted () {
    },
    data () {
      return {
        trimLength: 200
      }
    },
    methods: {
      goToCard() {
        this.$router.push({ path: `/receta/${this.id}` })
      },

    },
    computed: {
      trimInstrucciones() {
            let instr = `${this.instrucciones.substring(0, this.trimLength)}...`
            return instr
        }
    }
}
</script>

<style scoped lang="css">
.src-components-card {
}
h3 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
</style>
