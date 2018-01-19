import css from './app.scss';
import Utils from './utils';

var ToggleSwitch = (function() {

  var Constructor = function(config) {
    this.config = config || {};
    this.id = config.id || 'toggle';
    this.btnTextOn = config.btnTextOn || 'ON';
    this.btnTextOff = config.btnTextOff || 'OFF';
    this.container = Utils.id(this.id);
    this.buttonOn = null;
    this.buttonOff = null;

    this.init();
  };

  Constructor.prototype = {
    init: function() {
      var buttons = Utils.dom('div', {
        parent: this.container,
        className: 'toggle-switch'
      });

      this.buttonOn = Utils.dom('button', {
        parent: buttons,
        text: this.btnTextOn,
        className: 'button on active',
      });

      this.buttonOff = Utils.dom('button', {
        parent: buttons,
        text: this.btnTextOff,
        className: 'button off'
      });

      var eventDeligator = Utils.qs('.toggle-switch', this.container);

      Utils.on(eventDeligator, 'click', (event) => {
        this.toggle(event);
      })
    },

    toggle: function(event) {
      var target = event.target;

      if (target.classList.contains('on')) {
        this.buttonOff.classList.remove('active');
      } else {
        this.buttonOn.classList.remove('active');
      }

      target.classList.add('active');
    }
  };

  return Constructor;
}());

var messages = new ToggleSwitch({
  id: 'recive-messages',
  btnTextOn: 'ON',
  btnTextOff: 'OFF'
});

var popups = new ToggleSwitch({
  id: 'popups',
  btnTextOn: 'ACCEPT',
  btnTextOff: 'RESTRICT'
});
