/*
 * File: app/view/LeadShow.js
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

Ext.define('Exxica.view.LeadShow', {
    extend: 'Ext.Container',
    alias: 'widget.leadShow',

    requires: [
        'Exxica.view.RoadMap',
        'Exxica.view.override.LeadShow',
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Map'
    ],

    config: {
        itemId: 'leadShow',
        layout: 'vbox',
        items: [
            {
                xtype: 'dataview',
                flex: 1,
                itemId: 'leadContent',
                minHeight: 60,
                scrollable: false,
                itemTpl: [
                    '<div class="top">',
                    '    <div class="headshot" style="background-image:{photoUrl};"></div>',
                    '    <div class="name">{firstName} {lastName}</div><br/>',
                    '    <div class="address">{postAdress}<br/>{postZip} {postTown}</div>',
                    '    <div class="contact"><span class="label">Tel:</span> {contactPhone}</div><br/>',
                    '    <div class="contact"><span class="label">Mail:</span> {contactMail}</div>',
                    '</div>'
                ],
                store: 'LeadView',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        style: {
                            'border-top': 'thin solid #ddd',
                            'border-bottom': 'thin solid #ddd'
                        },
                        ui: 'neutral',
                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                iconCls: 'action',
                                text: 'Call'
                            },
                            {
                                xtype: 'button',
                                iconCls: 'locate',
                                text: 'Route to'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'roadmap',
                itemId: 'leadMap',
                flex: 5
            }
        ]
    }

});