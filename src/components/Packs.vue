<script>
export default {
  name: "Packs",
  data() {
    return {
      packs: [
        {
          name: "Starter Pack",
          price: "$3usd",
          items: [
            "3 variantes de café",
            "Guía de cata básica",
            "Tutoriales online",
            "Newsletter Comunidad",
            "Receta con café",
          ],
          imageUrl: "starterpack.png",
          imageAlt: "Ilustración del pack starter",
        },
        {
          name: "Premium Pack",
          price: "$5usd",
          items: [
            "5 variantes de café",
            "Guía de cata avanzada",
            "Tutoriales online + Newsletter",
            "Descuentos exclusivos",
            "Regalo adicional",
          ],
          imageUrl: "premiumpack.png",
          imageAlt: "Ilustración del pack premium",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h2 class="display-4 fw-bold text-brown" id="opciones">Nuestros Packs</h2>
      <p class="fs-5 fw-light">
        Descubre una experiencia única con nuestra selección de packs de café. Cada mes, te traemos una cuidada combinación de los mejores granos, accesorios esenciales y consejos para que disfrutes de tu café como nunca antes.
      </p>
    </div>
    
    <div class="row justify-content-center text-center">
      <div class="col-md-4" v-for="(pack, index) in packs" :key="index">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h3 class="my-0 fw-bold">{{ pack.name }}</h3>
          </div>
          <div class="card-body">
            <h4 class="card-title pricing-card-title fw-bold">{{ pack.price }}<small class="text-brown-light fw-light">/mo</small></h4>
            
            <!-- Concatenamos la ruta aquí -->
            <img :src="`./src/assets/img/${pack.imageUrl}`" :alt="pack.imageAlt" class="img-fluid drop-shadow" width="300px" />
            
            <ul class="list-unstyled mt-3 mb-4">
              <li v-for="item in pack.items" :key="item" class="fw-regular text-start">
                <i class="bi bi-arrow-right-short ms-3 me-2 text-brown-light"></i>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>