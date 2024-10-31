<script>
  export default {
    name: "Navbar",
  };
</script>
  
<template>
    <nav class="navbar navbar-expand-lg bg-light-coffee rounded m-3">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <router-link class="navbar-brand col-lg-3 me-0" to="/">
            <img src="../assets/logos/logo-puroespresso.png" alt="PureEspresso" width="200" />
            <h1 class="visually-hidden">PureEspresso</h1>
          </router-link>
          
          <ul class="navbar-nav col-lg-6 justify-content-lg-center gap-3">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usuario">Usuario</router-link>
            </li>
          </ul>
          
          <div class="d-lg-flex col-lg-3 justify-content-lg-end">
            <router-link class="btn btn-brown fw-medium" to="/suscribete">Suscríbete</router-link>
          </div>
        </div>
      </div>
    </nav>
</template>

