<template>
    <div class="input-box">
        <div class="input">
            <input
            :type="inputType()"
            class="input-text"
            :class="{'input-number': inputClass()}"
            v-model="addressInfo"
            required
            />
            <label class="input-label">{{ inputInfo }}</label>
            <div
            class="input-info"
            :title="infoValidate === false ? 'Fill this input properly' : 'It is correct'"
            :class="{
                invalid: infoValidate === false,
                valid: infoValidate === true,
            }"
            >
                <i v-if="infoValidate === false" class="fa fa-times"></i>
                <i v-if="infoValidate === true" class="fa fa-check"></i>
                <div v-if="inputInfo === 'Card number'">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.visa === true" src="../../../assets/card-icons/visa.png" alt="Visa Icon" title="Visa">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.masterCard === true" src="../../../assets/card-icons/mastercard.png" alt="Mastercard Icon" title="MasterCard">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.discover === true" src="../../../assets/card-icons/discover.png" alt="Discover Icon" title="Discover">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.maestro === true" src="../../../assets/card-icons/maestro.png" alt="Maestro Icon" title="Maestro">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.JCB === true" src="../../../assets/card-icons/jcb.png" alt="JCB Icon" title="JCB">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.dinersCarteBlanche === true" src="../../../assets/card-icons/carte-blanche.png" alt="Carte Blanche Icon" title="Carte Blanche">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.dinersInternational === true" src="../../../assets/card-icons/diners-club.png" alt="Diners International Icon" title="Diners International">
                    <img v-if="fieldsValidate.cardNumber === true && cardImage.amex === true" src="../../../assets/card-icons/american-express.png" alt="American Express Icon" title="American Express">
                    <img class="instapayment" v-if="fieldsValidate.cardNumber === true && cardImage.instaPayment === true" src="../../../assets/card-icons/instapayment.jpg" alt="Instapayment Icon" title="Instapayment">
                </div>
            </div>
        </div>
        {{ addressInfo }}
    </div>
</template>

<script>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";

@Component
export default class InfoInput extends Vue {
    @Prop(String) inputInfo;
    @Prop(Boolean) invoice;
    @Getter address;
    @Getter fieldsValidate;
    @Getter cardImage;
    @Getter clearFields;
    @Action validateFirstName;
    @Action validateLastName;
    @Action validateCountry;
    @Action validateZipCode;
    @Action validateCity;
    @Action validateStreet;
    @Action validatePhone;
    @Action validateEmail;
    @Action validateCardNumber;
    @Action validateCardExpireDate;
    @Action validateCardCode;
    @Action validateInputs;
    @Action validateBothForms;

    addressInfo = null;
    infoValidate = null;

    @Watch("addressInfo")
    onInputChange(val, oldVal){
        if(this.inputInfo === 'First name' && !this.invoice) {
            this.address.firstName = this.addressInfo;

            if(val !== null) {
                this.validateFirstName(val);
            }
            
            this.infoValidate = this.fieldsValidate.firstName;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'Last name' && !this.invoice) {
            this.address.lastName = this.addressInfo;

            if(val !== null) {
                this.validateLastName(val);
            }

            this.infoValidate = this.fieldsValidate.lastName;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'Country' && !this.invoice) {
            this.address.country = this.addressInfo;

            if(val !== null) {
                this.validateCountry(val);
            }

            this.infoValidate = this.fieldsValidate.country;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'Zip code' && !this.invoice) {
            this.address.zipCode = this.addressInfo;
            const regex = /^[0-9]* *-? *[0-9]*$/;

            if(val !== null) {
                const dash = " - ";

                if(!val.match(regex) || val.length > 8) {
                    console.log('oldVal', oldVal)
                    this.addressInfo = oldVal;
                } else {
                    if (val.length == 2 && oldVal.length == 1) {
                    this.addressInfo = this.addressInfo.concat(dash);
                    }
                }

                this.validateZipCode(val);
            }

            this.infoValidate = this.fieldsValidate.zipCode;
            this.validateInputs();
            this.validateBothForms();
        
        } else if(this.inputInfo === 'City' && !this.invoice) {
            this.address.city = this.addressInfo;

            if(val !== null) {
                this.validateCity(val);
            }

            this.infoValidate = this.fieldsValidate.city;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'Street and House number' && !this.invoice) {
            this.address.street = this.addressInfo;

            if(val !== null) {
                this.validateStreet(val);
            }

            this.infoValidate = this.fieldsValidate.street;
            this.validateInputs();
            this.validateBothForms();
 
        } else if(this.inputInfo === 'Phone number' && !this.invoice) {
            this.address.phoneNumber = this.addressInfo;

            if(val !== null) {
                this.validatePhone(val);
                if(val.length > 9) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.phoneNumber;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'E-mail' && !this.invoice) {
            this.address.email = this.addressInfo;

            if(val !== null) {
                this.validateEmail(val);
            }

            this.infoValidate = this.fieldsValidate.email;
            this.validateInputs();
            this.validateBothForms();
 
        } else if(this.inputInfo === 'Card number' && !this.invoice) {
            this.address.cardNumber = this.addressInfo;

            if(val !== null) {
                this.validateCardNumber(val);
                if(val.length > 19) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.cardNumber;
            this.validateInputs();
            this.validateBothForms();

        } else if(this.inputInfo === 'MM/YY' && !this.invoice) {
            this.address.expireDate = this.addressInfo;
            const regex = /^[0-9]*\/?[0-9]*$/;

            if(val !== null) {
                const slash = '/';

                if(!val.match(regex)) {
                    this.addressInfo = oldVal;
                } else {
                    if (val.length == 2 && oldVal.length == 1) {
                    this.addressInfo = this.addressInfo.concat(slash);
                    }
                }

                if(val.length > 5) {
                    this.addressInfo = oldVal;
                }

                this.validateCardExpireDate(val);
            }

            this.infoValidate = this.fieldsValidate.expireDate;
            this.validateInputs();
            this.validateBothForms();
 
        } else if(this.inputInfo === 'CVV/CVC' && !this.invoice) {
            this.address.specialCode = this.addressInfo;

            if(val !== null) {
                this.validateCardCode(val);
                if(val.length > 3) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.specialCode;
            this.validateInputs();
            this.validateBothForms();

        }
    }

    @Watch("clearFields")
    onClear(){
        this.getInputInfos();
    }

    getInputInfos() {
        if(this.inputInfo === 'First name' && !this.invoice) {
            this.addressInfo = this.address.firstName;
            this.infoValidate = this.fieldsValidate.firstName;
        } else if(this.inputInfo === 'Last name' && !this.invoice) {
            this.addressInfo = this.address.lastName;
            this.infoValidate = this.fieldsValidate.lastName;
        } else if(this.inputInfo === 'Country' && !this.invoice) {
            this.addressInfo = this.address.country;
            this.infoValidate = this.fieldsValidate.country;
        } else if(this.inputInfo === 'Zip code' && !this.invoice) {
            this.addressInfo = this.address.zipCode;
            this.infoValidate = this.fieldsValidate.zipCode;
        } else if(this.inputInfo === 'City' && !this.invoice) {
            this.addressInfo = this.address.city;
            this.infoValidate = this.fieldsValidate.city;
        } else if(this.inputInfo === 'Street and House number' && !this.invoice) {
            this.addressInfo = this.address.street;
            this.infoValidate = this.fieldsValidate.street;
        } else if(this.inputInfo === 'Phone number' && !this.invoice) {
            this.addressInfo = this.address.phoneNumber;
            this.infoValidate = this.fieldsValidate.phoneNumber;
        } else if(this.inputInfo === 'E-mail' && !this.invoice) {
            this.addressInfo = this.address.email;
            this.infoValidate = this.fieldsValidate.email;
        } else if(this.inputInfo === 'Card number' && !this.invoice) {
            this.addressInfo = this.address.cardNumber;
            this.infoValidate = this.fieldsValidate.cardNumber;
        } else if(this.inputInfo === 'MM/YY' && !this.invoice) {
            this.addressInfo = this.address.expireDate;
            this.infoValidate = this.fieldsValidate.expireDate;
        } else if(this.inputInfo === 'CVV/CVC' && !this.invoice) {
            this.addressInfo = this.address.specialCode;
            this.infoValidate = this.fieldsValidate.specialCode;
        }
    }

    inputType() {
        if(this.inputInfo === 'Phone number' || this.inputInfo === 'Card number' || this.inputInfo === 'CVV/CVC') {
            return 'number';
        } else {
            return 'text';
        }
    }

    inputClass() {
        if(this.inputInfo === 'Phone number' || this.inputInfo === 'Card number' || this.inputInfo === 'CVV/CVC') {
            return true;
        } else {
            return false;
        }
    }
    
    created() {
        this.getInputInfos();
    }
}
</script>

<style>

</style>