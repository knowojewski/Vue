<template>
  <div class="shop-list">
    <image-header></image-header>
    <div class="w3-container w3-text-grey" id="jeans">
      <p>{{ this.allProducts.length }} items</p>
    </div>
    <div class="w3-row w3-grayscale">
      <div v-for="product in allProducts" :key="product.id" class="product">
        <h4 class="product__title">{{ product.product_name }}</h4>
        <div class="image-container">
          <img v-bind:src="product.image" alt="Product image">
        </div>
        <p class="product__description">{{ product.short_description}}</p>
        <p class="product__price">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import ImageHeader from '../components/ImageHeader'

export default {
    name: 'ShopList',
    components: {
      ImageHeader
    },
    methods: {
      ...mapActions(['fetchProducts'])
    },
    computed: {
      ...mapGetters(['allProducts'])
    }, 
    created() {
      this.fetchProducts();
    }
}
</script>

<style>

</style>