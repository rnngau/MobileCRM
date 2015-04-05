/*
 * File: app/store/Leads.js
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

Ext.define('Exxica.store.Leads', {
    extend: 'Ext.data.Store',

    requires: [
        'Exxica.model.Lead',
        'Ext.data.proxy.Direct',
        'Exxica.DirectAPI',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.util.Grouper'
    ],

    config: {
        autoSync: true,
        buffered: true,
        data: [
            {
                idLead: 809,
                fkContact: 403,
                fkCompany: 435,
                fkLicence: 908,
                fkRating: 324,
                fkFollowupType: 235,
                fkVisibility: 142,
                fkSalesman: 468,
                fkAcquisitionSource: 416,
                followupTypeIcon: 'delectus',
                followupTimePrefix: 641,
                followupDateTime: '2/2/2008',
                followupNote: 'sed',
                contactType: 448,
                ratingInt: 91,
                ratingStr: 'dolore',
                ratingStyle: 'et',
                fullName: 'Leon Thomas',
                firstName: 'Allen',
                middleName: 'Russell',
                lastName: 'Thompson',
                postAdress: 'sed',
                postZip: '61181',
                postTown: 'Quibusdam',
                contactPhone: '(182) 698-7430',
                contactMail: 'dwalker@jatri.info',
                note: 'Accusamus in corrupti.',
                trashFlag: true,
                customerOrLead: false,
                skypeHandle: 'totam',
                facebookUrl: 'https//:quidem.net',
                googleUrl: 'https//:assumenda.tv/voluptas/laudantium/ea.html',
                linkedinUrl: 'https//:consequatur.ca/culpa.xml',
                photoUrl: 'https//:ea.me/inventore/eos.html'
            },
            {
                idLead: 581,
                fkContact: 390,
                fkCompany: 33,
                fkLicence: 371,
                fkRating: 925,
                fkFollowupType: 508,
                fkVisibility: 600,
                fkSalesman: 905,
                fkAcquisitionSource: 519,
                followupTypeIcon: 'temporibus',
                followupTimePrefix: 266,
                followupDateTime: '5/17/2004',
                followupNote: 'vero',
                contactType: 558,
                ratingInt: 218,
                ratingStr: 'vero',
                ratingStyle: 'provident',
                fullName: 'Nora Parker',
                firstName: 'Claude',
                middleName: 'Maude',
                lastName: 'Morgan',
                postAdress: 'ut',
                postZip: '35279',
                postTown: 'Rerum',
                contactPhone: '(981) 935-8542',
                contactMail: 'jfernandez@mynte.name',
                note: '<U>facilis</u> animi provident sequi quo.',
                trashFlag: false,
                customerOrLead: true,
                skypeHandle: 'sed',
                facebookUrl: 'https//:culpa.com/tempora.jsp',
                googleUrl: 'https//:dolor.biz/perferendis.php',
                linkedinUrl: 'http//:repellat.name/dolor.rhtml',
                photoUrl: 'http//:labore.name/officiis/fuga'
            },
            {
                idLead: 229,
                fkContact: 792,
                fkCompany: 114,
                fkLicence: 137,
                fkRating: 248,
                fkFollowupType: 371,
                fkVisibility: 636,
                fkSalesman: 293,
                fkAcquisitionSource: 890,
                followupTypeIcon: 'et',
                followupTimePrefix: 93,
                followupDateTime: '6/2/2008',
                followupNote: 'est',
                contactType: 408,
                ratingInt: 539,
                ratingStr: 'quia',
                ratingStyle: 'voluptatem',
                fullName: 'Frederick Wright',
                firstName: 'Willie',
                middleName: 'Michael',
                lastName: 'Collins',
                postAdress: 'in',
                postZip: '69442',
                postTown: 'Consequatur',
                contactPhone: '(628) 170-0317',
                contactMail: 'jcook@trudoo.edu',
                note: 'Laborum delectus fugit.Expedita officiis repudiandae.',
                trashFlag: true,
                customerOrLead: true,
                skypeHandle: 'tempora',
                facebookUrl: 'https//:et.us',
                googleUrl: 'https//:aut.tv/et',
                linkedinUrl: 'https//:unde.info',
                photoUrl: 'http//:quo.me/officia/porro/qui.py'
            },
            {
                idLead: 784,
                fkContact: 148,
                fkCompany: 290,
                fkLicence: 729,
                fkRating: 262,
                fkFollowupType: 531,
                fkVisibility: 705,
                fkSalesman: 412,
                fkAcquisitionSource: 826,
                followupTypeIcon: 'et',
                followupTimePrefix: 306,
                followupDateTime: '8/19/2013',
                followupNote: 'ipsum',
                contactType: 394,
                ratingInt: 960,
                ratingStr: 'pariatur',
                ratingStyle: 'exercitationem',
                fullName: 'Vera White',
                firstName: 'Ben',
                middleName: 'Russell',
                lastName: 'Lee',
                postAdress: 'repudiandae',
                postZip: '07466',
                postTown: 'Molestiae',
                contactPhone: '(686) 989-0385',
                contactMail: 'dwatkins@mydeo.name',
                note: 'Temporibus et velit unde facilis.',
                trashFlag: true,
                customerOrLead: true,
                skypeHandle: 'quae',
                facebookUrl: 'http//:soluta.us/autem/itaque/in',
                googleUrl: 'https//:libero.me/id/ratione.jsp',
                linkedinUrl: 'http//:in.ca/facilis/numquam.jsp',
                photoUrl: 'https//:perferendis.biz/quia/non/sint.py'
            },
            {
                idLead: 172,
                fkContact: 679,
                fkCompany: 526,
                fkLicence: 362,
                fkRating: 54,
                fkFollowupType: 1,
                fkVisibility: 428,
                fkSalesman: 923,
                fkAcquisitionSource: 569,
                followupTypeIcon: 'vel',
                followupTimePrefix: 84,
                followupDateTime: '11/27/2011',
                followupNote: 'est',
                contactType: 269,
                ratingInt: 496,
                ratingStr: 'nulla',
                ratingStyle: 'porro',
                fullName: 'Alma Allen',
                firstName: 'Ellen',
                middleName: 'Bernard',
                lastName: 'Kelly',
                postAdress: 'similique',
                postZip: '88242',
                postTown: 'Iusto',
                contactPhone: '(032) 301-7772',
                contactMail: 'jsims@photofeed.net',
                note: '<U>provident</u> cumque.',
                trashFlag: true,
                customerOrLead: true,
                skypeHandle: 'esse',
                facebookUrl: 'https//:nostrum.me/quam/nulla',
                googleUrl: 'http//:pariatur.ca/sit/quia',
                linkedinUrl: 'http//:nostrum.net/nemo/saepe',
                photoUrl: 'http//:tenetur.us/fugit/doloribus.pl'
            }
        ],
        model: 'Exxica.model.Lead',
        storeId: 'Leads',
        proxy: {
            type: 'direct',
            directFn: 'Leads.read',
            reader: {
                type: 'json',
                idProperty: 'idLead',
                messageProperty: 'message',
                rootProperty: 'data'
            },
            writer: {
                type: 'json'
            }
        },
        sorters: {
            property: 'lastName'
        },
        grouper: {
            groupFn: function(item) {
                return item.get('lastName')[0];
            }
        }
    }
});