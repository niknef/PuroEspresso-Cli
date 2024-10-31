<script>

import ProductCard from './ProductCard.vue';


export default {
  name: 'ProximosProductos',
  components: {
    ProductCard,
    
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // Simulamos una carga de productos, ya que en un futuro estos podrian venir desde una API o una BD
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.products = [
        {
          name: "Cafetera Italiana",
          description:
            "Diseñada para capturar la esencia del espresso auténtico. Fácil de usar y elegante en su diseño, perfecta para los amantes del café, esta clásica cafetera de aluminio ofrece una experiencia de café robusta y rica, que despierta tus sentidos con cada sorbo.",
          imageUrl: "cafetera-italiana.jpg",
          imageAlt: "Cafetera Italiana",
        },
        {
          name: "Prensa Francesa",
          description:
            "Prepara un café suave y rico en matices. Diseñada para resaltar los sabores naturales de los granos, esta elegante prensa no solo es perfecta para hacer café, sino que también se convierte en tu herramienta esencial para espumar la leche.",
          imageUrl: "prensa-fransesa.jpg",
          imageAlt: "Prensa Francesa de vidrio",
        },
        {
          name: "Molinillo de Café",
          description:
            "Descubre la clave para un café excepcional con nuestro molinillo de café, diseñado para liberar todo el potencial de los granos frescos. Ajustable y preciso, permite moler tus granos a la perfección, desde un molido fino hasta uno grueso.",
          imageUrl: "molinillo-profesional.jpg",
          imageAlt: "Molinillo profesional para granos de café",
        },
      ];
    },
  },
};
</script>
    
<template>
    <div class="album py-1 text-center">
      <div class="container">
        <h2 class="fw-bold text-brown mb-4">Próximos Productos</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
          
          <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
      </div>      
    </div>
</template>
