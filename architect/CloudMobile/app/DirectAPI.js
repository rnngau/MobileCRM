Ext.define('Exxica.DirectAPI', {
    requires: ['Ext.direct.*', 'Ext.Ajax']
}, function() {
    Ext.ns('Ext.app.REMOTING_API');
    Ext.app.REMOTING_API = {"descriptor":"Ext.app.REMOTING_API","url":"/api/index.php?r=site/router","type":"remoting","actions":{"Salesman":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"NoLoginEmployees":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"MyAccess":[{"name":"read","len":1}],"MyUserSettings":[{"name":"read","len":1},{"name":"update","len":1}],"AccessControl":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Employees":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Settings":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"AcquisitionSources":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"CommunicationTypes":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"HistoryItems":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Ratings":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Leads":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1},{"name":"trash","len":1}],"Appendices":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Categorysets":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"DescriptiveTexts":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Drawings":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Entreprises":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Frontpage":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Navigation":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"ProjectsNew":[{"name":"load","len":1},{"name":"create","len":16,"formHandler":true},{"name":"update","len":16,"formHandler":true}],"ProjectsOpen":[{"name":"read","len":1}],"TenderNo":[{"name":"generate","len":1}],"Manager":[{"name":"read","len":1}],"Division":[{"name":"read","len":1}],"Category":[{"name":"read","len":1}],"Status":[{"name":"read","len":1}],"ProjectNo":[{"name":"generate","len":1}],"ResourceSpecifics":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"ResourceGroups":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"ResourceItems":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"Resources":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}],"SpecificTexts":[{"name":"read","len":1},{"name":"create","len":1},{"name":"update","len":1},{"name":"destroy","len":1}]}};
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});