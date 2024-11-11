import { LightningElement, wire, track } from 'lwc';
import getAccounts from'@salesforce/apex/GetAccountsByName.getAccounts';

export default class LwcTaskOne extends LightningElement {
  @track searchKey;
  @wire (getAccounts,{strAccountName: '$searchKey', getLimits: '$intLimit'}) accounts;
  openModel = false
  intLimit = 10;
  handleModalOpen(event){
    this.openModel = this.openModel ? false : true;
    console.log(this.openModel)
  }
  handleKeyChange(event){
    this.searchKey = event.target.value;
  }
}