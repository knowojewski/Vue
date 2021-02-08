<template>
  <div class="not-found">
      <router-link class="logo" to="/">LOGO</router-link>
      <svg width="282" height="278" viewBox="0 0 282 278" fill="none" xmlns="http://www.w3.org/2000/svg" class="shopping">
        <rect x="186.013" y="14" width="90" height="58" transform="rotate(18.0931 186.013 14)" fill="#9F9F9F" class="box-one"/>
        <rect x="81" y="58" width="121" height="78" fill="#4E4E4E" class="box-two"/>
        <rect x="148" y="94" width="96" height="62" fill="#6A6A6A" class="box-three"/>
        <rect x="103" width="90" height="58" fill="#6A6A6A" class="box-four"/>
        <path d="M258.559 178.009L281.703 79.2901C283.374 72.1624 277.785 65.375 270.245 65.375H77.9456L73.4581 44.1078C72.3399 38.8068 67.5282 35 61.9465 35H11.75C5.26057 35 0 40.0997 0 46.3906V53.9844C0 60.2753 5.26057 65.375 11.75 65.375H45.9636L80.3558 228.372C72.1279 232.96 66.5833 241.56 66.5833 251.422C66.5833 266.101 78.8582 278 94 278C109.142 278 121.417 266.101 121.417 251.422C121.417 243.983 118.26 237.262 113.18 232.438H215.82C210.74 237.262 207.583 243.983 207.583 251.422C207.583 266.101 219.858 278 235 278C250.142 278 262.417 266.101 262.417 251.422C262.417 240.899 256.107 231.805 246.956 227.499L249.657 215.978C251.328 208.85 245.74 202.062 238.199 202.062H106.786L103.582 186.875H247.101C252.587 186.875 257.343 183.195 258.559 178.009Z" fill="black" class="cart"/>
      </svg>
      <p class="message">(404) Not Found</p>
      <p class="small-message">There is no such page.</p>
      <p class="small-message">Go to our shop and don't waste your time!</p>
      <router-link to="/" class="w3-button w3-black w3-padding-large w3-large btn">SHOP NOW</router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class NotFound extends Vue {

}
</script>

<style lang="scss">
.not-found {
    background: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .logo {
        position: absolute;
        top: 20px;
        text-decoration: none;
        font-size: 30px;
    }

    .message {
        font-size: 40px;
        margin-bottom: 20px;
        opacity: 0;
        animation: fade-right .8s forwards 1.9s;
    }

    .small-message {
        margin: 0;
        opacity: 0;
        font-size: 18px;
        animation: fade-down .8s forwards 2s;
    }

    .btn {
        opacity: 0;
        margin-top: 20px;
        animation: fade-down .8s forwards 2.1s;
    }
}

.shopping {
    position: relative;
    transform-origin: 0% 100%;
    animation: cart-anim 1.5s linear forwards;
    overflow: visible;

    .box-one {
        position: absolute;
        animation: one-anim .5s linear forwards 1.4s;
    }

    .box-two {
        transform-origin: center;
        position: absolute;
        animation: two-anim .5s linear forwards 1.4s;
    }

    .box-three {
        transform-origin: center;
        position: absolute;
        animation: three-anim .5s linear forwards 1.4s;
    }

    .box-four {
        transform-origin: center;
        // transform: translate(50px, 100px);
        position: absolute;
        animation: four-anim .5s linear forwards 1.4s;
    }
}

@keyframes cart-anim {
    0% {
        transform: translateX(-150%);
    }

    80% {
        transform: translateX(110%) rotateZ(0) translateY(0);
    }

    100% {
        transform: translateX(70%) rotateZ(-70deg) translateY(150px);
    }
}

@keyframes one-anim {
    0% {
        transform: translate(0, 0) rotateZ(0);
    }

    100% {
        transform: translate(-90%, -80px) rotateZ(-20deg);
    }
}

@keyframes two-anim {
    0% {
        transform: translate(0, 0) rotateZ(0);
    }

    100% {
        transform: translate(-11%, -218px) rotateZ(-90deg);
    }
}

@keyframes three-anim {
    0% {
        transform: translate(0, 0) rotateZ(0);
    }

    100% {
        transform: translate(-18%, -70px) rotateZ(-50deg);
    }
}

@keyframes four-anim {
    0% {
        transform: translate(0, 0) rotateZ(0);
    }

    100% {
        transform: translate(-91%, -150px) rotateZ(70deg);
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-right {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-down {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>