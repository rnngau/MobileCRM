/*
 * File: app/controller/Leads.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Exxica.controller.Leads', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Lead',
            'User'
        ],
        stores: [
            'Leads',
            'Account'
        ],
        views: [
            'LeadsPanel'
        ],

        refs: {
            editButton: 'button#editButton',
            mainView: 'navigationview#mainView',
            leadShow: 'container#leadShow',
            leadsPanel: 'panel#leadsPanel',
            leadContent: 'dataview#leadContent'
        },

        control: {
            "list#leadsList": {
                itemtap: 'onLeadItemTap'
            }
        }
    },

    onLeadItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this;
        var showLead = Ext.create('Exxica.view.LeadShow');
        var contentStore = me.getLeadContent().getStore();
        contentStore.removeAll();
        contentStore.add(record);
        me.getMainView().push(showLead);
    }

});