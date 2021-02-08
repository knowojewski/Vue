const state = {
    addressState: {
        firstName: null,
        lastName: null,
        country: null,
        zipCode: null,
        city: null,
        street: null,
        phoneNumber: null,
        email: null,
        cardNumber: null,
        expireDate: null,
        specialCode: null
    },

    invoiceState: {
        company: null,
        NIP: null,
        country: null,
        zipCode: null,
        city: null,
        street: null,
        phoneNumber: null,
        email: null
    },

    addressValidateState: false,
    invoiceValidateState: false,
    fieldsValidateState: {
        inputsValidate: null,
        firstName: null,
        lastName: null,
        country: null,
        zipCode: null,
        city: null,
        street: null,
        phoneNumber: null,
        email: null,
        cardNumber: null,
        expireDate: null,
        specialCode: null
    },

    invoiceFieldsValidateState: {
        inputsValidate: null,
        NIP: null,
        country: null,
        zipCode: null,
        city: null,
        street: null,
        phoneNumber: null,
        email: null
    },

    cardImageSrcState: {
      src: '',
      title: ''
    },

    clearFieldsState: false,
    clearInvoiceFieldsState: false,

    invoiceSameAddressState: false,

    invoiceFormState: false,
}

const getters = {
    address: state => state.addressState,
    addressValidate: state => state.addressValidateState,
    invoice: state => state.invoiceState,
    invoiceValidate: state => state.invoiceValidateState,
    fieldsValidate: state => state.fieldsValidateState,
    invoiceFieldsValidate: state => state.invoiceFieldsValidateState,
    cardImage: state => state.cardImageState,
    cardImageSrc: state => state.cardImageSrcState,
    clearFields: state => state.clearFieldsState,
    clearInvoiceFields: state => state.clearInvoiceFieldsState,
    invoiceForm: state => state.invoiceFormState,
    invoiceSameAddress: state => state.invoiceSameAddressState
}

const actions = {
    validateFirstName({ state, dispatch }, {value, addressInfo}) {
      state.addressState.firstName = addressInfo;

      if(value !== null) {
        const firstNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
        value.match(firstNamePattern) ? state.fieldsValidateState.firstName = true : state.fieldsValidateState.firstName = false;
      }

      dispatch('validateInputs');
      dispatch('validateBothForms');
    },

    validateLastName({ state, dispatch }, {value, addressInfo}) {
      state.addressState.lastName = addressInfo;

      if(value !== null) {
        const lastNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
        value.match(lastNamePattern) ? state.fieldsValidateState.lastName = true : state.fieldsValidateState.lastName = false;
      }

      dispatch('validateInputs');
      dispatch('validateBothForms');
    },

    validateCountry({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const countryPattern = /^[a-z ,.'-]+$/i;
        if(!invoice) {
          state.addressState.country = addressInfo;
          value.match(countryPattern) ? state.fieldsValidateState.country = true : state.fieldsValidateState.country = false;
          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.country = addressInfo;
          value.match(countryPattern) ? state.invoiceFieldsValidateState.country = true : state.invoiceFieldsValidateState.country = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        }
      }

    },

    validateZipCode({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const zipPattern = /^[0-9]{2} - [0-9]{3}$/;

        if(!invoice) {
          state.addressState.zipCode = addressInfo;
          value.match(zipPattern) ? state.fieldsValidateState.zipCode = true : state.fieldsValidateState.zipCode = false;

          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.zipCode = addressInfo;
          value.match(zipPattern) ? state.invoiceFieldsValidateState.zipCode = true : state.invoiceFieldsValidateState.zipCode = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        }
      }
    },

    validateCity({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const cityPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-0123456789]+$/i;
        if(!invoice) {
          state.addressState.city = addressInfo;
          value.match(cityPattern) ? state.fieldsValidateState.city = true : state.fieldsValidateState.city = false;

          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.city = addressInfo;
          value.match(cityPattern) ? state.invoiceFieldsValidateState.city = true : state.invoiceFieldsValidateState.city = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        }
      }
    },

    validateStreet({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const streetPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ,/.'-]+$/i;
        if(!invoice) {
          state.addressState.street = addressInfo;
          value.match(streetPattern) ? state.fieldsValidateState.street = true : state.fieldsValidateState.street = false;

          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.street = addressInfo;
          value.match(streetPattern) ? state.invoiceFieldsValidateState.street = true : state.invoiceFieldsValidateState.street = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        } 
      }
    },

    validatePhone({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const phonePattern = /^\d{9}$/;
        if(!invoice) {
          state.addressState.phoneNumber = addressInfo;
          value.match(phonePattern) ? state.fieldsValidateState.phoneNumber = true : state.fieldsValidateState.phoneNumber = false;

          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.phoneNumber = addressInfo;
          value.match(phonePattern) ? state.invoiceFieldsValidateState.phoneNumber = true : state.invoiceFieldsValidateState.phoneNumber = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        }
      }
    },
    
    validateEmail({ state, dispatch }, {value, invoice, addressInfo}) {
      if(value !== null) {
        const emailPattern = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!invoice) {
          state.addressState.email = addressInfo;
          value.match(emailPattern) ? state.fieldsValidateState.email = true : state.fieldsValidateState.email = false;

          dispatch('validateInputs');
          dispatch('validateBothForms');

        } else if(invoice) {
          state.invoiceState.email = addressInfo;
          value.match(emailPattern) ? state.invoiceFieldsValidateState.email = true : state.invoiceFieldsValidateState.email = false;

          dispatch('validateInvoiceInputs');
          dispatch('validateInvoiceForm');
        }
      }
    },

    validateCardNumber({ state, dispatch }, {value, addressInfo}) {
      state.addressState.cardNumber = addressInfo;

      if(value !== null) {
        const cardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|30[0-5][0-9]{11}|36[0-9]{12}|6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}(?:[0-9]{3})?|35[2-8][0-9]{13}(?:[0-9]{3})?|63[7-9][0-9]{13}|(?:5018|5020|5038|5893|6304|6759|676[1-3])[0-9]{12}(?:[0-9]{3})?)$/;
    
        const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/;
        const masterCardPattern = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
        const amexPattern = /^3[47][0-9]{13}$/;
        const dinersCarteBlanchePattern = /^30[0-5][0-9]{11}$/;
        const dinersInternationalPattern = /^36[0-9]{12}$/;
        const discoverPattern = /^6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}(?:[0-9]{3})?$/;
        const JCBPattern = /^35[2-8][0-9]{13}(?:[0-9]{3})?$/;
        const instaPaymentPattern = /^63[7-9][0-9]{13}$/;
        const maestroPattern = /^(?:5018|5020|5038|5893|6304|6759|676[1-3])[0-9]{12}(?:[0-9]{3})?$/;
    
        let sum = 0;
        let valueArray = value.split('');
        const lastNumber = valueArray.pop();
        valueArray.reverse();
    
        let result = valueArray.map((digit, index) => {
          if((index + 1) % 2 == 1) { digit = digit*2 }
          if(digit > 9) { digit -= 9 }
          let intDigit = parseInt(digit);
          sum += intDigit;
          
          return sum;
        }).pop();
    
        if(value.match(cardPattern) && (result*9) % 10 == lastNumber) {
          if(value.match(visaPattern)) {
            state.cardImageSrcState.src = '/img/visa.3a201845.png';
            state.cardImageSrcState.title = 'Visa';
          } else if(value.match(masterCardPattern)) {
            state.cardImageSrcState.src = '/img/mastercard.6eb50493.png';
            state.cardImageSrcState.title = 'MasterCard';
          } else if(value.match(discoverPattern)) {
            state.cardImageSrcState.src = '/img/discover.99739a39.png';
            state.cardImageSrcState.title = 'Discover';
          } else if(value.match(amexPattern)) {
            state.cardImageSrcState.src = '/img/american-express.23138710.png';
            state.cardImageSrcState.title = 'American express';
          } else if(value.match(dinersCarteBlanchePattern)) {
            state.cardImageSrcState.src = '/img/carte-blanche.c2441e2d.png';
            state.cardImageSrcState.title = 'Carte Blanche';
          } else if(value.match(dinersInternationalPattern)) {
            state.cardImageSrcState.src = '/img/diners-club.1806fc50.png';
            state.cardImageSrcState.title = 'Diners Club';
          } else if(value.match(JCBPattern)) {
            state.cardImageSrcState.src = '/img/jcb.bb02d2b0.png';
            state.cardImageSrcState.title = 'JCB';
          } else if(value.match(instaPaymentPattern)) {
            state.cardImageSrcState.src = '/img/instapayment.87562359.jpg';
            state.cardImageSrcState.title = 'Insta Payment';
          } else if(value.match(maestroPattern)) {
            state.cardImageSrcState.src = '/img/maestro.54b13751.png';
            state.cardImageSrcState.title = 'Maestro';
          }
    
          state.fieldsValidateState.cardNumber = true;
        } else {
            state.fieldsValidateState.cardNumber = false;
        }
      }

      dispatch('validateInputs');
      dispatch('validateBothForms');
    },

    validateCardExpireDate({ state, dispatch }, {value, addressInfo}) {
      state.addressState.expireDate = addressInfo;

      if(value !== null) {
        const expirePattern = /^(?:0[1-9]|1[12])[/][0-9]{2}$/;
    
        const todayDate = new Date();
        const todayMonth = todayDate.getMonth()+1;
        const todayYear = todayDate.getFullYear();
    
        let todayYearLastDigits = Array.from(String(todayYear), Number);
        todayYearLastDigits = Number(todayYearLastDigits.splice(2, 2).join(''));
    
        const expireMonth = Number(value.split('').splice(0, 2).join(''));
        const expireYear = Number(value.split('').splice(3, 2).join(''));
    
        if(value.match(expirePattern) && expireYear >= todayYearLastDigits) {
          if(expireYear === todayYearLastDigits && expireMonth < todayMonth) {
            state.fieldsValidateState.expireDate = false;
          } else {
            state.fieldsValidateState.expireDate = true;
          }
        } else {    
            state.fieldsValidateState.expireDate = false;
        }
      }

      dispatch('validateInputs');
      dispatch('validateBothForms');
    },

    validateCardCode({ state, dispatch }, {value, addressInfo}) {
      state.addressState.specialCode = addressInfo;

      if(value !== null) {
        const codePattern = /^[0-9]{3}$/;
        value.match(codePattern) ? state.fieldsValidateState.specialCode = true : state.fieldsValidateState.specialCode = false
      }

      dispatch('validateInputs');
      dispatch('validateBothForms');
    },

    validateCompany({ state, dispatch }, addressInfo) {
      state.invoiceState.company = addressInfo;
      dispatch('validateInvoiceInputs');
      dispatch('validateInvoiceForm');
    },

    validateNIP({ state, dispatch }, {value, addressInfo}) {
      state.invoiceState.NIP = addressInfo;

      if(value !== null) {
        const NIPPattern = /^[0-9]{10}$/;
  
        let changedNumber = value.split('').map(digit => parseInt(digit));
        let sum = 0;
        sum = changedNumber[0]*6 + changedNumber[1]*5 + 
              changedNumber[2]*7 + changedNumber[3]*2 + 
              changedNumber[4]*3 + changedNumber[5]*4 + 
              changedNumber[6]*5 + changedNumber[7]*6 + 
              changedNumber[8]*7;
  
        if(sum % 11 == changedNumber[9] && value.match(NIPPattern)){
          state.invoiceFieldsValidateState.NIP = true;
        } else {
          state.invoiceFieldsValidateState.NIP = false;
        }
      }

      dispatch('validateInvoiceInputs');
      dispatch('validateInvoiceForm');
    },

    validateInputs({ state }) {
        for (const property in state.addressState) {
          if (state.addressState[property]) {
            state.fieldsValidateState.inputsValidate = true;
          } else {
            state.fieldsValidateState.inputsValidate = false;
            break;
          }
        }
    },

    validateInvoiceInputs({ state }) {
      for (const property in state.invoiceState) {
        if (state.invoiceState[property]) {
          state.invoiceFieldsValidateState.inputsValidate = true;
        } else {
          state.invoiceFieldsValidateState.inputsValidate = false;
          break;
        }
      }
    },

    validateInvoiceForm({ state }) {
      let valid = false;

        for(const property in state.invoiceFieldsValidateState) {
            if(state.invoiceFieldsValidateState[property] === true) {
                valid = true;
            } else {
                valid = false;
                break;
            }
        }

        valid === true && state.invoiceFieldsValidateState.inputsValidate === true ? 
            state.invoiceValidateState = true : state.invoiceValidateState = false;

      this.dispatch("validateBothForms");
    },

    validateBothForms({ state }) {
        let valid = false;

        for(const property in state.fieldsValidateState) {
            if(state.fieldsValidateState[property] === true) {
                valid = true;
            } else {
                valid = false;
                break;
            }
        }

        if(!state.invoiceFormState) {
          valid === true ? state.addressValidateState = true : state.addressValidateState = false;
        } else if(state.invoiceFormState) {
          valid === true && state.invoiceValidateState === true ? state.addressValidateState = true : state.addressValidateState = false;
        }
    }
}
const mutations = {
    clearFields: state => state.clearFieldsState = !state.clearFieldsState,
    clearInvoiceFields: state => state.clearInvoiceFieldsState = !state.clearInvoiceFieldsState,
    addressValid: state => state.addressValidateState = true,
    addressInvalid: state => state.addressValidateState = false,
    invoiceValid: state => state.invoiceValidateState = true,
    invoiceInvalid: state => state.invoiceValidateState = false,
    invoiceFormToggle: state => state.invoiceFormState = !state.invoiceFormState,
    invoiceSameAddressToggle: state => state.invoiceSameAddressState = !state.invoiceSameAddressState
}

export default {
    state,
    getters,
    actions,
    mutations
}