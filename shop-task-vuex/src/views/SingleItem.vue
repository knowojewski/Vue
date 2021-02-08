<template>
  <div class="single-item">
    <Loading v-if="loading" />
    <div v-else class="product">
      <div class="product__top">
        <div class="product__title">
          <h4 class="product__name">{{ singleItem.product_name }}</h4>
          <button @click.prevent="addToCart(singleItem)" class="product__btn">Add to <i class="fa fa-shopping-cart"></i></button>
        </div>
        <div class="product__image">
          <img :src="singleItem.image" alt="Product Image">
        </div>
      </div>
      <div class="product__infos">
        <p class="product__producer">Producer: <span>{{ singleItem.company }}</span></p>
        <p class="product__description">{{ singleItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';
import Loading from '../components/Loading';

@Component({
  components: {
    Loading
  }
})
export default class SingleItem extends Vue {
  singleItem = {};
  url_id = this.$route.params.id;
  loading = true;

  @Getter allProducts
  @Getter product
  @Action addToCart
  @Action fetchSingleProduct

  
  async getProduct() {
    await this.fetchSingleProduct(this.url_id);
    this.singleItem = this.product;
    this.loading = false;
  }

  created() {
    this.getProduct();
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

@media ( max-width: 820px ) {
  .product__top {
    flex-direction: column;
  }

  .product__title {
    order: 2;
    margin-bottom: 50px;
  }

  .product__image {
    order: 1;
    margin: 20px auto;
    max-width: 400px;
    overflow: hidden;
  }

  .product__image img{
    width: 100%;
  }
}

@media ( max-width: 400px ) {
  .product__name {
    font-size: 24px;
  }

  .product__btn {
    margin: 0 auto;
  }
}
</style>