<template>
  <section class="src-components-front-sobremi">
    <!--****************************************************************-->
    <!--FALTA CONVERTIR A VUE TODA LA CLASE-->
    <!--****************************************************************-->
    <div class="row">
      <div class="col-md-8 blog-sobre-mi">
        <br />

        <div class="sobre-mi-post">
          <h2 class="sobre-mi-post-title">Sobre mi</h2>

          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
            consectetur purus sit amet fermentum.
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </p>

          <p>
            Has maiorum habemus detraxit at. Timeam fabulas splendide et his.
            Facilisi aliquando sea ad, vel ne consetetur adversarium. Integre
            admodum et his, nominavi urbanitas et per, alii reprehendunt et qui.
            His ei meis legere nostro, eu kasd fabellas definiebas mei, in sea
            augue iriure.
          </p>

          <p>
            Dicunt percipit deserunt ut usu. Aliquip delenit an eam, vocent
            vituperata vim ea. Ei mollis audire interpretaris cum, ei impedit
            fierent sea. Ius at homero noster prompta, ea sit dignissim
            vituperata efficiendi. Natum placerat ad mei.
          </p>
        </div>
      </div>
      <!-- /.sobre-mi-sobre-mi -->

      <aside class="col-md-4 sobre-mi-sidebar py-5">
        <div class="p-4 mb-3 bg-light rounded">
          <h4 class="font-italic">About</h4>
          <div class="col-md-12 text-center mx-auto d-block py-2">
            <img
              src="../resources/images/paul-sobre-mi.jpeg"
              class="img-fluid"
            />
          </div>
        </div>
      </aside>
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
.src-components-front-sobremi {
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.display-4 {
  font-size: 2.5rem;
}
.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.h-250 {
  height: 250px;
}
@media (min-width: 768px) {
  .h-md-250 {
    height: 250px;
  }
}

/* Pagination */
.sobre-mi-pagination {
  margin-bottom: 4rem;
}
.sobre-mi-pagination > .btn {
  border-radius: 2rem;
}

/*
   * sobre-mi posts
   */
.sobre-mi-post {
  margin-bottom: 4rem;
}
.sobre-mi-post-title {
  margin-bottom: 0.25rem;
  font-size: 2.5rem;
}
.sobre-mi-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}
</style>
