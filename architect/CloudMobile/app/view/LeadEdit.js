/*
 * File: app/view/LeadEdit.js
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

Ext.define('Exxica.view.LeadEdit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.leadEdit',

    requires: [
        'Ext.Img',
        'Ext.field.Hidden',
        'Ext.SegmentedButton',
        'Ext.Button'
    ],

    config: {
        itemId: 'leadEdit',
        items: [
            {
                xtype: 'container',
                itemId: 'LeadEdit_ImageContainer',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'image',
                        height: 201,
                        itemId: 'LeadEdit_ImageContainer_Photo'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'LeadEdit_ImageContainer_File_Hidden'
                    },
                    {
                        xtype: 'segmentedbutton',
                        flex: 1,
                        docked: 'bottom',
                        itemId: 'LeadEdit_ImageContainer_Actions',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'LeadEdit_ImageContainer_Actions_Camera',
                                text: 'Take Photo'
                            },
                            {
                                xtype: 'button',
                                itemId: 'LeadEdit_ImageContainer_Actions_Library',
                                text: 'Photo Library'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            },
            {
                xtype: 'textfield',
                label: 'Field'
            }
        ]
    }

});