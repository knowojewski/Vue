<template>
  <div class="cart__products">
    <div v-for="(product, index) in cart" :key="`${index}-${product.id}-${product.quantity}`" class="cart__product">
        <div class="cart__preview">
            <img :src="product.image" alt="Product preview">
        </div>
        <div class="cart__left">
            <router-link :to="`/product/${product.id}`" class="cart__product-name">{{ product.product_name }}</router-link>
            <div class="cart__product-quantity">
                <button @click="updateQuantity({id: product.id, amount: -1})" :disabled="product.quantity == 1">
                    <i class="fa fa-caret-left"></i>
                </button>
                <p>{{ product.quantity }}</p>
                <button @click="updateQuantity({id: product.id, amount: 1})"><i class="fa fa-caret-right"></i></button>
            </div>
        </div>
        <div class="cart__right">
            <p class="cart__product-price">${{ product.totalPrice.toFixed(2) }}</p>
            <button @click="deleteFromCart({index: index, quantity: product.quantity})" class="w3-button w3-black w3-padding-large w3-large cart__btn"><i class="fa fa-trash"></i></button>
        </div>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';
import { Getter, Action } from 'vuex-class';
import { Watch } from 'vue-property-decorator'
import Component from 'vue-class-component';

@Component
export default class CartProducts extends Vue {
    @Action deleteFromCart
    @Action changeQuantity

    updateQuantity(value) {
        this.changeQuantity(value);
        // USED BECAUSE OF PROBLEMS WITH UPDATE QUANTITY OF NEWLY ADDED TO CART PRODUCT 
        this.$forceUpdate();
    }

    get cart() {
        return this.$store.state.products.cart;
    }
}
</script>

<style lang="scss" scoped>
.cart__products {
    margin: 40px 0;
    animation: fade-down .8s;

    .cart__product {
        height: 150px;
        width: 100%;
        display: flex;
        box-shadow: 0 3px 10px 0px rgb(189, 189, 189);
        margin-top: 30px;

        .cart__preview {
            height: 100%;
            width: 120px;

            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .cart__left {
            padding: 15px;
            flex: 1;
            display: flex;
            flex-direction: column;

            .cart__product-name {
                text-decoration: none;
                font-size: 26px;
            }

            .cart__product-quantity {
                margin-top: auto;
                display: flex;
                align-items: center;

                p {
                    font-size: 20px;
                    padding: 0 10px;
                    margin: 0 4px;
                    border: 1px solid #999;
                }

                button {
                    padding: 0 5px;
                    border: none;
                    background: transparent;
                    cursor: pointer;

                    i {
                        font-size: 30px;
                    }
                }
            }
        }

        .cart__right {
            width: 15%;
            background: #000;
            display: flex;
            flex-direction: column;
            align-items: center;

            .cart__product-price {
                font-size: 25px;
                color: #fff;
            }

            .cart__btn {
                margin-top: auto;
                width: 100%;

                i {
                    font-size: 25px;
                }
            }
        }
    }
}

@media (max-width: 660px ) {
    .cart__products {
        .cart__product {
            .cart__left {
                .cart__product-name {
                    font-size: 22px;
                }

                .cart__product-producer {
                    font-size: 16px;
                }
            }
        }
    }
}

@media (max-width: 567px ) {
    .cart__product-price {
        font-size: 16px;
    }
}

@media (max-width: 420px ) {
    .cart__products-title {
        font-size: 20px;
    }

    .cart__product {
        flex-direction: column;
    }

    .cart__right {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .cart__product-price {
        width: 70%;
        text-align: center;
        font-size: 22px;
        margin: 3px 0;
    }

    .cart__btn {
        width: 30%;
        padding: 3px!important;
        margin: 0;
    }

    .cart__preview {
        display: none;
    }
}
</style>