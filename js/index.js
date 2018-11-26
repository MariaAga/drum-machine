var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var Drum = (function(_React$Component) {
  _inherits(Drum, _React$Component);
  function Drum(props) {
    _classCallCheck(this, Drum);
    var _this = _possibleConstructorReturn(
      this,
      (Drum.__proto__ || Object.getPrototypeOf(Drum)).call(this, props)
    );
    _this.playSound = function(key) {
      var audio = document.querySelector('audio#' + key);
      audio.volume = 0.1;
      audio.currentTime = 0;
      audio.play();
      var len = 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/'
        .length;
      _this.setState({ currentSound: audio.src.slice(len, -4) });
    };
    _this.playFromEvent = function(event) {
      var key = event.target.id;
      _this.playSound(key);
    };
    _this.state = {
      currentSound: null,
      keys: [
        { key: 'Q', keycode: 81, src: 'sounds/clap.wav' },
        { key: 'W', keycode: 87, src: 'sounds/hihat.wav' },
        { key: 'E', keycode: 69, src: 'sounds/kick.wav' },
        { key: 'A', keycode: 65, src: 'sounds/openhat.wav' },
        { key: 'S', keycode: 83, src: 'sounds/boom.wav' },
        { key: 'D', keycode: 68, src: 'sounds/ride.wav' },
        { key: 'Z', keycode: 90, src: 'sounds/snare.wav' },
        { key: 'X', keycode: 88, src: 'sounds/tom.wav' },
        { key: 'C', keycode: 67, src: 'sounds/tink.wav' }
      ]
    };
    _this.playSoundFromKey = _this.playSoundFromKey.bind(_this);
    return _this;
  }
  _createClass(Drum, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('keydown', this.playSoundFromKey);
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('keydown', this.playSoundFromKey);
      }
    },
    {
      key: 'playSoundFromKey',
      value: function playSoundFromKey(e) {
        var foundKey = this.state.keys.find(function(key) {
          return key.keycode === e.keyCode;
        });
        if (foundKey) {
          this.playSound(foundKey.key);
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        return React.createElement(
          'div',
          { id: 'drum-machine' },
          React.createElement(
            'div',
            { id: 'display' },
            this.state.currentSound,
            React.createElement(
              'div',
              { id: 'drum-pads' },
              this.state.keys.map(function(key) {
                return React.createElement(
                  'button',
                  {
                    onClick: _this2.playFromEvent,
                    class: 'drum-pad',
                    id: '' + key.key
                  },

                  ' ',
                  key.key,
                  React.createElement('audio', {
                    src:
                      'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/' +
                      key.src,

                    class: 'clip',
                    id: '' + key.key
                  })
                );
              })
            )
          )
        );
      }
    }
  ]);
  return Drum;
})(React.Component);

ReactDOM.render(
  React.createElement(Drum, null),
  document.getElementById('app')
);
