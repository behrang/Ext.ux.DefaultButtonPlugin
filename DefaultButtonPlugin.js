// Generated by CoffeeScript 1.4.0
(function() {

  Ext.define('Ext.ux.DefaultButtonPlugin', {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.defaultbutton',
    init: function(container) {
      var field, _i, _len, _ref, _ref1;
      this.callParent(arguments);
      this.fields = container.query('textfield');
      _ref = this.fields;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        field = _ref[_i];
        field.on('specialkey', this.handleSpecialKey, this);
      }
      return this.button = container.query((_ref1 = this.selector) != null ? _ref1 : 'button')[0];
    },
    destroy: function() {
      var field, _i, _len, _ref, _results;
      _ref = this.fields;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        field = _ref[_i];
        _results.push(field.un('specialkey', this.handleSpecialKey, this));
      }
      return _results;
    },
    handleSpecialKey: function(field, e) {
      if (e.getKey() !== e.ENTER) {
        return;
      }
      return this.button.fireEvent('click', this.button);
    }
  });

}).call(this);