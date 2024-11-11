public with sharing class GetAccountsByName {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String strAccountName, Integer getLimits) {
        String strKey = '%'+strAccountName+'%';
        Integer getlimit = getLimits;
        List<Account> accList = [SELECT Id,Name,Website,BillingAddress FROM Account WHERE name like :strKey LIMIT :getLimit];
        return accList;
     }
}
