"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chronometer = /*#__PURE__*/function () {
  function Chronometer(element) {
    _classCallCheck(this, Chronometer);

    this.element = element;
    this.timer;
    this.time;
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.value = "00:00:00";
  }

  _createClass(Chronometer, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.timer = window.setInterval(function () {
        if (_this.second == 60) {
          _this.minute++;
          _this.second = 0;
        }

        if (_this.minute == 60) {
          _this.hour++;
          _this.second = 0;
          _this.minute = 0;
        }

        var hour = _this.hour;

        if (hour < 10) {
          hour = "0".concat(hour);
        }

        var minute = _this.minute;

        if (minute < 10) {
          minute = "0".concat(minute);
        }

        var second = _this.second;

        if (second < 10) {
          second = "0".concat(second);
        }

        if (_this.element !== null) {
          _this.element.innerHTML = "".concat(hour, ":").concat(minute, ":").concat(second);
        }

        _this.second++;
      }, 1000, _this);
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.timer);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.start();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.pause();
      this.hour = 0;
      this.minute = 0;
      this.second = 0;

      if (this.element !== null) {
        this.element.innerHTML = "00:00:00";
      }

      this.start();
    }
  }]);

  return Chronometer;
}();