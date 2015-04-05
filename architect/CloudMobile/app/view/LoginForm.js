/*
 * File: app/view/LoginForm.js
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

Ext.define('Exxica.view.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Checkbox',
        'Ext.Button'
    ],

    config: {
        itemId: 'myformpanel',
        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Company',
                        labelWidth: '40%',
                        name: 'User[company_login]'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWidth: '40%',
                        name: 'User[user_login]'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelWidth: '40%',
                        name: 'User[user_password]'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'checkboxfield',
                        itemId: 'rememberUser',
                        label: 'Remember?',
                        labelWidth: '40%',
                        name: 'User[user_remember]',
                        checked: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                margin: 20,
                padding: 8,
                text: 'Login'
            }
        ]
    }

});