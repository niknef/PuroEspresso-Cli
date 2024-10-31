<template>
    <div class="col">
      <div class="card shadow-sm">
        <img :src="imageSrc" :alt="product.imageAlt" class="rounded-top">
        <div class="card-body bg-light-coffee">
          <p class="card-text fw-regular text-dark">
            <span class="text-brown">{{ product.name }}</span>, {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    computed: {
      imageSrc() {
        return `/src/assets/img/${this.product.imageName}`;
      },
    },
  };
  </script>