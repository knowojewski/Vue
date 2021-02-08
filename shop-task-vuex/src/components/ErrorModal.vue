<template>
  <div v-if="getError !== ''" class="error-bg">
      <div class="error-box">
        <i class="fa fa-exclamation"></i>
        <h1 class="error-message">{{ getError }}</h1>
      </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import {Getter} from 'vuex-class';

@Component
export default class ShopList extends Vue {
  @Getter getError
}
</script>

<style lang="scss">
.error-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.775);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;

    .error-box {
        background: #fff;
        text-align: center;
        padding: 100px 50px;

        i {
            transform-origin: bottom;
            font-size: 160px;
            animation: icon-anim 1.5s linear;
        }

        .error-message{
            opacity: 0;
            animation: fade-down .8s linear forwards .5s;
        }
    }
}

@keyframes icon-anim {
    0% {
        transform: translate(0, 0) rotateZ(0);
    }

    10% {
        transform: translate(0, -10px) rotateZ(20deg);
    }

    20% {
        transform: translate(0, -20px) rotateZ(-20deg);
    }

    30% {
        transform: translate(0, -30px) rotateZ(20deg);
    }

    40% {
        transform: translate(0, -40px) rotateZ(-20deg);
    }

    100% {
        transform: translate(0, 0) rotateZ(0);
    }
}
</style>