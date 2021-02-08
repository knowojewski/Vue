<template>
  <div class="alert" :class="{'display': alertDisplay}">
      <p class="alert__message">Product has been added to your cart.</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

@Component
export default class Alert extends Vue {
    @Getter alertDisplay
}
</script>

<style lang="scss" scoped>
.alert {
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    min-width: 700px;
    height: 120px;
    display: none;
    justify-content: center;
    align-items: center;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

    .alert__message {
        font-size: 18px;
    }
}  

.alert.display {
    display: flex;
}

@media ( max-width: 400px ) {
    .alert {
        .alert__message {
            font-size: 14px;
        }
    }
}

</style>