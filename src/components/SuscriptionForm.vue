<script>
export default {
    name: 'SubscriptionForm',
    data() {
        return {
        form: {
            nombre: '',
            apellido: '',
            email: '',
            subscription: '',
            preferenciasCafe: '',
            notas: ''
        },
        errores: [],
        enviado: false,
        peligro: false,
        };
    },
  methods: {
    guardar() {
      this.enviado = true;
      this.errores = [];
      this.peligro = true;

      // Validaciones
      if (!this.form.nombre) this.errores.push('El nombre es obligatorio.');
      if (this.form.nombre && this.form.nombre.length < 3) this.errores.push('El nombre debe tener al menos 3 caracteres.');
      if (!this.form.apellido) this.errores.push('El apellido es obligatorio.');
      if (!this.form.email) this.errores.push('El email es obligatorio.');
      if (!this.form.subscription) this.errores.push('Debes elegir una opción de suscripción.');
      if (!this.form.preferenciasCafe) this.errores.push('Selecciona tus preferencias de café.');

      // Si no hay errores, guardar y emitir evento
      if (this.errores.length === 0) {
        const suscriptor = { ...this.form };
        this.$emit('suscripcionExitosa', suscriptor);
        this.guardarEnLocalStorage(suscriptor);
        this.reiniciarFormulario();
        this.peligro = false;
      }
    },
    guardarEnLocalStorage(usuario) {
      let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    },
    reiniciarFormulario() {
      this.form = {
        nombre: '',
        apellido: '',
        email: '',
        subscription: '',
        preferenciasCafe: '',
        notas: ''
      };
    }
  }
};
</script>
<template>
    <div class="container my-5">
      <div class="card shadow-sm p-4 bg-light-coffee" :class="peligro ? 'borde-rojo' : 'borde-marron'">
        <h2 class="text-center mb-4">Formulario de Suscripción</h2>
        <form @submit.prevent="guardar" novalidate>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="nombre" class="form-label fw-bold">Nombre</label>
              <input type="text" class="form-control" id="nombre" v-model="form.nombre" placeholder="Nombre" />
            </div>
            <div class="col-md-6">
              <label for="apellido" class="form-label fw-bold">Apellido</label>
              <input type="text" class="form-control" id="apellido" v-model="form.apellido" placeholder="Apellido" />
            </div>
          </div>
  
          <div class="mb-3">
            <label for="email" class="form-label fw-bold">Email</label>
            <input type="email" class="form-control" id="email" v-model="form.email" />
            <div class="form-text">Nunca compartiremos tu email con nadie más.</div>
          </div>
  
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label fw-bold">Opciones de Suscripción</label>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="starterPack" value="starter" v-model="form.subscription" />
                <label class="form-check-label fw-bold" for="starterPack">Starter Pack</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" id="premiumPack" value="premium" v-model="form.subscription" />
                <label class="form-check-label fw-bold" for="premiumPack">Premium Pack</label>
              </div>
            </div>
  
            <div class="col-md-6">
              <label for="preferenciasCafe" class="form-label fw-bold">Preferencias de Café</label>
              <select class="form-select" id="preferenciasCafe" v-model="form.preferenciasCafe">
                <option disabled selected>Selecciona una opción</option>
                <option value="suave">Suave</option>
                <option value="medio">Medio</option>
                <option value="intenso">Intenso</option>
              </select>
            </div>
          </div>
  
          <div class="mb-3">
            <label for="notas" class="form-label fw-bold">Notas Adicionales</label>
            <textarea class="form-control" id="notas" v-model="form.notas" rows="3"></textarea>
          </div>
  
          <div class="text-center">
            <button type="submit" class="btn btn-dark">Suscribirse</button>
          </div>
  
          <div v-if="enviado && errores.length > 0" class="text-danger mt-3">
            <ul>
              <li v-for="(error, index) in errores" :key="index">{{ error }}</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
</template>
  

