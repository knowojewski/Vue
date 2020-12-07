<template>
  <div class="product">
    <div class="product__top">
      <div class="product__title">
        <h4 class="product__name">{{ singleProduct.product_name }}</h4>
        <button class="product__btn">Add to <i class="fa fa-shopping-cart"></i></button>
      </div>
      <div class="product__image">
        <img :src="singleProduct.image" alt="Product Image">
      </div>
    </div>
    <div class="product__infos">
      <p class="product__producer">Producer: <span>{{ singleProduct.company }}</span></p>
      <p class="product__description">{{ singleProduct.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SingleItem',
  data() {
    return {
      url_id: this.$route.params.id,
      // singleProduct: {}
    }
  },
  computed: {
    ...mapGetters(['allProducts'])
  },
  methods: {

  },
  created() {
    console.log(this.allProducts);
    this.allProducts.forEach( product => product.id == this.url_id ? this.singleProduct = product : console.log('Not that item'));
    console.log(this.singleProduct);
  }
}
</script>

<style scoped>
.product {
  padding: 10px;
}

.product__top {
  display: flex;
}

.product__title {
  flex: 1;
}

.product__name {
  font-size: 30px;
  margin-bottom: 30px;
}

.product__btn {
  font-size: 18px;
  width: 200px;
  height: 50px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background .3s, color .3s;
}

.product__btn i {
  font-size: 25px;
  margin: 0 10px;
  padding-bottom: 3px;
}

.product__btn:hover {
  background: rgb(218, 218, 218);
  color: #000;
}

.product__image {
  
}

.product__image img {

}

.product__infos {
  font-size: 18px;
  line-height: 1.4;
}

.product__producer { font-size: 20px }

.product__producer span { font-weight: bold }

.product__description {
  text-align: justify;
  margin-bottom: 80px;
}
</style>