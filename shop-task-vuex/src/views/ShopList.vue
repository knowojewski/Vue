<template>
  <div class="shop-list">
    <ImageHeader />
    <div class="w3-container w3-text-grey" id="products">
      <p>{{ allProducts.length }} items</p>
    </div>
    <div class="w3-row w3-grayscale items-list">
      <div v-for="product in allProducts" :key="product.id" class="product">
        <router-link class="product__link" :to="`product/${product.id}`">
          <h4 class="product__title">{{ product.product_name }}</h4>
        </router-link>
        <img :src="product.image" alt="Product image">
        <p class="product__description">{{ product.short_description}}</p>
        <div class="product__bottom">
          <p class="product__price">{{ product.price }}</p>
          <button @click.prevent="addToCart(product)" class="product__btn"><span>Add to </span><i class="fa fa-shopping-cart"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHeader from '../components/ImageHeader';
import Component from 'vue-class-component';
import Vue from 'vue';
import {Action, Getter} from 'vuex-class';

@Component({
  components: {
    ImageHeader
  }
})
export default class ShopList extends Vue {
  @Action addToCart
  @Action fetchProducts
  @Getter allProducts

  created() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.items-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.items-list::before, .items-list::after {
  display: none;
}

.product {
  width: 30%;
  height: 400px;
  position: relative;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  transition: box-shadow .3s, transform .3s;
}

.product__link {
  text-decoration: none;
}

.product img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
}

.product__title, .product__description, .product__bottom {
  position: relative;
  z-index: 1;
  padding: 10px;
  margin: 0;
}

.product__title {
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
}

.product__description {
  flex: 1;
  line-height: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  opacity: 0;
  background: transparent;
  color: #fff;
  transition: opacity .3s, background .3s ease .1s, line-height .3s ease .1s;
}

.product:hover {
  box-shadow: 0 5px 10px 1px #333;
  transform: scale(1.02);
  background: rgba(0, 0, 0, 0.65);
}

.product:hover .product__description {
  background: rgba(0, 0, 0, 0.65);
  line-height: 1.4;
  opacity: 1;
}

.product__bottom {
  padding: 0;
  display: flex;
}

.product__price {
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  padding: 0;
  flex: 1;
  font-size: 30px;
  margin: 0;
  text-align: center;
}

.product__btn {
  font-size: 16px;
  border: none;
  background: #000;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product__btn i {
  font-size: 25px;
  margin: 0 10px;
  padding-bottom: 3px;
}

.product__btn span {
  letter-spacing: -8px;
  opacity: 0;
  transition: opacity .3s, letter-spacing .3s;
}

.product__btn:hover span {
  opacity: 1;
  letter-spacing: 0px;
}

@media ( max-width: 800px ) {
  .items-list {
    justify-content: space-evenly;
  }

  .product {
    width: 260px;
  }
}

@media ( max-width: 600px ) {
  .product {
    width: 220px;
  }

  .product__description {
    font-size: 14px;
  }
}

@media ( max-width: 500px ) {
  .product {
    width: 300px;
    height: 450px;
  }

  .product__description {
    font-size: 16px;
  }
}

</style>