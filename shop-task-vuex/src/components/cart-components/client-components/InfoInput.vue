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
                    <img 
                    :class="{'instapayment': cardImageSrc.title === 'Insta Payment'}" 
                    v-show="fieldsValidate.cardNumber === true" 
                    :src="cardImageSrc.src" 
                    alt="Card Icon" 
                    :title="cardImageSrc.title"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";

@Component
export default class InfoInput extends Vue {
    @Prop(String) inputInfo;
    @Prop(Boolean) invoiceCheck;
    @Prop(String) addressProp;
    @Prop(Boolean) validate;
    @Getter invoiceForm;
    @Getter fieldsValidate;
    @Getter invoiceFieldsValidate;
    @Getter invoiceSameAddress;
    @Getter cardImage;
    @Getter clearFields;
    @Getter clearInvoiceFields;
    @Getter cardImageSrc;
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
    @Action validateCompany;
    @Action validateNIP;
    @Action validateInputs;
    @Action validateInvoiceInputs;
    @Action validateInvoiceForm;
    @Action validateBothForms;

    addressInfo = null;
    infoValidate = null;

    @Watch("addressInfo")
    onInputChange(val, oldVal){
        if(this.inputInfo === 'First name' && !this.invoiceCheck) {
            this.validateFirstName({value: val, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.firstName;

        } else if(this.inputInfo === 'Last name' && !this.invoiceCheck) {
            this.validateLastName({value: val, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.lastName;

        } else if(this.inputInfo === 'Country' && !this.invoiceCheck) {
            this.validateCountry({value: val, invoice: false, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.country;

        } else if(this.inputInfo === 'Zip code' && !this.invoiceCheck) {
            this.validateZipCode({value: val, invoice: false, addressInfo: this.addressInfo});
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
            }

            this.infoValidate = this.fieldsValidate.zipCode;
        
        } else if(this.inputInfo === 'City' && !this.invoiceCheck) {
            this.validateCity({value: val, invoice: false, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.city;

        } else if(this.inputInfo === 'Street and House number' && !this.invoiceCheck) {
            this.validateStreet({value: val, invoice: false, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.street;
 
        } else if(this.inputInfo === 'Phone number' && !this.invoiceCheck) {
            this.validatePhone({value: val, invoice: false, addressInfo: this.addressInfo});

            if(val !== null) {
                if(val.length > 9) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.phoneNumber;

        } else if(this.inputInfo === 'E-mail' && !this.invoiceCheck) {
            this.validateEmail({value: val, invoice: false, addressInfo: this.addressInfo});
            this.infoValidate = this.fieldsValidate.email;
 
        } else if(this.inputInfo === 'Card number' && !this.invoiceCheck) {
            this.validateCardNumber({value: val, addressInfo: this.addressInfo});

            if(val !== null) {
                if(val.length > 19) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.cardNumber;

        } else if(this.inputInfo === 'MM/YY' && !this.invoiceCheck) {
            const regex = /^[0-9]*\/?[0-9]*$/;
            this.validateCardExpireDate({value: val, addressInfo: this.addressInfo});

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
            }

            this.infoValidate = this.fieldsValidate.expireDate;
 
        } else if(this.inputInfo === 'CVV/CVC' && !this.invoiceCheck) {
            this.validateCardCode({value: val, addressInfo: this.addressInfo});
            if(val !== null) {
                if(val.length > 3) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.fieldsValidate.specialCode;

        } else if (this.inputInfo === 'Company name' && this.invoiceCheck) {
            this.validateCompany(this.addressInfo);

        } else if(this.inputInfo === 'NIP' && this.invoiceCheck) {
            this.validateNIP({value: val, addressInfo: this.addressInfo});

            if(val !== null) {
                if(val.length > 10) {
                    this.addressInfo = oldVal;
                }
            }

            this.infoValidate = this.invoiceFieldsValidate.NIP;

        } else if(this.inputInfo === 'Country' && this.invoiceCheck) {
            this.validateCountry({value: val, invoice: true, addressInfo: this.addressInfo});
            this.infoValidate = this.invoiceFieldsValidate.country;

        } else if(this.inputInfo === 'Zip code' && this.invoiceCheck) {
            const regex = /^[0-9]* *-? *[0-9]*$/;
            this.validateZipCode({value: val, invoice: true, addressInfo: this.addressInfo});

            if(val !== null) {
                const dash = " - ";

                if(!val.match(regex) || val.length > 8) {
                    this.addressInfo = oldVal;
                } else {
                    if (val.length == 2 && oldVal.length == 1) {
                    this.addressInfo = this.addressInfo.concat(dash);
                    }
                }

            }

            this.infoValidate = this.invoiceFieldsValidate.zipCode;

        } else if(this.inputInfo === 'City' && this.invoiceCheck) {
            this.validateCity({value: val, invoice: true, addressInfo: this.addressInfo});
            this.infoValidate = this.invoiceFieldsValidate.city;

        } else if(this.inputInfo === 'Street and building number' && this.invoiceCheck) {
            this.validateStreet({value: val, invoice: true, addressInfo: this.addressInfo});
            this.infoValidate = this.invoiceFieldsValidate.street;

        } else if(this.inputInfo === 'Phone number' && this.invoiceCheck) {
            this.validatePhone({value: val, invoice: true, addressInfo: this.addressInfo});

            if(val !== null && val.length > 9) {
                this.addressInfo = oldVal;
            }

            this.infoValidate = this.invoiceFieldsValidate.phoneNumber;

        } else if(this.inputInfo === 'E-mail' && this.invoiceCheck) {
            this.validateEmail({value: val, invoice: true, addressInfo: this.addressInfo});
            this.infoValidate = this.invoiceFieldsValidate.email;
        }
    }

    @Watch("clearFields")
    onClear(){
        this.getInputInfos();
    }

    @Watch("clearInvoiceFields")
    onInvoiceClear(){
        this.getInputInfos();
    }

    @Watch("invoiceForm")
    onInvoiceFormToggle(){
        this.getInputInfos();
    }

    @Watch("invoiceSameAddress")
    onInvoiceSameAddressToggle(){
        this.getInputInfos();
    }

    getInputInfos() {
        this.addressInfo = this.addressProp;
        this.infoValidate = this.validate; 
    }

    inputType() {
        if(this.inputInfo === 'Phone number' || this.inputInfo === 'Card number' || 
            this.inputInfo === 'CVV/CVC' || this.inputInfo === 'NIP') {
            return 'number';
        } else {
            return 'text';
        }
    }

    inputClass() {
        if(this.inputInfo === 'Phone number' || this.inputInfo === 'Card number' || 
            this.inputInfo === 'CVV/CVC' || this.inputInfo === 'NIP') {
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