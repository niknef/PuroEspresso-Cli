<script>
import Divider from "./Divider.vue";

export default {
  name: "Banner",
  components: {
    Divider,
  },
};
</script>

<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center rounded bg-body-tertiary" id="fondo-cafe">
    <div class="col-md-6 p-lg-5 mx-auto my-5 w-75">
      <h2 class="display-4 fw-bold">Para los Amantes del Café que Buscan lo Mejor en Cada Taza.</h2>
      <h3 class="fw-normal text-muted mb-3">Descubre el Placer de Degustar Cafés Únicos y Encuentra tu Favorito.</h3>
      <div class="d-flex gap-3 justify-content-center lead">
        <router-link class="btn btn-brown fw-medium" to="/suscribete">Suscríbete ahora!</router-link>
      </div>
    </div>
  </div>
  <Divider />
</template>
