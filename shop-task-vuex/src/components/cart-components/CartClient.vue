<template>
  <div class="cart-client">
    <form class="cart-form">
      <InfoInput input-info="First name" :invoice="false"/>
      <InfoInput input-info="Last name" :invoice="false"/>
      <InfoInput input-info="Country" :invoice="false"/>
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.firstName"
            required
          />
          <label class="input-label">First name</label>
          <div
            class="input-info"
            :title="firstNameValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: firstNameValidate === false,
              valid: firstNameValidate === true,
            }"
          >
            <i v-if="firstNameValidate === false" class="fa fa-times"></i>
            <i v-if="firstNameValidate === true" class="fa fa-check"></i>
          </div>
        </div>
      </div>
      <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.lastName"
            required
          />
          <label class="input-label">Last name</label>
          <div
            class="input-info"
            :title="lastNameValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: lastNameValidate === false,
              valid: lastNameValidate === true,
            }"
          >
            <i v-if="lastNameValidate === false" class="fa fa-times"></i>
            <i v-if="lastNameValidate === true" class="fa fa-check"></i>
          </div>
        </div>
      </div> -->
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.country"
            required
          />
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
      </div> -->
      <div class="inputs-box">
        <InfoInput input-info="Zip code" :invoice="false"/>
        <InfoInput input-info="City" :invoice="false"/>
        <!-- <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.zipCode"
            maxlength="8"
            required
          />
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
        </div> -->
        <!-- <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.city"
            required
          />
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
        </div> -->
      </div>
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.street"
            required
          />
          <label class="input-label">Street and House number</label>
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
      </div> -->
      <InfoInput input-info="Street and House number" :invoice="false"/>
      <InfoInput input-info="Phone number" :invoice="false"/>
      <InfoInput input-info="E-mail" :invoice="false"/>
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="number"
            class="input-text input-number"
            v-model="address.phoneNumber"
            required
          />
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
      </div> -->
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.email"
            required
          />
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
      </div> -->
      <h5 class="form-text">Card informations:</h5>
      <InfoInput input-info="Card number" :invoice="false"/>
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="number"
            class="input-text input-number"
            v-model="address.cardNumber"
            maxlength="16"
            required
          />
          <label class="input-label">Card number</label>
          <div
            class="input-info"
            :title="cardNumberValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: cardNumberValidate === false,
              valid: cardNumberValidate === true,
            }"
          >
            <i v-if="cardNumberValidate === false" class="fa fa-times"></i>
            <i v-if="cardNumberValidate === true" class="fa fa-check"></i>
            <div>
              <img v-if="cardNumberValidate === true && visa === true" src="../../assets/card-icons/visa.png" alt="Visa Icon" title="Visa">
              <img v-if="cardNumberValidate === true && masterCard === true" src="../../assets/card-icons/mastercard.png" alt="Mastercard Icon" title="MasterCard">
              <img v-if="cardNumberValidate === true && discover === true" src="../../assets/card-icons/discover.png" alt="Discover Icon" title="Discover">
              <img v-if="cardNumberValidate === true && maestro === true" src="../../assets/card-icons/maestro.png" alt="Maestro Icon" title="Maestro">
              <img v-if="cardNumberValidate === true && JCB === true" src="../../assets/card-icons/jcb.png" alt="JCB Icon" title="JCB">
              <img v-if="cardNumberValidate === true && dinersCarteBlanche === true" src="../../assets/card-icons/carte-blanche.png" alt="Carte Blanche Icon" title="Carte Blanche">
              <img v-if="cardNumberValidate === true && dinersInternational === true" src="../../assets/card-icons/diners-club.png" alt="Diners International Icon" title="Diners International">
              <img v-if="cardNumberValidate === true && amex === true" src="../../assets/card-icons/american-express.png" alt="American Express Icon" title="American Express">
              <img class="instapayment" v-if="cardNumberValidate === true && instaPayment === true" src="../../assets/card-icons/instapayment.jpg" alt="Instapayment Icon" title="Instapayment">
            </div>
          </div>
        </div>
      </div> -->
      <div class="inputs-box">
        <InfoInput input-info="MM/YY" :invoice="false" />
        <InfoInput input-info="CVV/CVC" :invoice="false" />
      </div>
      <!-- <div class="input-box">
        <div class="input">
          <input
            type="text"
            class="input-text"
            v-model="address.expireDate"
            maxlength="5"
            required
          />
          <label class="input-label">MM/YY</label>
          <div
            class="input-info"
            :title="cardExpireValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: cardExpireValidate === false,
              valid: cardExpireValidate === true,
            }"
          >
            <i v-if="cardExpireValidate === false" class="fa fa-times"></i>
            <i v-if="cardExpireValidate === true" class="fa fa-check"></i>
          </div>
        </div>
        <div class="input">
          <input
            type="number"
            class="input-text input-number"
            v-model="address.specialCode"
            required
          />
          <label class="input-label">CVV/CVC</label>
          <div
            class="input-info"
            :title="cardCodeValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
              invalid: cardCodeValidate === false,
              valid: cardCodeValidate === true,
            }"
          >
            <i v-if="cardCodeValidate === false" class="fa fa-times"></i>
            <i v-if="cardCodeValidate === true" class="fa fa-check"></i>
          </div>
        </div>
      </div> -->
      <button @click.prevent="clearAllFields" class="clear-fields w3-button w3-black w3-padding-large w3-large">CLEAR</button>
    </form>

    <div v-show="!invoiceForm" class="invoice-box">
      <p class="invoice-text">Add address for invoice</p>
      <button
        @click="invoiceForm = !invoiceForm; validateBothForms();"
        class="add-invoice w3-button w3-black w3-padding-large w3-large"
      >
        ADD
      </button>
    </div>
    <InvoiceForm
      v-show="invoiceForm"
      v-on:delete-invoice="invoiceForm = !invoiceForm; validateBothForms();"
      v-on:validate-both-forms="validateBothForms();"
    />
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";
import InvoiceForm from "./InvoiceForm";
import InfoInput from './client-components/InfoInput';

@Component({
  components: {
    InvoiceForm,
    InfoInput
  },
})
export default class CartClient extends Vue {
  invoiceForm = false;
  @Getter address;
  @Getter invoice;
  @Getter addressValidate;
  @Getter invoiceValidate;
  @Getter fieldsValidate;
  @Mutation clearFields;
  @Mutation addressValid;
  @Mutation addressInvalid;

  // inputsValidate = null;
  // firstNameValidate = null;
  // lastNameValidate = null;
  // countryValidate = null;
  // cityValidate = null;
  // streetValidate = null;
  // phoneNumberValidate = null;
  // zipValidate = null;
  // emailValidate = null;
  // cardNumberValidate = null;
  // cardExpireValidate = null;
  // cardCodeValidate = null;

  // visa = false;
  // masterCard = false;
  // dinersCarteBlanche = false;
  // dinersInternational = false;
  // JCB = false;
  // maestro = false;
  // amex = false;
  // discover = false;
  // instaPayment = false;

  // @Watch("address.firstName")
  // onFirstNameChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateFirstName(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.lastName")
  // onLastNameChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateLastName(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.country")
  // onCountryChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateCountry(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.zipCode")
  // onZipCodeChange(val, oldVal) {
  //   const regex = /^[0-9]* *-? *[0-9]*$/;

  //   if(val !== null) {
  //     const dash = " - ";

  //     if(!val.match(regex)) {
  //       this.address.zipCode = oldVal;
  //     } else {
  //       if (val.length == 2 && oldVal.length == 1) {
  //         this.address.zipCode = this.address.zipCode.concat(dash);
  //       }
  //     }
  
  //     this.validateZipCode(val);
  //   }

  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.city")
  // onCityChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateCity(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.street")
  // onStreetChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateStreet(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.phoneNumber")
  // onPhoneNumberChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validatePhone(val);
  //     if(val.length > 9) {
  //       this.address.phoneNumber = oldVal;
  //     }
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.email")
  // onEmailChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateEmail(val);
  //   }

  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.cardNumber")
  // onCardNumberChange(val, oldVal) {
  //   if(val !== null) {
  //     this.validateCardNumber(val);
  //     if(val.length > 19) {
  //       this.address.cardNumber = oldVal;
  //     }
  //   }
    
  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.expireDate")
  // onExpireDateChange(val, oldVal) {
  //   const regex = /^[0-9]*\/?[0-9]*$/;

  //   if(val !== null) {
  //     const slash = '/';

  //     if(!val.match(regex)) {
  //       this.address.expireDate = oldVal;
  //     } else {
  //       if (val.length == 2 && oldVal.length == 1) {
  //         this.address.expireDate = this.address.expireDate.concat(slash);
  //       }
  //     }
      
  //     this.validateCardExpireDate(val);
  //   }

  //   this.validateInputs();
  //   this.validateBothForms();
  // }
  // @Watch("address.specialCode")
  // onSpecialNumberChange(val, oldVal) {
  //   if(val.length > 3) {
  //     this.address.specialCode = oldVal;
  //   }
  //   if(val !== null) {
  //     this.validateCardCode(val);
  //   }
  //   this.validateInputs();
  //   this.validateBothForms();
  // }

  // validateBothForms() {
  //   if(this.invoiceForm) {
  //     this.inputsValidate && this.invoiceValidate && this.zipValidate &&
  //     this.cardNumberValidate && this.cardExpireValidate && this.emailValidate &&
  //     this.firstNameValidate && this.lastNameValidate && this.countryValidate &&
  //     this.cityValidate && this.streetValidate && this.phoneNumberValidate &&
  //     this.cardCodeValidate ?
  //       this.addressValid() : this.addressInvalid();
  //   } else {
  //     this.inputsValidate && this.zipValidate &&
  //     this.cardNumberValidate && this.cardExpireValidate && this.emailValidate &&
  //     this.firstNameValidate && this.lastNameValidate && this.countryValidate &&
  //     this.cityValidate && this.streetValidate && this.phoneNumberValidate && 
  //     this.cardCodeValidate ?
  //       this.addressValid() : this.addressInvalid();
  //   }
  // }

  // validateInputs() {
  //   for (const property in this.address) {
  //     if (this.address[property]) {
  //       this.inputsValidate = true;
  //     } else {
  //       this.inputsValidate = false;
  //       break;
  //     }
  //   }
  // }

  // validateFirstName(value) {
  //   const firstNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
  //   value.match(firstNamePattern) ? this.fieldsValidate.firstName = true : this.fieldsValidate.firstName = false;
  // }

  // validateLastName(value) {
  //   const lastNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
  //   value.match(lastNamePattern) ? this.lastNameValidate = true : this.lastNameValidate = false;
  // }

  // validateCountry(value) {
  //   const countryPattern = /^[a-z ,.'-]+$/i;
  //   value.match(countryPattern) ? this.countryValidate = true : this.countryValidate = false;
  // }

  // validateCity(value) {
  //   const cityPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-0123456789]+$/i;
  //   value.match(cityPattern) ? this.cityValidate = true : this.cityValidate = false;
  // }

  // validateZipCode(value) {
  //   const zipPattern = /^[0-9]{2} - [0-9]{3}$/;
  //   value.match(zipPattern) ? this.zipValidate = true : this.zipValidate = false
  // }

  // validateStreet(value) {
  //   const streetPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ,/.'-]+$/i;
  //   value.match(streetPattern) ? this.streetValidate = true : this.streetValidate = false;
  // }

  // validatePhone(value) {
  //   const phonePattern = /^\d{9}$/;
  //   value.match(phonePattern) ? this.phoneNumberValidate = true : this.phoneNumberValidate = false;
  // }

  // validateEmail(value) {
  //   const emailPattern = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   value.match(emailPattern) ? this.emailValidate = true : this.emailValidate = false
  // }

  // validateCardNumber(value) {
  //   const cardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|30[0-5][0-9]{11}|36[0-9]{12}|6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}(?:[0-9]{3})?|35[2-8][0-9]{13}(?:[0-9]{3})?|63[7-9][0-9]{13}|(?:5018|5020|5038|5893|6304|6759|676[1-3])[0-9]{12}(?:[0-9]{3})?)$/;

  //   const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/;
  //   const masterCardPattern = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
  //   const amexPattern = /^3[47][0-9]{13}$/;
  //   const dinersCarteBlanchePattern = /^30[0-5][0-9]{11}$/;
  //   const dinersInternationalPattern = /^36[0-9]{12}$/;
  //   const discoverPattern = /^6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}(?:[0-9]{3})?$/;
  //   const JCBPattern = /^35[2-8][0-9]{13}(?:[0-9]{3})?$/;
  //   const instaPaymentPattern = /^63[7-9][0-9]{13}$/;
  //   const maestroPattern = /^(?:5018|5020|5038|5893|6304|6759|676[1-3])[0-9]{12}(?:[0-9]{3})?$/;

  //   let sum = 0;
  //   let valueArray = value.split('');
  //   const lastNumber = valueArray.pop();
  //   valueArray.reverse();

  //   let result = valueArray.map((digit, index) => {
  //     if((index + 1) % 2 == 1) { digit = digit*2 }
  //     if(digit > 9) { digit -= 9 }
  //     let intDigit = parseInt(digit);
  //     sum += intDigit;
      
  //     return sum;
  //   }).pop();

  //   console.log(valueArray, lastNumber, result*9)

  //   if(value.match(cardPattern) && (result*9) % 10 == lastNumber) {
  //     if(value.match(visaPattern)) {
  //       this.changeIcon();
  //       this.visa = true;
  //     } else if(value.match(masterCardPattern)) {
  //       this.changeIcon();
  //       this.masterCard = true;
  //     } else if(value.match(discoverPattern)) {
  //       this.changeIcon();
  //       this.discover = true;
  //     } else if(value.match(amexPattern)) {
  //       this.changeIcon();
  //       this.amex = true;
  //     } else if(value.match(dinersCarteBlanchePattern)) {
  //       this.changeIcon();
  //       this.dinersCarteBlanche = true;
  //     } else if(value.match(dinersInternationalPattern)) {
  //       this.changeIcon();
  //       this.dinersInternational = true;
  //     } else if(value.match(JCBPattern)) {
  //       this.changeIcon();
  //       this.JCB = true;
  //     } else if(value.match(instaPaymentPattern)) {
  //       this.changeIcon();
  //       this.instaPayment = true;
  //     } else if(value.match(maestroPattern)) {
  //       this.changeIcon();
  //       this.maestro = true;
  //     }

  //     this.cardNumberValidate = true;
  //   } else {
  //     this.cardNumberValidate = false;
  //   }
  // }

  // validateCardExpireDate(value) {
  //   const expirePattern = /^(?:0[1-9]|1[12])[/][0-9]{2}$/;

  //   const todayDate = new Date();
  //   const todayMonth = todayDate.getMonth()+1;
  //   const todayYear = todayDate.getFullYear();

  //   let todayYearLastDigits = Array.from(String(todayYear), Number);
  //   todayYearLastDigits = Number(todayYearLastDigits.splice(2, 2).join(''));

  //   const expireMonth = Number(value.split('').splice(0, 2).join(''));
  //   const expireYear = Number(value.split('').splice(3, 2).join(''));

  //   console.log(todayMonth, expireMonth, todayYearLastDigits, expireYear);

  //   if(value.match(expirePattern) && expireYear >= todayYearLastDigits) {
  //     if(expireYear === todayYearLastDigits && expireMonth < todayMonth) {
  //       this.cardExpireValidate = false;
  //     } else {
  //       this.cardExpireValidate = true;
  //     }
  //   } else {    
  //     this.cardExpireValidate = false;
  //   }
  // }

  // validateCardCode(value) {
  //   const codePattern = /^[0-9]{3}$/;

  //   value.match(codePattern) ? this.cardCodeValidate = true : this.cardCodeValidate = false
  // }

  clearAllFields() {
    for(const property in this.address) { this.address[property] = '' }
    this.clearFields();
  }

  // changeIcon() {
  //   this.visa = false;
  //   this.masterCard = false;
  //   this.dinersCarteBlanche = false;
  //   this.dinersInternational = false;
  //   this.JCB = false;
  //   this.maestro = false;
  //   this.amex = false;
  //   this.discover = false;
  //   this.instaPayment = false;
  // }

  mounted() {
    // for (const property in this.address) {
    //   if (this.address[property] !== '' && this.address[property] !== null) {
    //     this.validateInputs();

    //     if(this.address.firstName) {
    //       this.validateFirstName(this.address.firstName);
    //     }

    //     if(this.address.lastName) {
    //       this.validateLastName(this.address.lastName);
    //     }

    //     if(this.address.country) {
    //       this.validateCountry(this.address.country);
    //     }

    //     if(this.address.city) {
    //       this.validateCity(this.address.city);
    //     }

    //     if(this.address.phoneNumber) {
    //       this.validatePhone(this.address.phoneNumber);
    //     }

    //     if(this.address.street) {
    //       this.validateStreet(this.address.street);
    //     }

    //     if(this.address.zipCode) {
    //       this.validateZipCode(this.address.zipCode);
    //     }

    //     if(this.address.email) {
    //       this.validateEmail(this.address.email);
    //     }

    //     if(this.address.cardNumber) {
    //       this.validateCardNumber(this.address.cardNumber);
    //     }

    //     if(this.address.expireDate) {
    //       this.validateCardExpireDate(this.address.expireDate);
    //     }

    //     if(this.address.specialCode) {
    //       this.validateCardCode(this.address.specialCode);
    //     }
    //   }
    // }

    for(const property in this.invoice) {
      if(this.invoice[property] !== '' && this.invoice[property] !== null) {
        this.invoiceForm = true;
      }
    }
  }
}
</script>

<style lang="scss">
.cart-client {
  display: flex;
  justify-content: space-between;
  animation: fade-down 0.8s;
}

.cart-form {
  position: relative;
  width: 49%;
  padding: 20px 0 50px 0;
  margin-bottom: 30px;

  .form-text {
    margin-bottom: 15px;
  }

  .card-acceptable {
    margin: 0;
    font-size: 14px;
  }

  .card-icons {
    margin-bottom: 10px;
  }

  .clear-fields {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.inputs-box {
  width: 100%;
  display: flex;
}

.input-box {
  width: 100%;
  display: flex;
  margin-bottom: 25px;

  .input {
    position: relative;
    flex: 1;
    height: 40px;

    .input-label {
      position: absolute;
      left: 5px;
      top: 8px;
      font-size: 16px;
      color: #b9b9b9;
      transition: top 0.3s, left 0.3s, font-size 0.3s, color 0.3s;
    }

    .input-text {
      position: relative;
      background: transparent;
      width: 100%;
      height: 100%;
      border: 1px solid #b9b9b9;
      padding: 0 5px;
      outline: none;
      transition: border 0.3s;
      z-index: 1;
    }

    .input-number::-webkit-outer-spin-button,
    .input-number::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input-number {
        -moz-appearance:textfield;
    }

    .input-info {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      right: 5px;
      top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      z-index: 3;

      i {
        font-size: 20px;
      }

      img {
        width: 62px;
        height: 40px;
        margin-right: 40px;
      }
      .instapayment {
        width: 54px;
        height: 34px;
        margin-right: 40px;
      }
    }

    .invalid {
      background: rgb(255, 119, 119);
    }

    .valid {
      background: rgb(108, 169, 73);
    }

    .validate-text {
      margin: 0 0 50px 0;
    }

    .input-text:focus {
      border: none;
      border-bottom: 2px solid #000;
    }

    .input-text:focus ~ .input-label,
    .input-text:valid ~ .input-label {
      top: -15px;
      left: 0;
      font-size: 12px;
      color: #000;
    }
  }
}

.invoice-box {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fade-in 0.8s;

  .invoice-text {
    margin: 0 0 10px 0;
    font-size: 16px;
  }
}
</style>