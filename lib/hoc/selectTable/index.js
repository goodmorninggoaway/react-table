'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */

var defaultSelectInputComponent = function defaultSelectInputComponent(props) {
  return _react2.default.createElement('input', {
    type: props.selectType || 'checkbox',
    checked: props.checked,
    onClick: function onClick(e) {
      var shiftKey = e.shiftKey;

      e.stopPropagation();
      props.onClick(props.id, shiftKey, props.row);
    },
    onChange: function onChange() {}
  });
};

exports.default = function (Component, options) {
  var wrapper = function (_React$Component) {
    _inherits(RTSelectTable, _React$Component);

    function RTSelectTable(props) {
      _classCallCheck(this, RTSelectTable);

      return _possibleConstructorReturn(this, (RTSelectTable.__proto__ || Object.getPrototypeOf(RTSelectTable)).call(this, props));
    }

    _createClass(RTSelectTable, [{
      key: 'rowSelector',
      value: function rowSelector(row) {
        if (!row || !row.hasOwnProperty(this.props.keyField)) return null;
        var _props = this.props,
            toggleSelection = _props.toggleSelection,
            selectType = _props.selectType,
            keyField = _props.keyField;

        var checked = this.props.isSelected(row[this.props.keyField]);
        var inputProps = {
          checked: checked,
          onClick: toggleSelection,
          selectType: selectType,
          id: row[keyField],
          row: row
        };
        return _react2.default.createElement(this.props.SelectInputComponent, inputProps);
      }
    }, {
      key: 'headSelector',
      value: function headSelector(row) {
        var selectType = this.props.selectType;

        if (selectType === 'radio') return null;

        var _props2 = this.props,
            toggleAll = _props2.toggleAll,
            checked = _props2.selectAll,
            SelectAllInputComponent = _props2.SelectAllInputComponent;

        var inputProps = {
          checked: checked,
          onClick: toggleAll,
          selectType: selectType
        };

        return _react2.default.createElement(SelectAllInputComponent, inputProps);
      }

      // this is so we can expose the underlying ReactTable to get at the sortedData for selectAll

    }, {
      key: 'getWrappedInstance',
      value: function getWrappedInstance() {
        if (!this.wrappedInstance) console.warn('RTSelectTable - No wrapped instance');
        if (this.wrappedInstance.getWrappedInstance) return this.wrappedInstance.getWrappedInstance();else return this.wrappedInstance;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            originalCols = _props3.columns,
            isSelected = _props3.isSelected,
            toggleSelection = _props3.toggleSelection,
            toggleAll = _props3.toggleAll,
            keyField = _props3.keyField,
            selectAll = _props3.selectAll,
            selectType = _props3.selectType,
            selectWidth = _props3.selectWidth,
            SelectAllInputComponent = _props3.SelectAllInputComponent,
            SelectInputComponent = _props3.SelectInputComponent,
            rest = _objectWithoutProperties(_props3, ['columns', 'isSelected', 'toggleSelection', 'toggleAll', 'keyField', 'selectAll', 'selectType', 'selectWidth', 'SelectAllInputComponent', 'SelectInputComponent']);

        var _options$floatingLeft = options.floatingLeft,
            floatingLeft = _options$floatingLeft === undefined ? false : _options$floatingLeft;

        var select = {
          id: '_selector',
          accessor: function accessor() {
            return 'x';
          }, // this value is not important
          Header: this.headSelector.bind(this),
          Cell: function Cell(ci) {
            return _this2.rowSelector.bind(_this2)(ci.original);
          },
          width: selectWidth || 30,
          filterable: false,
          sortable: false,
          resizable: false,
          style: { textAlign: 'center' }
        };

        var columns = floatingLeft ? [].concat(_toConsumableArray(originalCols), [select]) : [select].concat(_toConsumableArray(originalCols));
        var extra = {
          columns: columns
        };
        return _react2.default.createElement(Component, _extends({}, rest, extra, { ref: function ref(r) {
            return _this2.wrappedInstance = r;
          } }));
      }
    }]);

    return RTSelectTable;
  }(_react2.default.Component);

  wrapper.displayName = 'RTSelectTable';
  wrapper.defaultProps = {
    keyField: '_id',
    isSelected: function isSelected(key) {
      console.log('No isSelected handler provided:', { key: key });
    },
    selectAll: false,
    toggleSelection: function toggleSelection(key, shift, row) {
      console.log('No toggleSelection handler provided:', { key: key, shift: shift, row: row });
    },
    toggleAll: function toggleAll() {
      console.log('No toggleAll handler provided.');
    },
    selectType: 'checkbox',
    SelectInputComponent: defaultSelectInputComponent,
    SelectAllInputComponent: defaultSelectInputComponent
  };

  return wrapper;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2Mvc2VsZWN0VGFibGUvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdFNlbGVjdElucHV0Q29tcG9uZW50IiwicHJvcHMiLCJzZWxlY3RUeXBlIiwiY2hlY2tlZCIsInNoaWZ0S2V5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2siLCJpZCIsInJvdyIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJ3cmFwcGVyIiwiaGFzT3duUHJvcGVydHkiLCJrZXlGaWVsZCIsInRvZ2dsZVNlbGVjdGlvbiIsImlzU2VsZWN0ZWQiLCJpbnB1dFByb3BzIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiU2VsZWN0SW5wdXRDb21wb25lbnQiLCJ0b2dnbGVBbGwiLCJzZWxlY3RBbGwiLCJTZWxlY3RBbGxJbnB1dENvbXBvbmVudCIsIndyYXBwZWRJbnN0YW5jZSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0V3JhcHBlZEluc3RhbmNlIiwib3JpZ2luYWxDb2xzIiwiY29sdW1ucyIsInNlbGVjdFdpZHRoIiwicmVzdCIsImZsb2F0aW5nTGVmdCIsInNlbGVjdCIsImFjY2Vzc29yIiwiSGVhZGVyIiwiaGVhZFNlbGVjdG9yIiwiYmluZCIsIkNlbGwiLCJyb3dTZWxlY3RvciIsImNpIiwib3JpZ2luYWwiLCJ3aWR0aCIsImZpbHRlcmFibGUiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsInN0eWxlIiwidGV4dEFsaWduIiwiZXh0cmEiLCJyIiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJsb2ciLCJrZXkiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OzsrZUFGQTs7QUFJQSxJQUFNQSw4QkFBOEIsU0FBOUJBLDJCQUE4QixRQUFTO0FBQzNDLFNBQ0U7QUFDRSxVQUFNQyxNQUFNQyxVQUFOLElBQW9CLFVBRDVCO0FBRUUsYUFBU0QsTUFBTUUsT0FGakI7QUFHRSxhQUFTLG9CQUFLO0FBQUEsVUFDSkMs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O0FBQ2ZJLGNBQVEyQixHQUFSLENBQVksZ0NBQVo7QUFDRCxLQVhvQjtBQVlyQmxELGdCQUFZLFVBWlM7QUFhckJrQiwwQkFBc0JwQiwyQkFiRDtBQWNyQnVCLDZCQUF5QnZCO0FBZEosR0FBdkI7O0FBaUJBLFNBQU9ZLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBkZWZhdWx0U2VsZWN0SW5wdXRDb21wb25lbnQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPXtwcm9wcy5zZWxlY3RUeXBlIHx8ICdjaGVja2JveCd9XG4gICAgICBjaGVja2VkPXtwcm9wcy5jaGVja2VkfVxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2hpZnRLZXkgfSA9IGVcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICBwcm9wcy5vbkNsaWNrKHByb3BzLmlkLCBzaGlmdEtleSwgcHJvcHMucm93KVxuICAgICAgfX1cbiAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGNsYXNzIFJUU2VsZWN0VGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICByb3dTZWxlY3Rvcihyb3cpIHtcbiAgICAgIGlmICghcm93IHx8ICFyb3cuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5rZXlGaWVsZCkpIHJldHVybiBudWxsXG4gICAgICBjb25zdCB7IHRvZ2dsZVNlbGVjdGlvbiwgc2VsZWN0VHlwZSwga2V5RmllbGQgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLnByb3BzLmlzU2VsZWN0ZWQocm93W3RoaXMucHJvcHMua2V5RmllbGRdKVxuICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgb25DbGljazogdG9nZ2xlU2VsZWN0aW9uLFxuICAgICAgICBzZWxlY3RUeXBlLFxuICAgICAgICBpZDogcm93W2tleUZpZWxkXSxcbiAgICAgICAgcm93LFxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5TZWxlY3RJbnB1dENvbXBvbmVudCwgaW5wdXRQcm9wcylcbiAgICB9XG5cbiAgICBoZWFkU2VsZWN0b3Iocm93KSB7XG4gICAgICBjb25zdCB7IHNlbGVjdFR5cGUgfSA9IHRoaXMucHJvcHNcbiAgICAgIGlmIChzZWxlY3RUeXBlID09PSAncmFkaW8nKSByZXR1cm4gbnVsbFxuXG4gICAgICBjb25zdCB7IHRvZ2dsZUFsbCwgc2VsZWN0QWxsOiBjaGVja2VkLCBTZWxlY3RBbGxJbnB1dENvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgb25DbGljazogdG9nZ2xlQWxsLFxuICAgICAgICBzZWxlY3RUeXBlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3RBbGxJbnB1dENvbXBvbmVudCwgaW5wdXRQcm9wcylcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHNvIHdlIGNhbiBleHBvc2UgdGhlIHVuZGVybHlpbmcgUmVhY3RUYWJsZSB0byBnZXQgYXQgdGhlIHNvcnRlZERhdGEgZm9yIHNlbGVjdEFsbFxuICAgIGdldFdyYXBwZWRJbnN0YW5jZSgpIHtcbiAgICAgIGlmICghdGhpcy53cmFwcGVkSW5zdGFuY2UpIGNvbnNvbGUud2FybignUlRTZWxlY3RUYWJsZSAtIE5vIHdyYXBwZWQgaW5zdGFuY2UnKVxuICAgICAgaWYgKHRoaXMud3JhcHBlZEluc3RhbmNlLmdldFdyYXBwZWRJbnN0YW5jZSkgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlLmdldFdyYXBwZWRJbnN0YW5jZSgpXG4gICAgICBlbHNlIHJldHVybiB0aGlzLndyYXBwZWRJbnN0YW5jZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29sdW1uczogb3JpZ2luYWxDb2xzLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICB0b2dnbGVTZWxlY3Rpb24sXG4gICAgICAgIHRvZ2dsZUFsbCxcbiAgICAgICAga2V5RmllbGQsXG4gICAgICAgIHNlbGVjdEFsbCxcbiAgICAgICAgc2VsZWN0VHlwZSxcbiAgICAgICAgc2VsZWN0V2lkdGgsXG4gICAgICAgIFNlbGVjdEFsbElucHV0Q29tcG9uZW50LFxuICAgICAgICBTZWxlY3RJbnB1dENvbXBvbmVudCxcbiAgICAgICAgLi4ucmVzdFxuICAgICAgfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IHsgZmxvYXRpbmdMZWZ0ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHtcbiAgICAgICAgaWQ6ICdfc2VsZWN0b3InLFxuICAgICAgICBhY2Nlc3NvcjogKCkgPT4gJ3gnLCAvLyB0aGlzIHZhbHVlIGlzIG5vdCBpbXBvcnRhbnRcbiAgICAgICAgSGVhZGVyOiB0aGlzLmhlYWRTZWxlY3Rvci5iaW5kKHRoaXMpLFxuICAgICAgICBDZWxsOiBjaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucm93U2VsZWN0b3IuYmluZCh0aGlzKShjaS5vcmlnaW5hbClcbiAgICAgICAgfSxcbiAgICAgICAgd2lkdGg6IHNlbGVjdFdpZHRoIHx8IDMwLFxuICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICBzdHlsZTogeyB0ZXh0QWxpZ246ICdjZW50ZXInIH0sXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBmbG9hdGluZ0xlZnQgPyBbLi4ub3JpZ2luYWxDb2xzLCBzZWxlY3RdIDogW3NlbGVjdCwgLi4ub3JpZ2luYWxDb2xzXVxuICAgICAgY29uc3QgZXh0cmEgPSB7XG4gICAgICAgIGNvbHVtbnMsXG4gICAgICB9XG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucmVzdH0gey4uLmV4dHJhfSByZWY9e3IgPT4gKHRoaXMud3JhcHBlZEluc3RhbmNlID0gcil9IC8+XG4gICAgfVxuICB9XG5cbiAgd3JhcHBlci5kaXNwbGF5TmFtZSA9ICdSVFNlbGVjdFRhYmxlJ1xuICB3cmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBrZXlGaWVsZDogJ19pZCcsXG4gICAgaXNTZWxlY3RlZDoga2V5ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpc1NlbGVjdGVkIGhhbmRsZXIgcHJvdmlkZWQ6JywgeyBrZXkgfSlcbiAgICB9LFxuICAgIHNlbGVjdEFsbDogZmFsc2UsXG4gICAgdG9nZ2xlU2VsZWN0aW9uOiAoa2V5LCBzaGlmdCwgcm93KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gdG9nZ2xlU2VsZWN0aW9uIGhhbmRsZXIgcHJvdmlkZWQ6JywgeyBrZXksIHNoaWZ0LCByb3cgfSlcbiAgICB9LFxuICAgIHRvZ2dsZUFsbDogKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ05vIHRvZ2dsZUFsbCBoYW5kbGVyIHByb3ZpZGVkLicpXG4gICAgfSxcbiAgICBzZWxlY3RUeXBlOiAnY2hlY2tib3gnLFxuICAgIFNlbGVjdElucHV0Q29tcG9uZW50OiBkZWZhdWx0U2VsZWN0SW5wdXRDb21wb25lbnQsXG4gICAgU2VsZWN0QWxsSW5wdXRDb21wb25lbnQ6IGRlZmF1bHRTZWxlY3RJbnB1dENvbXBvbmVudCxcbiAgfVxuXG4gIHJldHVybiB3cmFwcGVyXG59XG4iXX0=