<template>
  <section class="src-components-front-sobremi">
    <div class="container">
      <div class="row">
        <div class="col-md-8 blog-sobre-mi">
          <br />

          <div class="sobre-mi-post">
            <h2 class="sobre-mi-post-title mb-4">Sobre mi</h2>

            <p>
              Hola, bienvenido! Soy Paul, Chef graduado en la Escuela de Cocina
              de Nueva Zela, con amplia experiencia en restaurantes con
              estrellas Michelin, pero eso no es lo importante. Este blog
              pretende ser un recetario que me permita recopilar aquellas
              recetas con toque casero que la gente tanto me pide.
            </p>
            <p>
              Mi pasión por la cocina me ha llevado a conocer y fusionar cocina
              europea e internacional. Pero mi verdadera pasión nació porque
              considero que cocinar es una de las formas más bonitas de cuidar a
              los que nos rodean, una manera de decir “te quiero“. Por eso me
              encanta preparar platos para los demás con los que intentar
              sorprenderlos y deleitarlos.
            </p>
            <p>
              Mi cocina es dedicación, organización y mucha imaginación, aca
              encontrarán un chef pero tambien a un tipo común.
            </p>
          </div>
        </div>

        <aside class="col-md-4 sobre-mi-sidebar py-5">
          <div class="p-1 mb-3 bg-light rounded">
            <div class="col-md-12 py-2">
              <img
                src="../assets/paul-sobre-mi.jpeg"
                class="img-fluid rounded"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-front-sobremi',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
h2 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}
.sobre-mi-post {
  margin-bottom: 4rem;
}
.sobre-mi-post-title {
  margin-bottom: 0.25rem;
  font-size: 2.5rem;
}
</style>
