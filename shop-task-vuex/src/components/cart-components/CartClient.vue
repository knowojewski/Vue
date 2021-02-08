<template>
  <div class="cart-client">
    <form class="cart-form">
      <InfoInput
        input-info="First name"
        :invoiceCheck="false"
        :addressProp="address.firstName"
        :validate="fieldsValidate.firstName"
      />
      <InfoInput
        input-info="Last name"
        :invoiceCheck="false"
        :addressProp="address.lastName"
        :validate="fieldsValidate.lastName"
      />
      <InfoInput
        input-info="Country"
        :invoiceCheck="false"
        :addressProp="address.country"
        :validate="fieldsValidate.country"
      />
      <div class="inputs-box">
        <InfoInput
          input-info="Zip code"
          :invoiceCheck="false"
          :addressProp="address.zipCode"
          :validate="fieldsValidate.zipCode"
        />
        <InfoInput
          input-info="City"
          :invoiceCheck="false"
          :addressProp="address.city"
          :validate="fieldsValidate.city"
        />
      </div>
      <InfoInput
        input-info="Street and House number"
        :invoiceCheck="false"
        :addressProp="address.street"
        :validate="fieldsValidate.street"
      />
      <InfoInput
        input-info="Phone number"
        :invoiceCheck="false"
        :addressProp="address.phoneNumber"
        :validate="fieldsValidate.phoneNumber"
      />
      <InfoInput
        input-info="E-mail"
        :invoiceCheck="false"
        :addressProp="address.email"
        :validate="fieldsValidate.email"
      />
      <h5 class="form-text">Card informations:</h5>
      <InfoInput
        input-info="Card number"
        :invoiceCheck="false"
        :addressProp="address.cardNumber"
        :validate="fieldsValidate.cardNumber"
      />
      <div class="inputs-box">
        <InfoInput
          input-info="MM/YY"
          :invoiceCheck="false"
          :addressProp="address.expireDate"
          :validate="fieldsValidate.expireDate"
        />
        <InfoInput
          input-info="CVV/CVC"
          :invoiceCheck="false"
          :addressProp="address.specialCode"
          :validate="fieldsValidate.specialCode"
        />
      </div>
      <button
        @click.prevent="clearAllFields"
        class="clear-fields w3-button w3-black w3-padding-large w3-large"
      >
        CLEAR
      </button>
    </form>

    <div v-show="!invoiceForm" class="invoice-box">
      <p class="invoice-text">Add address for invoice</p>
      <button
        @click="
          invoiceFormToggle();
          validateBothForms();
        "
        class="add-invoice w3-button w3-black w3-padding-large w3-large"
      >
        ADD
      </button>
    </div>
    <InvoiceForm v-show="invoiceForm" />
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";
import InvoiceForm from "./InvoiceForm";
import InfoInput from "./client-components/InfoInput";

@Component({
  components: {
    InvoiceForm,
    InfoInput,
  },
})
export default class CartClient extends Vue {
  @Getter address;
  @Getter invoice;
  @Getter invoiceForm;
  @Getter fieldsValidate;
  @Action validateBothForms;
  @Mutation clearFields;
  @Mutation invoiceFormToggle;

  clearAllFields() {
    for (const property in this.address) {
      this.address[property] = "";
    }
    this.clearFields();
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
      -moz-appearance: textfield;
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