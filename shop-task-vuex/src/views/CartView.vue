<template>
  <div class="cart">
      <div v-if="cartProductsLength == 0" class="cart__empty">
          <i class="fa fa-shopping-cart"></i>
          <h2 class="cart__empty-title">Your cart is empty! Go and buy some stuff!</h2>
          <router-link to="/" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</router-link>
      </div>
      <div v-else class="cart-content">
        <h3 v-show="cartProductsLength == 1" class="cart__products-title">There is {{ cartProductsLength }} product in your cart.</h3>
        <h3 v-show="cartProductsLength > 1" class="cart__products-title">There are {{ cartProductsLength }} products in your cart.</h3>
        <hr>
        <div class="cart-steps">
            <div class="step step-one">
                <button class="step-btn active" @click="stepOneClick">1</button>
                <span class="active">Products</span>
            </div>
            <div class="step-line line-first"><figure :class="{'active': stepTwo}"></figure></div>
            <div class="step step-two">
                <button class="step-btn" @click="stepTwoClick" :class="{'active': stepTwo}">
                    2
                </button>
                <span :class="{'active': stepTwo}">Address</span>
            </div>
            <div class="step-line line-second"><figure :class="{'active': stepThree}"></figure></div>
            <div class="step step-three">
                <button @click="addressValidate ? stepThreeClick() : null" class="step-btn" :class="{'active': stepThree}">
                    3
                </button>
                <span :class="{'active': stepThree}">Summary</span>
            </div>
        </div>
        <div class="cart__btns">
            <button v-show="cartClient || cartSummary" @click="goBack" class="w3-button w3-black w3-padding-large w3-large back-btn">
                <i class="fa fa-caret-left"></i>
                BACK
            </button>
            <button 
                @click="goForeward" 
                class="w3-button w3-black w3-padding-large w3-large continue-btn" 
                :title="addressValidate === false && cartClient === true ? 'Fill all inputs!' : ''" 
                :disabled="!addressValidate && cartClient"
            >
                {{ continueBtnText }}
                <i class="fa fa-caret-right"></i>
            </button>
        </div>
        <hr>
        <CartProducts v-if="cartProducts"/>
        <CartClient v-if="cartClient" />
        <CartSummary v-if="cartSummary" v-on:edit-products="stepOneClick()" v-on:edit-infos="stepTwoClick()"/>
        <div class="buy-confirm" v-show="questionModal">
            <div class="question-box" v-show="questionModal">
                <i class="fa fa-question"></i>
                <hr>
                <p class="question-text">Are you sure all informations are correct?</p>
                <div class="question-btns">
                    <button @click="questionModal = false" class="question-btn w3-button w3-black w3-padding-large w3-large">CANCEL</button>
                    <button @click="confirmQuestion" class="question-btn w3-button w3-black w3-padding-large w3-large">CONFIRM</button>
                </div>
            </div>
        </div>
      </div>
      <ConfirmPayment v-show="confirmPayment"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Action, Getter } from 'vuex-class';
import Component from 'vue-class-component';
import CartProducts from '../components/cart-components/CartProducts';
import CartClient from '../components/cart-components/CartClient';
import CartSummary from '../components/cart-components/CartSummary';
import ConfirmPayment from '../components/cart-components/ConfirmPayment';

@Component({
    components: {
        CartProducts,
        CartClient,
        CartSummary,
        ConfirmPayment
    }
})
export default class Cart extends Vue {
    stepTwo = false;
    stepThree = false;

    cartProducts = true;
    cartClient = false;
    cartSummary = false;

    continueBtnText = "CONTINUE";

    questionModal = false;
    confirmPayment = false;

    @Getter cartProductsLength
    @Getter addressValidate
    @Action clearCart

    stepOneClick() {
        this.stepTwo = false;
        this.stepThree = false;

        this.changeView(true, false, false, "CONTINUE");
    }

    stepTwoClick() {
        this.stepThree = false;
        this.stepTwo == false ? this.stepTwo = !this.stepTwo : this.stepTwo = true;

        this.changeView(false, true, false, "CONTINUE");
    }

    stepThreeClick() {
        this.stepThree == false && this.stepTwo == true ? this.stepThree = !this.stepThree : this.stepThree = true;

        this.changeView(false, false, true, "BUY IT");
    }

    changeView(viewProducts, viewClient, viewSummary, btnText) {
        this.cartProducts = viewProducts;
        this.cartClient = viewClient;
        this.cartSummary = viewSummary;
        this.continueBtnText = btnText;
    }

    goBack() {
        this.cartSummary ? this.stepTwoClick() : this.stepOneClick();
    }

    goForeward() {
        this.cartProducts ? this.stepTwoClick() : 
            this.cartClient && this.addressValidate ? this.stepThreeClick() : 
            this.cartClient && !this.addressValidate ? console.log('Fill the inputs!') : 
            this.questionModal = true;
    }

    confirmQuestion() {
        this.questionModal = false;
        this.confirmPayment = true;
        this.clearCart();
    }
}
</script>

<style scoped lang="scss">
.cart {
    padding: 10px;

    .cart__empty {
        margin: 100px 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        i {
            font-size: 200px;
            animation: cart-anim 1s ease-in forwards;
        }

        .cart__empty-title {
            margin-bottom: 30px;
            text-align: center;
        }
    }
}

.cart-content { min-height: 600px; }

.cart__btns {
    width: 100%;
    display: flex;

    .back-btn, .continue-btn {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        i {
            position: absolute;
            font-size: 25px;
            bottom: 14px;
            transition: left .3s, right .3s;
        }
    }

    .back-btn {
        margin-right: auto;
        i { left: 10px; }
    }

    .continue-btn {
        margin-left: auto;
         i { right: 10px; }
    }

    .back-btn:hover { i { left: 2px; } }
    .continue-btn:hover { i { right: 2px; } }
}

.cart-steps {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 30px 0 60px 0;

    .step-line {
        width: 20%;
        height: 3px;
        margin: 0 30px;
        background: #B9B9B9;

        figure {
            width: 0;
            height: 100%;
            background: #000;
            margin: 0;
            transition: width .3s;
        }

        figure.active {
            width: 100%;
        }
    }

    .step {
        position: relative;

        .step-btn {
            height: 50px;
            width: 50px;
            border: none;
            border-radius: 50%;
            background: #B9B9B9;
            color: #ffffff;
            font-size: 22px;
            cursor: pointer;
            transition: background .3s;
        }

        .step-btn.active {
            background: #000;
        }

        span {
            position: absolute;
            bottom: -35px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 18px;
            color: #B9B9B9;
            opacity: 0;
            transition: opacity .3s, color .3s;
        }

        span.active {
            color: #000;
            opacity: 1;
        }
    }

    .step:hover {
        span {
            opacity: 1;
        }
    }
}

@keyframes cart-anim {
    0% {
        transform: translateX(-300px);
    }

    100% {
        transform: translateX(-15px);
    }
}

@media (max-width: 567px ) {
    .cart__empty {
        margin: 40px 10px;
    }
}

@media (max-width: 420px ) {
    .cart__empty-title {
        font-size: 24px;
    }
}
</style>

<style lang="scss">

.buy-confirm {
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .question-box {
        background: #fff;
        opacity: 0;
        width: 500px;
        height: 240px;
        padding: 10px 15px;
        display: flex;
        flex-direction: column;
        animation: fade-in .8s forwards .1s;

        i {  font-size: 60px;  }

        hr { margin: 5px 0 0 0; }

        .question-text {
            font-size: 18px;
            text-align: center;
        }

        .question-btns {
            margin-top: auto;
            width: 100%;
            text-align: center;

            .question-btn { width: 150px; }

            .question-btn:nth-of-type(1) { margin-right: 20px; }
        }
    }
}

.white-bg {
    background: #fff;
}
</style>