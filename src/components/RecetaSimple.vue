<template>
  <section class="src-components-receta-simple">
    <!--****************************************************************-->
    <!--FALTA CONVERTIR A VUE TODA LA CLASE-->
    <!--****************************************************************-->
    <div class="col-md-8 text-center mx-auto d-block py-2">
        <img src="../resources/images/foto-receta.jpeg" class="img-fluid rounded">
      </div>

      <div class="row">
        <div class="col-md-8 blog-sobre-mi">

          <br/>

          <div class="sobre-mi-post">
            <h2 class="sobre-mi-post-title py-3">Lorem Ipsum</h2>

            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed
              posuere
              consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <hr>
            <h3>Instrucciones</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes</a>,
              nascetur
              ridiculus
              mus.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed
              posuere
              consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>Eam ex integre quaeque bonorum, ea assum solet scriptorem pri, et usu nonummy accusata interpretaris.
              Debitis necessitatibus est no. Eu probo graeco eum, at eius choro sit, possit recusabo corrumpit vim ne.
              Noster diceret delicata vel id.

            </p>
            <p> ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
            <p> maiorum habemus detraxit at. Timeam fabulas splendide et his. Facilisi aliquando sea ad, vel ne
              consetetur adversarium. Integre admodum et his, nominavi urbanitas et per, alii reprehendunt et qui. His
              ei meis legere nostro, eu kasd fabellas definiebas mei, in sea augue iriure.
            </p>
            <p> percipit deserunt ut usu. Aliquip delenit an eam, vocent vituperata vim ea. Ei mollis audire
              interpretaris cum, ei impedit fierent sea. Ius at homero noster prompta, ea sit dignissim vituperata
              efficiendi. Natum placerat ad mei.</p>
          </div>
          <!--****************************************************************-->
          <!--FALTA HACER BOTON Y CONECTARLO A LISTADO DE PRODUCTOS EN CARRITO-->
          <!--****************************************************************-->
          <button
            v-on:click="addProductToCart(product)"
            class="btn btn-primary mt-auto"
          > Add To Cart
          </button>
        </div>

        <aside class="col-md-4 sobre-mi-sidebar py-5">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="font-italic">Ingredientes</h4>
            <ul>
              <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
          </div>

        </aside>
      </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-receta-simple',
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
.src-components-receta-simple {
}

</style>
