<template>
  <div class="cart-summary">
    <div class="products-summary">
      <div class="summary-top">
        <h4 class="summary-title">Products in cart</h4>
        <button @click="$emit('edit-products')" class="edit-btn w3-button w3-black w3-padding-large w3-large"><i class="fa fa-edit"></i>EDIT</button>
      </div>
      <div class="product" v-for="(product, index) in cartProducts" :key="index">
        <h5 class="product-name">{{ product.product_name }}</h5>
        <div class="product-quantity">
          <p>x <span>{{ product.quantity }}</span></p>
        </div>
        <div class="product-price">
          <p>$<span>{{ product.totalPrice.toFixed(2) }}</span></p>
        </div>
      </div>
      <hr>
      <p class="total-price">$<span>{{ cartTotalPrice.toFixed(2) }}</span></p>
    </div>
    <hr>
    <div class="infos-summary">
      <div class="infos-box delivery-infos">
        <h4 class="summary-title">Delivery informations</h4>
        <p class="infos">{{ address.firstName }} {{ address.lastName }}</p>
        <p class="infos">{{ address.country }}</p>
        <p class="infos">{{ address.zipCode }} {{ address.city }}</p>
        <p class="infos">{{ address.phoneNumber }}</p>
        <p class="infos">{{ address.email }}</p>
        <p class="infos">Card number: {{ address.cardNumber }}</p>
        <button @click="$emit('edit-infos')" class="edit-btn w3-button w3-black w3-padding-large w3-large"><i class="fa fa-edit"></i>EDIT</button>
      </div>
      <div v-if="invoiceValidate" class="infos-box invoice-infos">
        <h4 class="summary-title">Invoice informations</h4>
        <p class="infos">{{ invoice.company }}</p>
        <p class="infos">{{ invoice.NIP }}</p>
        <p class="infos">{{ invoice.country }}</p>
        <p class="infos">{{ invoice.zipCode }} {{ invoice.city }}</p>
        <p class="infos">{{ invoice.phoneNumber }}</p>
        <p class="infos">{{ invoice.email }}</p>
        <button @click="$emit('edit-infos')" class="edit-btn w3-button w3-black w3-padding-large w3-large"><i class="fa fa-edit"></i>EDIT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch } from 'vue-property-decorator';
import InvoiceForm from "./InvoiceForm";
import { Getter, Action, Mutation} from 'vuex-class';

@Component
export default class CartSummary extends Vue {
  cartTotalPrice = 0;

  @Getter address
  @Getter invoice
  @Getter invoiceValidate
  @Getter cartProducts
  @Getter cartProductsLength
  // @Getter cartTotalPrice

  created() {
    this.cartProducts.forEach( item => {
      this.cartTotalPrice += item.totalPrice;
    });
  }
}
</script>

<style scoped lang="scss">
.cart-summary {
  width: 100%;
  animation: fade-down 0.8s;
}

.edit-btn {
  padding: 3px 15px!important;
  display: flex;
  align-items: center;

  i {
    margin-right: 5px;
    font-size: 25px;
  }
}

.products-summary {
  width: 100%;

  .summary-top{
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(233, 233, 233);
    margin-bottom: 15px;

    .summary-title{
      margin-right: auto;
    }
  }

  .product {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 5px;
    box-shadow: 0 3px 10px rgb(214, 214, 214);

    .product-name {
      width: 50%;
      font-size: 20px;
    }

    .product-quantity {
      width: 10%;
      p {
        font-size: 18px;
        span { font-size: 22px; }
      }
    }

    .product-price {
      text-align: right;
      width: 20%;

      p {
        font-size: 18px;
        span { font-size: 22px; }
      }
    }
  }

  .total-price {
    width: 100%;
    text-align: right;
    padding: 0 10px;
    font-size: 18px;
      span { font-size: 22px; }
  }
}

.infos-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;

  .infos-box {
    margin: 0 auto;
    position: relative;
    width: 48%;
    box-shadow: 0 3px 10px rgb(214, 214, 214);
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;

    .summary-title {
      margin: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgb(213, 213, 213);
    }
  }

  .infos {
    margin: 1px 15px;
    font-size: 18px;
  }

  .edit-btn {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>