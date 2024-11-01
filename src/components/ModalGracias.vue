<script>
import CoffeesComponent from "../components/CoffeesComponent.vue";
export default {
    name: 'ModalGracias',
    components: {
    CoffeesComponent
  },
  props: {
    usuario: {
      type: Object,
      required: true,
    },
    preferenciasCafe: {
      type: String,
      required: true,
    },
    alerta: {
      type: String,
      default: '¡Gracias por suscribirte!'
    }
  },
  methods: {
    capitalize(texto) {
      if (!texto) return "";
      return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    }
    }
};
</script>

<template>
    <div class="container my-5 text-center" v-if="usuario">
        <div class="bienvenido mx-auto my-2"></div>
      <h2 class="fw-bold text-brown">Bienvenido/a {{ capitalize(usuario.nombre) }}</h2>
      <h3 class="fw-bold text-brown">{{ alerta }}</h3>
      <h4 class="fw-bold text-brown">Pack {{ capitalize(usuario.subscription) }}</h4>
      <p class="fw-regular text-brown">Recibirás un correo de confirmación al mail: <span class="fw-light">{{ usuario.email }}</span></p>
      <p v-if="usuario.notas" class="fw-regular text-brown">Notas adicionales: <span class="fw-light fst-italic">{{ usuario.notas }}</span></p>
      <CoffeesComponent :preferenciasCafe="preferenciasCafe" /> 
    </div>
</template>
  
 
  

  