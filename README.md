Ext.ux.DefaultButtonPlugin
==========================

This plugin adds event handlers to textfields, so that when 'Enter' key is pressed on one of them, the default button (which is configurable) is clicked.

It helps to create forms that do the default action, when Enter key is pressed.

### Usage
Add this plugin to any container component which you want to have this functionality. For example:

    Ext.define('App.view.Login', {
        extend: 'Ext.Window',
        requires: [

            'Ext.ux.DefaultButtonPlugin'

            'Ext.form.field.Text',
            'Ext.button.Button'
        ],

        plugins: [
            {
                ptype: 'defaultbutton',
                selector: '#login'
            }
        ],

        width: 300,
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Username'
            },
            {
                xtype: 'textfield',
                inputType: 'password',
                fieldLabel: 'Password'
            }
        ],
        buttons: [
            {
                xtype: 'button',
                text: 'Login',
                itemId: 'login'
            }
        ]

Default value for selector is `button`, so if you omit it, the first child button will be used.

### License

MIT