<template>
  <form class="cart-form invoice-form">
    <div class="ask-bg" v-if="modalAsk">
      <div class="ask-box">
        <p class="ask-text">Is invoice address the same as delivery address?</p>
        <div class="ask-btns">
          <button @click="modalAsk = false" class="ask-btn w3-button w3-black w3-padding-large w3-large">
            NO
          </button>
          <button @click="sameAddress" class="ask-btn w3-button w3-black w3-padding-large w3-large">
            YES
          </button>
        </div>
      </div>
    </div>
    <button @click.prevent="deleteInvoice" class="close-btn">
        <i class="fa fa-times"></i>
    </button>
    <div class="input-box">
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.company" required/>
        <label class="input-label">Company name</label>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="number" class="input-text input-number" v-model="invoice.NIP" required/>
        <label class="input-label">NIP</label>
        <div
          class="input-info"
          :title="NIPValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: NIPValidate === false,
            valid: NIPValidate === true,
          }"
        >
          <i v-if="NIPValidate === false" class="fa fa-times"></i>
          <i v-if="NIPValidate === true" class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.country" required/>
        <label class="input-label">Country</label>
        <div
          class="input-info"
          :title="countryValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: countryValidate === false,
            valid: countryValidate === true,
          }"
        >
          <i v-if="countryValidate === false" class="fa fa-times"></i>
          <i v-if="countryValidate === true" class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.zipCode" maxlength="8" required/>
        <label class="input-label">Zip code</label>
        <div
          class="input-info"
          :title="zipValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: zipValidate === false,
            valid: zipValidate === true,
          }"
        >
          <i v-if="zipValidate === false" class="fa fa-times"></i>
          <i v-if="zipValidate === true" class="fa fa-check"></i>
        </div>
      </div>
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.city" required/>
        <label class="input-label">City</label>
        <div
          class="input-info"
          :title="cityValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: cityValidate === false,
            valid: cityValidate === true,
          }"
        >
          <i v-if="cityValidate === false" class="fa fa-times"></i>
          <i v-if="cityValidate === true" class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.street" required/>
        <label class="input-label">Street and building number</label>
        <div
          class="input-info"
          :title="streetValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: streetValidate === false,
            valid: streetValidate === true,
          }"
        >
          <i v-if="streetValidate === false" class="fa fa-times"></i>
          <i v-if="streetValidate === true" class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="number" class="input-text input-number" v-model="invoice.phoneNumber" required/>
        <label class="input-label">Phone number</label>
        <div
          class="input-info"
          :title="phoneNumberValidate === false ? 'Fill this input properly' : 'It is correct'"
          :class="{
            invalid: phoneNumberValidate === false,
            valid: phoneNumberValidate === true,
          }"
        >
          <i v-if="phoneNumberValidate === false" class="fa fa-times"></i>
          <i v-if="phoneNumberValidate === true" class="fa fa-check"></i>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input type="text" class="input-text" v-model="invoice.email" required/>
        <label class="input-label">E-mail</label>
        <div
            class="input-info"
            :title="emailValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: emailValidate === false,
              valid: emailValidate === true,
            }"
          >
            <i v-if="emailValidate === false" class="fa fa-times"></i>
            <i v-if="emailValidate === true" class="fa fa-check"></i>
          </div>
      </div>
    </div>
    <button @click="clearAllFields" class="clear-fields w3-button w3-black w3-padding-large w3-large">CLEAR</button>
  </form>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component
export default class InvoiceForm extends Vue {
    modalAsk = true;
    inputsValidate = null;
    NIPValidate = null;
    countryValidate = null;
    cityValidate = null;
    streetValidate = null;
    phoneNumberValidate = null;
    zipValidate = null;
    emailValidate = null;

    @Getter address
    @Getter invoice
    @Getter invoiceValidate
    @Mutation invoiceValid
    @Mutation invoiceInvalid

    @Watch("invoice.company")
    onCompanyChange(val, oldVal) {
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.NIP")
    onNIPChange(val, oldVal) {
      if(val !== null) {
        this.validateNIP(val);
        
        if(val.length > 10) {
          this.invoice.NIP = oldVal;
        }
      }
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.country")
    onCountryChange(val, oldVal) {
      if(val !== null) {
        this.validateCountry(val);
      }
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.zipCode")
    onZipCodeChange(val, oldVal) {
      if(val !== null) {
        const dash = " - ";
  
        if (val.length == 2 && oldVal.length == 1) {
          this.invoice.zipCode = this.invoice.zipCode.concat(dash);
        }
  
        this.validateZipCode(val);
      }
      
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.city")
    onCityChange(val, oldVal) {
      if(val !== null) {
        this.validateCity(val);
      }
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.street")
    onStreetChange(val, oldVal) {
      if(val !== null) {
        this.validateStreet(val);
      }
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.phoneNumber")
    onPhoneNumberChange(val, oldVal) {
      if(val !== null) {
        this.validatePhone(val);
        if(val.length > 9) {
          this.invoice.phoneNumber = oldVal;
        }
      }
      this.validateInputs();
      this.validateForm();
    }
    @Watch("invoice.email")
    onEmailChange(val, oldVal) {
      if(val !== null) {
        this.validateEmail(val);
      }

      this.validateInputs();
      this.validateForm();
    }

    deleteInvoice() {
        this.$emit('delete-invoice');
        this.modalAsk = true;
        this.inputsValidate = null;
        this.NIPValidate = null;
        this.countryValidate = null;
        this.cityValidate = null;
        this.streetValidate = null;
        this.phoneNumberValidate = null;
        this.zipValidate = null;
        this.emailValidate = null;

        for(const property in this.invoice){
          this.invoice[property] = null;
        }
    }

    sameAddress() {
        this.modalAsk = false;
        this.invoice.city = this.address.city;
        this.invoice.country = this.address.country;
        this.invoice.street = this.address.street;
        this.invoice.zipCode = this.address.zipCode;
        this.invoice.phoneNumber = this.address.phoneNumber;
        this.invoice.email = this.address.email;
    }

    validateForm() {
      this.inputsValidate && this.zipValidate && this.emailValidate && this.countryValidate && this.cityValidate && this.streetValidate && this.phoneNumberValidate && this.NIPValidate ? 
        this.invoiceValid() :
        this.invoiceInvalid();

        this.$emit('validate-both-forms');
    }

    validateInputs() {
      for (const property in this.invoice) {
        if (this.invoice[property]) {
          this.inputsValidate = true;
        } else {
          this.inputsValidate = false;
          break;
        }
      }
    }

    validateNIP(value) {
      const NIPPattern = /^[0-9]{10}$/;

      let changedNumber = value.split('').map(digit => parseInt(digit));
      let sum = 0;
      sum = changedNumber[0]*6 + changedNumber[1]*5 + 
            changedNumber[2]*7 + changedNumber[3]*2 + 
            changedNumber[4]*3 + changedNumber[5]*4 + 
            changedNumber[6]*5 + changedNumber[7]*6 + 
            changedNumber[8]*7;

      if(sum % 11 == changedNumber[9] && value.match(NIPPattern)){
        this.NIPValidate = true;
      } else {
        this.NIPValidate = false;
      }
    }

    validateCountry(value) {
    const countryPattern = /^[a-z ,.'-]+$/i;
    value.match(countryPattern) ? this.countryValidate = true : this.countryValidate = false;
    }

    validateCity(value) {
      const cityPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
      value.match(cityPattern) ? this.cityValidate = true : this.cityValidate = false;
    }

    validateStreet(value) {
      const streetPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ,/.'-]+$/i;
      value.match(streetPattern) ? this.streetValidate = true : this.streetValidate = false;
    }

    validatePhone(value) {
      const phonePattern = /^\d{9}$/;
      value.match(phonePattern) ? this.phoneNumberValidate = true : this.phoneNumberValidate = false;
    }

    validateZipCode(value) {
      const zipPattern = /^[0-9]{2} - [0-9]{3}$/;

      value.match(zipPattern) ? this.zipValidate = true : this.zipValidate = false;
    }

    validateEmail(value) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value.match(emailPattern) ? this.emailValidate = true : this.emailValidate = false;
  }

  clearAllFields() {
    for(const property in this.invoice) { this.invoice[property] = '' }
  }

  mounted() {
    for(const property in this.invoice) {
      if(this.invoice[property] !== '' && this.invoice[property] !== null) {
        this.modalAsk = false;
        this.validateInputs();

        if(this.invoice.NIP) {
          this.validateNIP(this.invoice.NIP);
        }

        if(this.invoice.country) {
          this.validateCountry(this.invoice.country);
        }

        if(this.invoice.city) {
          this.validateCity(this.invoice.city);
        }

        if(this.invoice.phoneNumber) {
          this.validatePhone(this.invoice.phoneNumber);
        }

        if(this.invoice.street) {
          this.validateStreet(this.invoice.street);
        }

        if(this.invoice.zipCode) {
          this.validateZipCode(this.invoice.zipCode);
        }

        if(this.invoice.email) {
          this.validateEmail(this.invoice.email);
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.invoice-form {
    position: relative;
    animation: fade-down .8s;

    .close-btn {
        position: absolute;
        height: 30px;
        width: 30px;
        top: -14px;
        right: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        background: #000;
        margin: 0;
        padding: 0;
        cursor: pointer;
        color: #ffffff;
        transition: color .3s, background .3s;;

        i {
            font-size: 20px;
        }
    }

    .close-btn:hover {
        background:#b9b9b9;
        color: #000;
    }
}

.ask-bg {
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: calc(100% + 15px);
    background: rgba(0, 0, 0, 0.734);
    opacity: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fade-in .5s forwards .8s;

    .ask-box {
        width: 80%;
        padding: 20px;
        background: #fff;
        text-align: center;

        .ask-btns {
            .ask-btn {
                margin: 0 10px;
                width: 100px;
            }
        }
    }
}

</style>