<template lang="html">

  <section class="src-components-front-footer">
    <div class="footer">
            <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ol>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-front-footer',
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
  .src-components-front-footer {

  }
  .footer {
    padding: 2.5rem 0;
    color: #999;
    text-align: center;
    background-color: #f9f9f9;
    border-top: .05rem solid #e5e5e5;
    position: fixed;
    width: 100%;
    
  }
  .main-footer p:last-child {
    margin-bottom: 0;
  }
  
  .card-img{
    width: 170px;
    height: 249px;;
  }
</style>
