<script>
export default {
  name: "Footer",
};
</script>

<template>
  <div class="container row justify-content-between align-items-center py-3 my-4 mx-auto border-top">
    <p class="col-md-4 mb-0 text-dark">&copy; 2024 Davinci - Nicolás Firpo</p>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item">
        <router-link to="/" class="nav-link px-2 text-dark">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/usuario" class="nav-link px-2 text-dark">Usuario</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/suscribete" class="nav-link px-2 text-dark">Suscribete</router-link>
      </li>
    </ul>
  </div>
</template>