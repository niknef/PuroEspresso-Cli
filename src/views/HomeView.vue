<script>
  import Banner from "../components/Banner.vue";
  import Packs from "../components/Packs.vue";
  import Nosotros from "../components/Nosotros.vue";
  import Divider from "../components/Divider.vue";
  import ProximosProductos from "../components/ProximosProductos.vue";



  export default {
    name: "HomeView",
    components: {
      Banner,
      Packs,
      Nosotros,
      Divider,
      ProximosProductos,
    },
  };
</script>

<template>
  <main>
    <Banner />
    <Packs />
    <Divider />
    <Nosotros />
    <ProximosProductos />
  </main>
</template>
