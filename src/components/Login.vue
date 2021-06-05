<template>
  <section class="src-components-login">
    <!--- FORMULARIO ASI NOMAS DONDE DESPUÉS IRÍA EL LOGIN.   -->
  <div class="container my-4">
    <div class="jumbotron shadow-sm p-3 mb-5 bg-white rounded">
      <div class="row my-4 mx-3">

        <!--Bloque de Datos de envio -->
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Log In</h4>
          <!--EMPIEZA VUE-FORM-->
          <vue-form :state="formState" @submit.prevent="enviar()">
            <div class="row">

              <!-- campo username -->
              <validate tag="div" class="col-md-6 mb-3">
                <label for="username"> Username </label>
                <input type="text" id="username" name="username" class="form-control" autocomplete="off"
                  v-model.trim="formData.username" required :minlength="nombreLengthMin" />
                <field-messages name="username" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                  <div slot="minlength" class="alert alert-danger mt-1">
                    Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
                  </div>
                </field-messages>
              </validate>
              <br>
              <!-- campo password -->
              <validate tag="div" class="col-md-6 mb-3">
                <label for="password"> Password </label>
                <input type="text" id="password" name="password" class="form-control" autocomplete="off"
                  v-model.trim="formData.password" required :minlength="nombreLengthMin" />
                <field-messages name="password" show="$dirty">
                  <div slot="required" class="alert alert-danger mt-1">
                    Campo requerido
                  </div>
                  <div slot="minlength" class="alert alert-danger mt-1">
                    Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
                  </div>
                </field-messages>
              </validate>
            </div>
            <hr class="mb-4" />
            <button class="btn btn-primary btn-lg btn-block" :disabled="formState.$invalid" type="submit">
              Log In
            </button>
          </vue-form>
          
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-login',
    props: [],
    mounted () {

    },
    data () {
      return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 2,

      }
    },
    methods: {
      getInicialData() {
            return {
              username: '',
              password: '',

            }
      },
      enviar() {
      //login con la API
      console.log({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-almuerzo {
}
</style>
