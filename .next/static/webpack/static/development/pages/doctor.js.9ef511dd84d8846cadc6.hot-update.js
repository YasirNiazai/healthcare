webpackHotUpdate("static/development/pages/doctor.js",{

/***/ "./pages/doctor/index.js":
/*!*******************************!*\
  !*** ./pages/doctor/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_patientLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/patientLayout */ "./components/patientLayout.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json");
var _build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/ReceptionsitFactory.json */ "./build/contracts/ReceptionsitFactory.json", 1);
/* harmony import */ var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json");
var _build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../build/contracts/Doctor.json */ "./build/contracts/Doctor.json", 1);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ipfs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ipfs */ "./pages/ipfs.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var doctor =
/*#__PURE__*/
function (_Component) {
  _inherits(doctor, _Component);

  function doctor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, doctor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(doctor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      appointmentIdResult: "",
      appointmentIdSearch: "",
      patientIdResult: "",
      doctorIdresult: "",
      dateResult: "",
      chepComplaintResult: "",
      appointmentIdForFile: "",
      isCheckTrue: false,
      buffer: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentIdForFile", function (event) {
      _this.setState({
        appointmentIdForFile: event.target.value
      });

      console.log(_this.state.appointmentIdForFile);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAppointmentIdSearch", function (event) {
      _this.setState({
        appointmentIdSearch: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchAppointment",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var doctor, appointmentResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                doctor = _this.props.doctor;
                console.log(doctor);
                _context.next = 5;
                return doctor.appointments.call(parseInt(_this.state.appointmentIdSearch));

              case 5:
                appointmentResult = _context.sent;
                console.log(appointmentResult);

                _this.setState({
                  appointmentIdResult: appointmentResult[0].toNumber(),
                  patientIdResult: appointmentResult[1].toNumber(),
                  doctorIdresult: appointmentResult[2].toNumber(),
                  dateResult: appointmentResult[3],
                  chepComplaintResult: appointmentResult[4]
                });

                _this.onSearch();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch", function () {
      if (_this.state.appointmentIdResult) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
          singleLine: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Appointement Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Patient Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Doctor Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell, null, "Chief Complaint"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.appointmentIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.patientIdResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.doctorIdresult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.dateResult), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell, null, _this.state.chepComplaintResult))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "No Record Found");
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAddPrescriptionSearch",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var appointmentIdForFile, doctor, appointment, isCheckTrue;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              appointmentIdForFile = _this.state.appointmentIdForFile;
              doctor = _this.props.doctor;
              _context2.next = 4;
              return doctor.appointments.call(appointmentIdForFile);

            case 4:
              appointment = _context2.sent;
              isCheckTrue = appointment[6];

              if (appointment[0].toNumber() == 0) {
                alert("please provide right Appointment Id");
              } else {
                _this.setState({
                  appointmentIdForFile: appointment[0].toNumber(),
                  isCheckTrue: isCheckTrue
                });

                console.log(_this.state.isCheckTrue, _this.state.appointmentIdForFile);

                _this.renderFile();
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
        var _doctor, appointment, isCheckTrue, _appointment;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                console.log(_this.state.appointmentIdForFile);
                _doctor = _this.props.doctor;
                _context4.next = 5;
                return _doctor.appointments.call(_this.state.appointmentIdForFile);

              case 5:
                appointment = _context4.sent;
                isCheckTrue = appointment[6];
                console.log(isCheckTrue);

                if (!(isCheckTrue || _this.state.appointmentIdForFile == 0)) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", alert("Sorry provide valid appointment Id"));

              case 12:
                _ipfs__WEBPACK_IMPORTED_MODULE_8__["default"].files.add(_this.state.buffer,
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(error, result) {
                    var prescription;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!error) {
                              _context3.next = 3;
                              break;
                            }

                            console.error(error);
                            return _context3.abrupt("return");

                          case 3:
                            _context3.next = 5;
                            return _doctor.addPrescription(_this.state.appointmentIdForFile, result[0].hash, {
                              from: _this.props.accounts[0]
                            });

                          case 5:
                            prescription = _context3.sent;

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _context4.next = 15;
                return _doctor.appointments.call(_this.state.appointmentIdForFile);

              case 15:
                _appointment = _context4.sent;
                console.log(_appointment);

              case 17:
                _context4.next = 22;
                break;

              case 19:
                _context4.prev = 19;
                _context4.t0 = _context4["catch"](0);
                alert(_context4.t0);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 19]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "captureFile", function (event) {
      event.preventDefault();
      var file = event.target.files[0];
      var reader = new window.FileReader();
      reader.readAsArrayBuffer(file);

      reader.onloadend = function () {
        _this.setState({
          buffer: Buffer(reader.result)
        });

        console.log("buffer:", _this.state.buffer);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderFile", function () {
      console.log("render file:", _this.state.isCheckTrue); // console.log("address", this.props.);

      if (!_this.state.isCheckTrue) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Please Add File"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
          onSubmit: _this.onSubmit
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
          type: "file",
          onChange: _this.captureFile,
          style: {
            width: 800,
            height: 40,
            opacity: 100
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          primary: true,
          icon: "upload",
          label: {
            basic: true,
            content: "upload file"
          },
          labelPosition: "right"
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "already Completed"));
      }
    });

    return _this;
  }

  _createClass(doctor, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Body;
      var panes = [{
        menuItem: "Add File of Visit",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Add File of Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Search Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            onSubmit: _this2.onAddPrescriptionSearch
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
            value: _this2.state.appointmentIdForFile,
            onChange: _this2.onAppointmentIdForFile
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            primary: true
          }, " Search Appointment "))), _this2.renderFile(_this2.state.appointmentIdForFile, _this2.state.isCheckTrue));
        }
      }, {
        menuItem: "Search Appointment",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"].Pane, {
            attached: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Search Appointment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"], {
            onSubmit: _this2.onSearchAppointment
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Appointment Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Input"], {
            value: _this2.state.appointmentIdSearch,
            onChange: _this2.onAppointmentIdSearch
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            primary: true
          }, " Search Appointment "))), _this2.onSearch());
        }
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
        menu: {
          attached: false
        },
        panes: panes
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.doctorAddress === null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_patientLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            color: "red"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "You are not Registered as Doctor or you have selected wrong account in metamask")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_patientLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            backgroundColor: "#4267b2",
            color: "white",
            marginTop: 10,
            borderRadius: 4,
            padding: 10,
            paddingLeft: 50,
            margin: 10,
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 20
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Doctor Id: ", this.props.doctorId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Doctor Name : ", this.props.doctorName), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Gender: ", this.props.doctorGender), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Qualification: ", this.props.qualification), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, " Account: ", this.props.account)), this.renderTabs()));
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var accounts, factory, instanceFactory, doctor, doctorAddress, instanceDoctor, doctorId, summary;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();

              case 2:
                accounts = _context5.sent;
                console.log(accounts[0]);
                factory = truffle_contract__WEBPACK_IMPORTED_MODULE_6___default()(_build_contracts_ReceptionsitFactory_json__WEBPACK_IMPORTED_MODULE_4__);
                factory.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider);
                _context5.next = 8;
                return factory.deployed();

              case 8:
                instanceFactory = _context5.sent;
                doctor = truffle_contract__WEBPACK_IMPORTED_MODULE_6___default()(_build_contracts_Doctor_json__WEBPACK_IMPORTED_MODULE_5__);
                doctor.setProvider(_ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].currentProvider);
                _context5.next = 13;
                return instanceFactory.accountToAddressDoctor.call(accounts[0]);

              case 13:
                doctorAddress = _context5.sent;

                if (!(doctorAddress == 0x0000000000000000000000000000000000000000)) {
                  _context5.next = 19;
                  break;
                }

                alert("Sorry check your account or contact with authorized person");
                return _context5.abrupt("return", {
                  doctorAddress: null
                });

              case 19:
                _context5.next = 21;
                return doctor.at(doctorAddress);

              case 21:
                instanceDoctor = _context5.sent;
                _context5.next = 24;
                return instanceDoctor.doctorId.call();

              case 24:
                doctorId = _context5.sent;
                _context5.next = 27;
                return instanceDoctor.getSummary.call(doctorId);

              case 27:
                summary = _context5.sent;
                return _context5.abrupt("return", {
                  doctorAddress: doctorAddress,
                  doctor: instanceDoctor,
                  doctorId: summary[0].toNumber(),
                  doctorName: summary[1],
                  doctorGender: summary[2],
                  qualification: summary[3],
                  account: summary[4],
                  accounts: accounts
                });

              case 29:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return doctor;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (doctor);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/doctor")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=doctor.js.9ef511dd84d8846cadc6.hot-update.js.map