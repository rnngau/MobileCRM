/*
 * File: app/view/MainView.js
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

Ext.define('Exxica.view.MainView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',

    requires: [
        'Exxica.view.LoginForm',
        'Exxica.view.LeadsPanel',
        'Ext.form.Panel',
        'Ext.navigation.Bar',
        'Ext.Button'
    ],

    config: {
        itemId: 'mainView',
        items: [
            {
                xtype: 'panel',
                title: 'Exxica Cloud',
                itemId: 'homePanel',
                layout: 'fit',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'loginform',
                        itemId: 'loginForm'
                    },
                    {
                        xtype: 'leadspanel',
                        hidden: true
                    }
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            autoDestroy: false,
            androidAnimation: true,
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    hidden: true,
                    itemId: 'editButton',
                    text: 'Edit'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    hidden: true,
                    itemId: 'saveButton',
                    text: 'Save'
                }
            ]
        }
    }

});