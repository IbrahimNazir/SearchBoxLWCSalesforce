import { LightningElement, api, track } from 'lwc';

export default class GetAccountDetail extends LightningElement {
    @api account;
    @track isModalOpen = false;


  showModal() {
    this.isModalOpen = true;
  }
  openModal() {
    this.isModalOpen = true;
  }


  closeModal() {
    this.isModalOpen = false;
  }

    get accountName() {
        return this.account.Id;
    }
    get accountId() {
        return this.account.Name;
    }
    get accountWebsite() {
        return this.account.Website;
    }
    get accountBillingAddress() {
        return this.account.BillingAddress.City;
    }
}