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

    cardImageState: {
        visa: false,
        masterCard: false,
        dinersCarteBlanche: false,
        dinersInternational: false,
        JCB: false,
        maestro: false,
        amex: false,
        discover: false,
        instaPayment: false
    },

    clearFieldsState: false
}
const getters = {
    address: state => state.addressState,
    addressValidate: state => state.addressValidateState,
    invoice: state => state.invoiceState,
    invoiceValidate: state => state.invoiceValidateState,
    fieldsValidate: state => state.fieldsValidateState,
    cardImage: state => state.cardImageState,
    clearFields: state => state.clearFieldsState

}
const actions = {
    validateFirstName({ state }, value) {
        const firstNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
        value.match(firstNamePattern) ? state.fieldsValidateState.firstName = true : state.fieldsValidateState.firstName = false;
    },

    validateLastName({ state }, value) {
        const lastNamePattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-]+$/i;
        value.match(lastNamePattern) ? state.fieldsValidateState.lastName = true : state.fieldsValidateState.lastName = false;
    },

    validateCountry({ state }, value) {
        const countryPattern = /^[a-z ,.'-]+$/i;
        value.match(countryPattern) ? state.fieldsValidateState.country = true : state.fieldsValidateState.country = false;
    },

    validateZipCode({ state }, value) {
        const zipPattern = /^[0-9]{2} - [0-9]{3}$/;
        value.match(zipPattern) ? state.fieldsValidateState.zipCode = true : state.fieldsValidateState.zipCode = false
    },

    validateCity({ state }, value) {
        const cityPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ,.'-0123456789]+$/i;
        value.match(cityPattern) ? state.fieldsValidateState.city = true : state.fieldsValidateState.city = false;
    },

    validateStreet({ state }, value) {
        const streetPattern = /^[a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 ,/.'-]+$/i;
        value.match(streetPattern) ? state.fieldsValidateState.street = true : state.fieldsValidateState.street = false;
    },

    validatePhone({ state }, value) {
        const phonePattern = /^\d{9}$/;
        value.match(phonePattern) ? state.fieldsValidateState.phoneNumber = true : state.fieldsValidateState.phoneNumber = false;
    },
    
    validateEmail({ state }, value) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    value.match(emailPattern) ? state.fieldsValidateState.email = true : state.fieldsValidateState.email = false
    },

    validateCardNumber({ state }, value) {
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
            this.dispatch('changeIcon');
            state.cardImageState.visa = true;
          } else if(value.match(masterCardPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.masterCard = true;
          } else if(value.match(discoverPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.discover = true;
          } else if(value.match(amexPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.amex = true;
          } else if(value.match(dinersCarteBlanchePattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.dinersCarteBlanche = true;
          } else if(value.match(dinersInternationalPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.dinersInternational = true;
          } else if(value.match(JCBPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.JCB = true;
          } else if(value.match(instaPaymentPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.instaPayment = true;
          } else if(value.match(maestroPattern)) {
            this.dispatch('changeIcon');
            state.cardImageState.maestro = true;
          }
    
          state.fieldsValidateState.cardNumber = true;
        } else {
            state.fieldsValidateState.cardNumber = false;
        }
    },

    validateCardExpireDate({ state }, value) {
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
    },

    validateCardCode({ state }, value) {
        const codePattern = /^[0-9]{3}$/;
    
        value.match(codePattern) ? state.fieldsValidateState.specialCode = true : state.fieldsValidateState.specialCode = false
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

        valid === true ? state.addressValidateState = true : state.addressValidateState = false;
    },

    changeIcon({ state }) {
        for(const property in state.cardImageState) {
            state.cardImageState[property] = false;
        }
    }
}
const mutations = {
    clearFields: state => state.clearFieldsState = !state.clearFieldsState,
    addressValid: state => state.addressValidateState = true,
    addressInvalid: state => state.addressValidateState = false,
    invoiceValid: state => state.invoiceValidateState = true,
    invoiceInvalid: state => state.invoiceValidateState = false
}

export default {
    state,
    getters,
    actions,
    mutations
}