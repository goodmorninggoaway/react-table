'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultButton = function defaultButton(props) {
  return _react2.default.createElement(
    'button',
    _extends({ type: 'button' }, props, { className: '-btn' }),
    props.children
  );
};

var ReactTablePagination = function (_Component) {
  _inherits(ReactTablePagination, _Component);

  function ReactTablePagination(props) {
    _classCallCheck(this, ReactTablePagination);

    var _this = _possibleConstructorReturn(this, (ReactTablePagination.__proto__ || Object.getPrototypeOf(ReactTablePagination)).call(this));

    _this.getSafePage = _this.getSafePage.bind(_this);
    _this.changePage = _this.changePage.bind(_this);
    _this.applyPage = _this.applyPage.bind(_this);

    _this.state = {
      page: props.page
    };
    return _this;
  }

  _createClass(ReactTablePagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.page !== nextProps.page) {
        this.setState({ page: nextProps.page });
      }
    }
  }, {
    key: 'getSafePage',
    value: function getSafePage(page) {
      if (Number.isNaN(page)) {
        page = this.props.page;
      }
      return Math.min(Math.max(page, 0), this.props.pages - 1);
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      page = this.getSafePage(page);
      this.setState({ page: page });
      if (this.props.page !== page) {
        this.props.onPageChange(page);
      }
    }
  }, {
    key: 'applyPage',
    value: function applyPage(e) {
      if (e) {
        e.preventDefault();
      }
      var page = this.state.page;
      this.changePage(page === '' ? this.props.page : page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          pages = _props.pages,
          page = _props.page,
          showPageSizeOptions = _props.showPageSizeOptions,
          pageSizeOptions = _props.pageSizeOptions,
          pageSize = _props.pageSize,
          showPageJump = _props.showPageJump,
          canPrevious = _props.canPrevious,
          canNext = _props.canNext,
          onPageSizeChange = _props.onPageSizeChange,
          className = _props.className,
          _props$PreviousCompon = _props.PreviousComponent,
          PreviousComponent = _props$PreviousCompon === undefined ? defaultButton : _props$PreviousCompon,
          _props$NextComponent = _props.NextComponent,
          NextComponent = _props$NextComponent === undefined ? defaultButton : _props$NextComponent;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, '-pagination'), style: this.props.style },
        _react2.default.createElement(
          'div',
          { className: '-previous' },
          _react2.default.createElement(
            PreviousComponent,
            {
              onClick: function onClick() {
                if (!canPrevious) return;
                _this2.changePage(page - 1);
              },
              disabled: !canPrevious
            },
            this.props.previousText
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '-center' },
          _react2.default.createElement(
            'span',
            { className: '-pageInfo' },
            this.props.pageText,
            ' ',
            showPageJump ? _react2.default.createElement(
              'div',
              { className: '-pageJump' },
              _react2.default.createElement('input', {
                'aria-label': this.props.pageJumpText,
                type: this.state.page === '' ? 'text' : 'number',
                onChange: function onChange(e) {
                  var val = e.target.value;
                  var page = val - 1;
                  if (val === '') {
                    return _this2.setState({ page: val });
                  }
                  _this2.setState({ page: _this2.getSafePage(page) });
                },
                value: this.state.page === '' ? '' : this.state.page + 1,
                onBlur: this.applyPage,
                onKeyPress: function onKeyPress(e) {
                  if (e.which === 13 || e.keyCode === 13) {
                    _this2.applyPage();
                  }
                }
              })
            ) : _react2.default.createElement(
              'span',
              { className: '-currentPage' },
              page + 1
            ),
            ' ',
            this.props.ofText,
            ' ',
            _react2.default.createElement(
              'span',
              { className: '-totalPages' },
              pages || 1
            )
          ),
          showPageSizeOptions && _react2.default.createElement(
            'span',
            { className: 'select-wrap -pageSizeOptions' },
            _react2.default.createElement(
              'select',
              {
                'aria-label': this.props.rowsSelectorText,
                onChange: function onChange(e) {
                  return onPageSizeChange(Number(e.target.value));
                },
                value: pageSize },
              pageSizeOptions.map(function (option, i) {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  _react2.default.createElement(
                    'option',
                    { key: i, value: option },
                    option + ' ' + _this2.props.rowsText
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: '-next' },
          _react2.default.createElement(
            NextComponent,
            {
              onClick: function onClick() {
                if (!canNext) return;
                _this2.changePage(page + 1);
              },
              disabled: !canNext
            },
            this.props.nextText
          )
        )
      );
    }
  }]);

  return ReactTablePagination;
}(_react.Component);

exports.default = ReactTablePagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRCdXR0b24iLCJwcm9wcyIsImNoaWxkcmVuIiwiUmVhY3RUYWJsZVBhZ2luYXRpb24iLCJnZXRTYWZlUGFnZSIsImJpbmQiLCJjaGFuZ2VQYWdlIiwiYXBwbHlQYWdlIiwic3RhdGUiLCJwYWdlIiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJOdW1iZXIiLCJpc05hTiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJwYWdlcyIsIm9uUGFnZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dQYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZU9wdGlvbnMiLCJwYWdlU2l6ZSIsInNob3dQYWdlSnVtcCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsIm9uUGFnZVNpemVDaGFuZ2UiLCJjbGFzc05hbWUiLCJQcmV2aW91c0NvbXBvbmVudCIsIk5leHRDb21wb25lbnQiLCJzdHlsZSIsInByZXZpb3VzVGV4dCIsInBhZ2VUZXh0IiwicGFnZUp1bXBUZXh0IiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJ3aGljaCIsImtleUNvZGUiLCJvZlRleHQiLCJyb3dzU2VsZWN0b3JUZXh0IiwibWFwIiwib3B0aW9uIiwiaSIsInJvd3NUZXh0IiwibmV4dFRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsU0FDcEI7QUFBQTtBQUFBLGVBQVEsTUFBSyxRQUFiLElBQTBCQyxLQUExQixJQUFpQyxXQUFVLE1BQTNDO0FBQ0dBLFVBQU1DO0FBRFQsR0FEb0I7QUFBQSxDQUF0Qjs7SUFNcUJDLG9COzs7QUFDbkIsZ0NBQWFGLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLFVB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QUZaO0FBR0UsdUJBQU9kLFFBSFQ7QUFJR0QsOEJBQWdCb0IsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUE7QUFDbkI7QUFDQTtBQUFBO0FBQUEsc0JBQVEsS0FBS0EsQ0FBYixFQUFnQixPQUFPRCxNQUF2QjtBQUNNQSwwQkFETixTQUNnQixPQUFLMUMsS0FBTCxDQUFXNEM7QUFEM0I7QUFGbUI7QUFBQSxlQUFwQjtBQUpIO0FBREY7QUEvQkosU0FaRjtBQTBERTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRSx1QkFBUyxtQkFBTTtBQUNiLG9CQUFJLENBQUNuQixPQUFMLEVBQWM7QUFDZCx1QkFBS3BCLFVBQUwsQ0FBZ0JHLE9BQU8sQ0FBdkI7QUFDRCxlQUpIO0FBS0Usd0JBQVUsQ0FBQ2lCO0FBTGI7QUFPRyxpQkFBS3pCLEtBQUwsQ0FBVzZDO0FBUGQ7QUFERjtBQTFERixPQURGO0FBd0VEOzs7O0VBcEkrQ0MsZ0I7O2tCQUE3QjVDLG9CIiwiZmlsZSI6InBhZ2luYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBkZWZhdWx0QnV0dG9uID0gcHJvcHMgPT4gKFxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB7Li4ucHJvcHN9IGNsYXNzTmFtZT1cIi1idG5cIj5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlUGFnaW5hdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0U2FmZVBhZ2UgPSB0aGlzLmdldFNhZmVQYWdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhZ2UgPSB0aGlzLmNoYW5nZVBhZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuYXBwbHlQYWdlID0gdGhpcy5hcHBseVBhZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHByb3BzLnBhZ2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucGFnZSAhPT0gbmV4dFByb3BzLnBhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiBuZXh0UHJvcHMucGFnZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFNhZmVQYWdlIChwYWdlKSB7XG4gICAgaWYgKE51bWJlci5pc05hTihwYWdlKSkge1xuICAgICAgcGFnZSA9IHRoaXMucHJvcHMucGFnZVxuICAgIH1cbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgocGFnZSwgMCksIHRoaXMucHJvcHMucGFnZXMgLSAxKVxuICB9XG5cbiAgY2hhbmdlUGFnZSAocGFnZSkge1xuICAgIHBhZ2UgPSB0aGlzLmdldFNhZmVQYWdlKHBhZ2UpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2UgfSlcbiAgICBpZiAodGhpcy5wcm9wcy5wYWdlICE9PSBwYWdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZShwYWdlKVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5UGFnZSAoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG4gICAgY29uc3QgcGFnZSA9IHRoaXMuc3RhdGUucGFnZVxuICAgIHRoaXMuY2hhbmdlUGFnZShwYWdlID09PSAnJyA/IHRoaXMucHJvcHMucGFnZSA6IHBhZ2UpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIC8vIENvbXB1dGVkXG4gICAgICBwYWdlcyxcbiAgICAgIC8vIFByb3BzXG4gICAgICBwYWdlLFxuICAgICAgc2hvd1BhZ2VTaXplT3B0aW9ucyxcbiAgICAgIHBhZ2VTaXplT3B0aW9ucyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgc2hvd1BhZ2VKdW1wLFxuICAgICAgY2FuUHJldmlvdXMsXG4gICAgICBjYW5OZXh0LFxuICAgICAgb25QYWdlU2l6ZUNoYW5nZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIFByZXZpb3VzQ29tcG9uZW50ID0gZGVmYXVsdEJ1dHRvbixcbiAgICAgIE5leHRDb21wb25lbnQgPSBkZWZhdWx0QnV0dG9uLFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCAnLXBhZ2luYXRpb24nKX0gc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1wcmV2aW91c1wiPlxuICAgICAgICAgIDxQcmV2aW91c0NvbXBvbmVudFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNhblByZXZpb3VzKSByZXR1cm5cbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKHBhZ2UgLSAxKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGRpc2FibGVkPXshY2FuUHJldmlvdXN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMucHJldmlvdXNUZXh0fVxuICAgICAgICAgIDwvUHJldmlvdXNDb21wb25lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1jZW50ZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCItcGFnZUluZm9cIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnBhZ2VUZXh0fXsnICd9XG4gICAgICAgICAgICB7c2hvd1BhZ2VKdW1wID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1wYWdlSnVtcFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5wcm9wcy5wYWdlSnVtcFRleHR9XG4gICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcnID8gJ3RleHQnIDogJ251bWJlcid9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSB2YWwgLSAxXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB2YWwgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGhpcy5nZXRTYWZlUGFnZShwYWdlKSB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhZ2UgPT09ICcnID8gJycgOiB0aGlzLnN0YXRlLnBhZ2UgKyAxfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmFwcGx5UGFnZX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS53aGljaCA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlQYWdlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIi1jdXJyZW50UGFnZVwiPntwYWdlICsgMX08L3NwYW4+XG4gICAgICAgICAgICApfXsnICd9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5vZlRleHR9IDxzcGFuIGNsYXNzTmFtZT1cIi10b3RhbFBhZ2VzXCI+e3BhZ2VzIHx8IDF9PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7c2hvd1BhZ2VTaXplT3B0aW9ucyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3Qtd3JhcCAtcGFnZVNpemVPcHRpb25zXCI+XG4gICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnByb3BzLnJvd3NTZWxlY3RvclRleHR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25QYWdlU2l6ZUNoYW5nZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9PlxuICAgICAgICAgICAgICAgIHtwYWdlU2l6ZU9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAge2Ake29wdGlvbn0gJHt0aGlzLnByb3BzLnJvd3NUZXh0fWB9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW5leHRcIj5cbiAgICAgICAgICA8TmV4dENvbXBvbmVudFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWNhbk5leHQpIHJldHVyblxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBhZ2UocGFnZSArIDEpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5OZXh0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm5leHRUZXh0fVxuICAgICAgICAgIDwvTmV4dENvbXBvbmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==