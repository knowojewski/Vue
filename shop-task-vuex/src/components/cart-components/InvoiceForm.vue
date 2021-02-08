<template>
  <form class="cart-form invoice-form">
    <div class="ask-bg" v-if="modalAsk">
      <div class="ask-box">
        <p class="ask-text">Is invoice address the same as delivery address?</p>
        <div class="ask-btns">
          <button
            @click="modalAsk = false"
            class="ask-btn w3-button w3-black w3-padding-large w3-large"
          >
            NO
          </button>
          <button
            @click="sameAddress"
            class="ask-btn w3-button w3-black w3-padding-large w3-large"
          >
            YES
          </button>
        </div>
      </div>
    </div>
    <button @click.prevent="deleteInvoice" class="close-btn">
      <i class="fa fa-times"></i>
    </button>
    <InfoInput
      input-info="Company name"
      :invoiceCheck="true"
      :addressProp="invoice.company"
      :validate="invoiceFieldsValidate.company"
    />
    <InfoInput
      input-info="NIP"
      :invoiceCheck="true"
      :addressProp="invoice.NIP"
      :validate="invoiceFieldsValidate.NIP"
    />
    <InfoInput
      input-info="Country"
      :invoiceCheck="true"
      :addressProp="invoice.country"
      :validate="invoiceFieldsValidate.country"
    />
    <div class="inputs-box">
      <InfoInput
        input-info="Zip code"
        :invoiceCheck="true"
        :addressProp="invoice.zipCode"
        :validate="invoiceFieldsValidate.zipCode"
      />
      <InfoInput
        input-info="City"
        :invoiceCheck="true"
        :addressProp="invoice.city"
        :validate="invoiceFieldsValidate.city"
      />
    </div>
    <InfoInput
      input-info="Street and building number"
      :invoiceCheck="true"
      :addressProp="invoice.street"
      :validate="invoiceFieldsValidate.street"
    />
    <InfoInput
      input-info="Phone number"
      :invoiceCheck="true"
      :addressProp="invoice.phoneNumber"
      :validate="invoiceFieldsValidate.phoneNumber"
    />
    <InfoInput
      input-info="E-mail"
      :invoiceCheck="true"
      :addressProp="invoice.email"
      :validate="invoiceFieldsValidate.email"
    />
    <button
      @click.prevent="clearAllFields"
      class="clear-fields w3-button w3-black w3-padding-large w3-large"
    >
      CLEAR
    </button>
  </form>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter, Mutation } from "vuex-class";
import InfoInput from "./client-components/InfoInput";

@Component({
  components: {
    InfoInput,
  },
})
export default class InvoiceForm extends Vue {
  modalAsk = true;

  @Getter address;
  @Getter invoice;
  @Getter invoiceFieldsValidate;
  @Getter invoiceForm;
  @Action validateInvoiceInputs;
  @Action validateBothForms;
  @Mutation clearInvoiceFields;
  @Mutation invoiceFormToggle;
  @Mutation invoiceSameAddressToggle;

  deleteInvoice() {
    this.invoiceFormToggle();
    this.modalAsk = true;

    for (const property in this.invoiceFieldsValidate) {
      this.invoiceFieldsValidate[property] = null;
    }

    for (const property in this.invoice) {
      this.invoice[property] = null;
    }

    this.validateBothForms();
  }

  sameAddress() {
    this.modalAsk = false;
    this.invoice.city = this.address.city;
    this.invoice.country = this.address.country;
    this.invoice.street = this.address.street;
    this.invoice.zipCode = this.address.zipCode;
    this.invoice.phoneNumber = this.address.phoneNumber;
    this.invoice.email = this.address.email;
    this.invoiceSameAddressToggle();
  }

  clearAllFields() {
    for (const property in this.invoice) {
      this.invoice[property] = "";
    }

    this.clearInvoiceFields();
  }

  mounted() {
    for (const property in this.invoice) {
      if (this.invoice[property] !== "" && this.invoice[property] !== null) {
        this.modalAsk = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.invoice-form {
  position: relative;
  animation: fade-down 0.8s;

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
    transition: color 0.3s, background 0.3s;

    i {
      font-size: 20px;
    }
  }

  .close-btn:hover {
    background: #b9b9b9;
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
  animation: fade-in 0.5s forwards 0.8s;

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