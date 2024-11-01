<script>
// Importa los componentes
import SubscriptionForm from "../components/SuscriptionForm.vue";
import ModalGracias from "../components/ModalGracias.vue";

export default {
  name: "Suscribete",
  components: {
    SubscriptionForm,
    ModalGracias
  },
  data() {
    return {
      suscrito: false, // Controla si se muestra el mensaje de agradecimiento
      usuario: null,   // Contendrá los datos del usuario
      preferenciasCafe: "medio" // Preferencia de café por defecto
    };
  },
  methods: {
    mostrarGracias(datosUsuario) {
      this.usuario = datosUsuario; // Guarda los datos del usuario
      this.suscrito = true;        // Cambia el estado a suscrito para mostrar el mensaje de gracias
      this.preferenciasCafe = datosUsuario.preferenciasCafe || this.preferenciasCafe;
    }
  }
};
</script>

<template>
  <div class="suscribete">
    <SubscriptionForm v-if="!suscrito" @suscripcionExitosa="mostrarGracias" />
    <ModalGracias v-else :usuario="usuario" :preferenciasCafe="preferenciasCafe" />
  </div>
</template>

