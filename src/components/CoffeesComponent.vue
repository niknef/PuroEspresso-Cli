<script>
export default {
  name: 'CoffeesComponent',
  props: {
    preferenciasCafe: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      coffees: [
        {
          name: "Café Colombiano",
          nacionalidad: "Colombia",
          img: "cafe-colombiano.png",
          intensidad: "Medio",
          descripcion:
            "Un café suave con una acidez balanceada y notas de frutas tropicales. Es conocido por su consistencia y sabor excepcional.",
        },
        {
          name: "Café Etíope Yirgacheffe",
          nacionalidad: "Etiopía",
          img: "cafe-ethiopia.png",
          intensidad: "Suave",
          descripcion:
            "Este café ofrece un perfil de sabor floral con toques de cítricos y té. Es apreciado por su complejidad y elegancia.",
        },
        {
          name: "Café Brasileño Santos",
          nacionalidad: "Brasil",
          img: "cafe-brasilero.png",
          intensidad: "Medio",
          descripcion:
            "Un café con cuerpo y notas de chocolate y nueces. Es uno de los cafés más populares debido a su suavidad y dulzura natural.",
        },
        {
          name: "Café Keniano AA",
          nacionalidad: "Kenia",
          img: "cafe-kenia.png",
          intensidad: "Intenso",
          descripcion:
            "Con una acidez vibrante y sabores de frutas rojas y vino, este café es potente y complejo, ideal para quienes buscan una experiencia intensa.",
        },
        {
          name: "Café de Sumatra Mandheling",
          nacionalidad: "Indonesia",
          img: "cafe-sumatra.png",
          intensidad: "Intenso",
          descripcion:
            "Con cuerpo pesado y bajo nivel de acidez, este café tiene sabores terrosos y de especias, perfecto para quienes prefieren un perfil más robusto.",
        },
        {
          name: "Café de Costa Rica Tarrazú",
          nacionalidad: "Costa Rica",
          img: "cafe-costarica.png",
          intensidad: "Suave",
          descripcion:
            "Un café limpio y brillante con acidez viva y notas de cítricos y cacao. Es muy equilibrado y agradable para cualquier momento del día.",
        },
      ],
    };
  },
  computed: {
    mensajeRecomendacion() {
      return this.preferenciasCafe ? `Basado en tu preferencia de café ${this.preferenciasCafe}` : "Descubre nuestros cafés";
    },
    imageSrc() {
      return (img) => `/src/assets/img/${img}`;
    },
  },
  methods: {
    filtrarCafes() {
      return this.coffees.filter(coffee => coffee.intensidad.toLowerCase() === this.preferenciasCafe.toLowerCase());
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="text-center">
      <h2 class="display-4 fw-bold my-3">Nuestras Recomendaciones</h2>
      <p class="lead">{{ mensajeRecomendacion }}</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4" id="opciones">
      <div v-for="(coffee, index) in filtrarCafes()" :key="index" class="col">
        <div class="card h-100 text-center rounded overflow-hidden">
          <div class="card-body">
            <h2 class="card-title display-5 fs-2">{{ coffee.name }}</h2>
            <p class="lead fw-bold">{{ coffee.nacionalidad }}</p>
            <p class="lead">{{ coffee.descripcion }}</p>
          </div>
          <div class="bg-body shadow-sm mx-auto">
            <img :src="imageSrc(coffee.img)" :alt="coffee.name" class="img-fluid drop-shadow" width="300px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>