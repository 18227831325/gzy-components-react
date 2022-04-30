'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Demo$1 = /*#__PURE__*/function (_PureComponent) {
  _inherits(Demo, _PureComponent);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement("div", null, "\u8FD9\u662F\u7EC4\u4EF6\u4E00");
    }
  }]);

  return Demo;
}(React.PureComponent);

var DemoTwo = /*#__PURE__*/function (_PureComponent) {
  _inherits(DemoTwo, _PureComponent);

  var _super = _createSuper(DemoTwo);

  function DemoTwo(props) {
    var _this;

    _classCallCheck(this, DemoTwo);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(DemoTwo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement("div", null, "\u8FD9\u662F\u7EC4\u4EF62");
    }
  }]);

  return DemoTwo;
}(React.PureComponent);

var Demo = /*#__PURE__*/function (_PureComponent) {
  _inherits(Demo, _PureComponent);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement("div", null, "\u6D4B\u8BD5\u7EC4\u4EF604:27  16:00");
    }
  }]);

  return Demo;
}(React.PureComponent);

exports.Demo = Demo$1;
exports.DemoThree = Demo;
exports.DemoTwo = DemoTwo;
