Ext.define 'Ext.ux.DefaultButtonPlugin'
  extend: 'Ext.AbstractPlugin'

  alias: 'plugin.defaultbutton'

  init: (container) ->
    @callParent arguments

    @fields = container.query 'textfield'
    field.on 'specialkey', @handleSpecialKey, this for field in @fields

    @button = container.query(@selector ? 'button')[0]

  destroy: ->
    field.un 'specialkey', @handleSpecialKey, this for field in @fields

  handleSpecialKey: (field, e) ->
    return unless e.getKey() is e.ENTER
    @button.fireEvent 'click', @button
