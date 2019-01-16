var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable */

import React from 'react';

var defaultSelectInputComponent = function defaultSelectInputComponent(props) {
  return React.createElement('input', {
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

export default (function (Component, options) {
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
        return React.createElement(this.props.SelectInputComponent, inputProps);
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

        return React.createElement(SelectAllInputComponent, inputProps);
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
        return React.createElement(Component, _extends({}, rest, extra, { ref: function ref(r) {
            return _this2.wrappedInstance = r;
          } }));
      }
    }]);

    return RTSelectTable;
  }(React.Component);

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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ob2Mvc2VsZWN0VGFibGUvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJkZWZhdWx0U2VsZWN0SW5wdXRDb21wb25lbnQiLCJwcm9wcyIsInNlbGVjdFR5cGUiLCJjaGVja2VkIiwic2hpZnRLZXkiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwib25DbGljayIsImlkIiwicm93IiwiQ29tcG9uZW50Iiwib3B0aW9ucyIsIndyYXBwZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUZpZWxkIiwidG9nZ2xlU2VsZWN0aW9uIiwiaXNTZWxlY3RlZCIsImlucHV0UHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU2VsZWN0SW5wdXRDb21wb25lbnQiLCJ0b2dnbGVBbGwiLCJzZWxlY3RBbGwiLCJTZWxlY3RBbGxJbnB1dENvbXBvbmVudCIsIndyYXBwZWRJbnN0YW5jZSIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0V3JhcHBlZEluc3RhbmNlIiwib3JpZ2luYWxDb2xzIiwiY29sdW1ucyIsInNlbGVjdFdpZHRoIiwicmVzdCIsImZsb2F0aW5nTGVmdCIsInNlbGVjdCIsImFjY2Vzc29yIiwiSGVhZGVyIiwiaGVhZFNlbGVjdG9yIiwiYmluZCIsIkNlbGwiLCJyb3dTZWxlY3RvciIsImNpIiwib3JpZ2luYWwiLCJ3aWR0aCIsImZpbHRlcmFibGUiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsInN0eWxlIiwidGV4dEFsaWduIiwiZXh0cmEiLCJyIiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJsb2ciLCJrZXkiLCJzaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCOztBQUVBLElBQU1DLDhCQUE4QixTQUE5QkEsMkJBQThCLFFBQVM7QUFDM0MsU0FDRTtBQUNFLFVBQU1DLE1BQU1DLFVBQU4sSUFBb0IsVUFENUI7QUFFRSxhQUFTRCxNQUFNRSxPQUZqQjtBQUdFLGFBQVMsb0JB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QVNyQlcsZUFBVyxxQkFBTTtBQUNmSSxjQUFRMkIsR0FBUixDQUFZLGdDQUFaO0FBQ0QsS0FYb0I7QUFZckJqRCxnQkFBWSxVQVpTO0FBYXJCaUIsMEJBQXNCbkIsMkJBYkQ7QUFjckJzQiw2QkFBeUJ0QjtBQWRKLEdBQXZCOztBQWlCQSxTQUFPWSxPQUFQO0FBQ0QsQ0FqR0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGRlZmF1bHRTZWxlY3RJbnB1dENvbXBvbmVudCA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9e3Byb3BzLnNlbGVjdFR5cGUgfHwgJ2NoZWNrYm94J31cbiAgICAgIGNoZWNrZWQ9e3Byb3BzLmNoZWNrZWR9XG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgY29uc3QgeyBzaGlmdEtleSB9ID0gZVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHByb3BzLm9uQ2xpY2socHJvcHMuaWQsIHNoaWZ0S2V5LCBwcm9wcy5yb3cpXG4gICAgICB9fVxuICAgICAgb25DaGFuZ2U9eygpID0+IHt9fVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgKENvbXBvbmVudCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gY2xhc3MgUlRTZWxlY3RUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cblxuICAgIHJvd1NlbGVjdG9yKHJvdykge1xuICAgICAgaWYgKCFyb3cgfHwgIXJvdy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmtleUZpZWxkKSkgcmV0dXJuIG51bGxcbiAgICAgIGNvbnN0IHsgdG9nZ2xlU2VsZWN0aW9uLCBzZWxlY3RUeXBlLCBrZXlGaWVsZCB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMucHJvcHMuaXNTZWxlY3RlZChyb3dbdGhpcy5wcm9wcy5rZXlGaWVsZF0pXG4gICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgICBjaGVja2VkLFxuICAgICAgICBvbkNsaWNrOiB0b2dnbGVTZWxlY3Rpb24sXG4gICAgICAgIHNlbGVjdFR5cGUsXG4gICAgICAgIGlkOiByb3dba2V5RmllbGRdLFxuICAgICAgICByb3csXG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLlNlbGVjdElucHV0Q29tcG9uZW50LCBpbnB1dFByb3BzKVxuICAgIH1cblxuICAgIGhlYWRTZWxlY3Rvcihyb3cpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0VHlwZSB9ID0gdGhpcy5wcm9wc1xuICAgICAgaWYgKHNlbGVjdFR5cGUgPT09ICdyYWRpbycpIHJldHVybiBudWxsXG5cbiAgICAgIGNvbnN0IHsgdG9nZ2xlQWxsLCBzZWxlY3RBbGw6IGNoZWNrZWQsIFNlbGVjdEFsbElucHV0Q29tcG9uZW50IH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgICBjaGVja2VkLFxuICAgICAgICBvbkNsaWNrOiB0b2dnbGVBbGwsXG4gICAgICAgIHNlbGVjdFR5cGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdEFsbElucHV0Q29tcG9uZW50LCBpbnB1dFByb3BzKVxuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgc28gd2UgY2FuIGV4cG9zZSB0aGUgdW5kZXJseWluZyBSZWFjdFRhYmxlIHRvIGdldCBhdCB0aGUgc29ydGVkRGF0YSBmb3Igc2VsZWN0QWxsXG4gICAgZ2V0V3JhcHBlZEluc3RhbmNlKCkge1xuICAgICAgaWYgKCF0aGlzLndyYXBwZWRJbnN0YW5jZSkgY29uc29sZS53YXJuKCdSVFNlbGVjdFRhYmxlIC0gTm8gd3JhcHBlZCBpbnN0YW5jZScpXG4gICAgICBpZiAodGhpcy53cmFwcGVkSW5zdGFuY2UuZ2V0V3JhcHBlZEluc3RhbmNlKSByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2UuZ2V0V3JhcHBlZEluc3RhbmNlKClcbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb2x1bW5zOiBvcmlnaW5hbENvbHMsXG4gICAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAgIHRvZ2dsZVNlbGVjdGlvbixcbiAgICAgICAgdG9nZ2xlQWxsLFxuICAgICAgICBrZXlGaWVsZCxcbiAgICAgICAgc2VsZWN0QWxsLFxuICAgICAgICBzZWxlY3RUeXBlLFxuICAgICAgICBzZWxlY3RXaWR0aCxcbiAgICAgICAgU2VsZWN0QWxsSW5wdXRDb21wb25lbnQsXG4gICAgICAgIFNlbGVjdElucHV0Q29tcG9uZW50LFxuICAgICAgICAuLi5yZXN0XG4gICAgICB9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgeyBmbG9hdGluZ0xlZnQgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgICAgY29uc3Qgc2VsZWN0ID0ge1xuICAgICAgICBpZDogJ19zZWxlY3RvcicsXG4gICAgICAgIGFjY2Vzc29yOiAoKSA9PiAneCcsIC8vIHRoaXMgdmFsdWUgaXMgbm90IGltcG9ydGFudFxuICAgICAgICBIZWFkZXI6IHRoaXMuaGVhZFNlbGVjdG9yLmJpbmQodGhpcyksXG4gICAgICAgIENlbGw6IGNpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb3dTZWxlY3Rvci5iaW5kKHRoaXMpKGNpLm9yaWdpbmFsKVxuICAgICAgICB9LFxuICAgICAgICB3aWR0aDogc2VsZWN0V2lkdGggfHwgMzAsXG4gICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgICBzb3J0YWJsZTogZmFsc2UsXG4gICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgIHN0eWxlOiB7IHRleHRBbGlnbjogJ2NlbnRlcicgfSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sdW1ucyA9IGZsb2F0aW5nTGVmdCA/IFsuLi5vcmlnaW5hbENvbHMsIHNlbGVjdF0gOiBbc2VsZWN0LCAuLi5vcmlnaW5hbENvbHNdXG4gICAgICBjb25zdCBleHRyYSA9IHtcbiAgICAgICAgY29sdW1ucyxcbiAgICAgIH1cbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5yZXN0fSB7Li4uZXh0cmF9IHJlZj17ciA9PiAodGhpcy53cmFwcGVkSW5zdGFuY2UgPSByKX0gLz5cbiAgICB9XG4gIH1cblxuICB3cmFwcGVyLmRpc3BsYXlOYW1lID0gJ1JUU2VsZWN0VGFibGUnXG4gIHdyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGtleUZpZWxkOiAnX2lkJyxcbiAgICBpc1NlbGVjdGVkOiBrZXkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ05vIGlzU2VsZWN0ZWQgaGFuZGxlciBwcm92aWRlZDonLCB7IGtleSB9KVxuICAgIH0sXG4gICAgc2VsZWN0QWxsOiBmYWxzZSxcbiAgICB0b2dnbGVTZWxlY3Rpb246IChrZXksIHNoaWZ0LCByb3cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyB0b2dnbGVTZWxlY3Rpb24gaGFuZGxlciBwcm92aWRlZDonLCB7IGtleSwgc2hpZnQsIHJvdyB9KVxuICAgIH0sXG4gICAgdG9nZ2xlQWxsOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gdG9nZ2xlQWxsIGhhbmRsZXIgcHJvdmlkZWQuJylcbiAgICB9LFxuICAgIHNlbGVjdFR5cGU6ICdjaGVja2JveCcsXG4gICAgU2VsZWN0SW5wdXRDb21wb25lbnQ6IGRlZmF1bHRTZWxlY3RJbnB1dENvbXBvbmVudCxcbiAgICBTZWxlY3RBbGxJbnB1dENvbXBvbmVudDogZGVmYXVsdFNlbGVjdElucHV0Q29tcG9uZW50LFxuICB9XG5cbiAgcmV0dXJuIHdyYXBwZXJcbn1cbiJdfQ==