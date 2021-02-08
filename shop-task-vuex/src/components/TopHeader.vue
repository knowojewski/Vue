<template>
  <header class="w3-container w3-xlarge">
    <p class="w3-left">Products</p>
    <p class="w3-right">
      <router-link to="/cart">
        <button class="header__btn">
          <i class="fa fa-shopping-cart"></i>
          <span>{{ cartProductsLength }}</span>
        </button>
      </router-link>
      <i class="fa fa-search"></i>
    </p>
  </header>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

@Component
export default class TopHeader extends Vue {
  @Getter cartProductsLength
}
</script>

<style lang="scss" scoped>
.header__btn {
  position: relative;
  margin-right: 15px;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    display: inline-block;
    background: rgb(0, 0, 0);
    color: #fff;
    transition: transform .3s;
  }

  i {
    margin: 0;
  }
}

.header__btn:hover {
  span {
    transform: scale(1.4);
  }
}
</style>