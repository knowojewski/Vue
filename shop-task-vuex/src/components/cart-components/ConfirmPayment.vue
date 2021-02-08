<template>
    <div class="buy-confirm">
        <div class="confirm-box">
            <div class="confirm-title">
                <i class="fa fa-check-circle"></i>
                <h2 class="title">Your order is completed!</h2>
            </div>
            <hr>
            <BoxAnimation />
            <p class="confirm-text">Our employees will prepare your order soon. You will be informed about it in email. There will be also included informations about tracking your order.</p>
            <router-link to="/" class="go-back w3-button w3-black w3-padding-large w3-large">BACK TO SHOP</router-link>
        </div>
    </div>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator';
import BoxAnimation from './BoxAnimation';

@Component({
    components: {
        BoxAnimation
    }
})
export default class ConfirmPayment extends Vue {
    
}
</script>

<style lang="scss" scoped>
.buy-confirm {
    background: #fff;
}

.confirm-box {
    width: 800px;
    padding: 10px;
    background: #fff;
    animation: fade-in .3s;

    .confirm-title {
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            font-size: 50px;
            margin-right: 10px;
        }

        .title { 
            opacity: 0;
            margin: 0; 
            animation: fade-right .8s forwards .3s;
        }
    }

    .confirm-text { 
        width: 80%;
        margin: 0 auto 20px auto;
        font-size: 18px;
        text-align: center;
    }

    .go-back {
        display: block;
        width: 80%;
        margin: 0 auto;
    }
}
</style>