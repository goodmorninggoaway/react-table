import PropTypes from 'prop-types';

export default {
  // General
  data: PropTypes.any,
  loading: PropTypes.bool,
  showPagination: PropTypes.bool,
  showPaginationTop: PropTypes.bool,
  showPaginationBottom: PropTypes.bool,
  showPageSizeOptions: PropTypes.bool,
  pageSizeOptions: PropTypes.array,
  defaultPageSize: PropTypes.number,
  showPageJump: PropTypes.bool,
  collapseOnSortingChange: PropTypes.bool,
  collapseOnPageChange: PropTypes.bool,
  collapseOnDataChange: PropTypes.bool,
  freezeWhenExpanded: PropTypes.bool,
  sortable: PropTypes.bool,
  resizable: PropTypes.bool,
  filterable: PropTypes.bool,
  defaultSortDesc: PropTypes.bool,
  defaultSorted: PropTypes.array,
  defaultFiltered: PropTypes.array,
  defaultResized: PropTypes.array,
  defaultExpanded: PropTypes.object,
  defaultFilterMethod: PropTypes.func,
  defaultSortMethod: PropTypes.func,

  // Controlled State Callbacks
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onSortedChange: PropTypes.func,
  onFilteredChange: PropTypes.func,
  onResizedChange: PropTypes.func,
  onExpandedChange: PropTypes.func,

  // Pivoting
  pivotBy: PropTypes.array,

  // Key Constants
  pivotValKey: PropTypes.string,
  pivotIDKey: PropTypes.string,
  subRowsKey: PropTypes.string,
  aggregatedKey: PropTypes.string,
  nestingLevelKey: PropTypes.string,
  originalKey: PropTypes.string,
  indexKey: PropTypes.string,
  groupedByPivotKey: PropTypes.string,

  // Server-side Callbacks
  onFetchData: PropTypes.func,

  // Classes
  className: PropTypes.string,
  style: PropTypes.object,

  // Component decorators
  getProps: PropTypes.func,
  getTableProps: PropTypes.func,
  getTheadGroupProps: PropTypes.func,
  getTheadGroupTrProps: PropTypes.func,
  getTheadGroupThProps: PropTypes.func,
  getTheadProps: PropTypes.func,
  getTheadTrProps: PropTypes.func,
  getTheadThProps: PropTypes.func,
  getTheadFilterProps: PropTypes.func,
  getTheadFilterTrProps: PropTypes.func,
  getTheadFilterThProps: PropTypes.func,
  getTbodyProps: PropTypes.func,
  getTrGroupProps: PropTypes.func,
  getTrProps: PropTypes.func,
  getTdProps: PropTypes.func,
  getTfootProps: PropTypes.func,
  getTfootTrProps: PropTypes.func,
  getTfootTdProps: PropTypes.func,
  getPaginationProps: PropTypes.func,
  getLoadingProps: PropTypes.func,
  getNoDataProps: PropTypes.func,
  getResizerProps: PropTypes.func,

  // Global Column Defaults
  columns: PropTypes.arrayOf(PropTypes.shape({
    // Renderers
    Cell: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Header: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Footer: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Aggregated: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Pivot: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    PivotValue: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Expander: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    Filter: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

    // All Columns
    sortable: PropTypes.bool, // use table default
    resizable: PropTypes.bool, // use table default
    filterable: PropTypes.bool, // use table default
    show: PropTypes.bool,
    minWidth: PropTypes.number,
    minResizeWidth: PropTypes.number,

    // Cells only
    className: PropTypes.string,
    style: PropTypes.object,
    getProps: PropTypes.func,

    // Pivot only
    aggregate: PropTypes.func,

    // Headers only
    headerClassName: PropTypes.string,
    headerStyle: PropTypes.object,
    getHeaderProps: PropTypes.func,

    // Footers only
    footerClassName: PropTypes.string,
    footerStyle: PropTypes.object,
    getFooterProps: PropTypes.func,
    filterMethod: PropTypes.func,
    filterAll: PropTypes.bool,
    sortMethod: PropTypes.func
  })),

  // Global Expander Column Defaults
  expanderDefaults: PropTypes.shape({
    sortable: PropTypes.bool,
    resizable: PropTypes.bool,
    filterable: PropTypes.bool,
    width: PropTypes.number
  }),

  pivotDefaults: PropTypes.object,

  // Text
  previousText: PropTypes.node,
  nextText: PropTypes.node,
  loadingText: PropTypes.node,
  noDataText: PropTypes.node,
  pageText: PropTypes.node,
  ofText: PropTypes.node,
  rowsText: PropTypes.node,
  pageJumpText: PropTypes.node,
  rowsSelectorText: PropTypes.node,

  // Components
  TableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TheadComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TbodyComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TrGroupComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TrComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  ThComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TdComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  TfootComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  FilterComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  ExpanderComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  PivotValueComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  AggregatedComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  // this is a computed default generated using
  PivotComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  // the ExpanderComponent and PivotValueComponent at run-time in methods.js
  PaginationComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  PreviousComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  NextComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  LoadingComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  NoDataComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  ResizerComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  PadRowComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wVHlwZXMuanMiXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiZGF0YSIsImFueSIsImxvYWRpbmciLCJib29sIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwic2hvd1BhZ2VTaXplT3B0aW9ucyIsInBhZ2VTaXplT3B0aW9ucyIsImFycmF5IiwiZGVmYXVsdFBhZ2VTaXplIiwibnVtYmVyIiwic2hvd1BhZ2VKdW1wIiwiY29sbGFwc2VPblNvcnRpbmdDaGFuZ2UiLCJjb2xsYXBzZU9uUGFnZUNoYW5nZSIsImNvbGxhcHNlT25EYXRhQ2hhbmdlIiwiZnJlZXplV2hlbkV4cGFuZGVkIiwic29ydGFibGUiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiZGVmYXVsdFNvcnREZXNjIiwiZGVmYXVsdFNvcnRlZCIsImRlZmF1bHRGaWx0ZXJlZCIsImRlZmF1bHRSZXNpemVkIiwiZGVmYXVsdEV4cGFuZGVkIiwib2JqZWN0IiwiZGVmYXVsdEZpbHRlck1ldGhvZCIsImZ1bmMiLCJkZWZhdWx0U29ydE1ldGhvZCIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJvblNvcnRlZENoYW5nZSIsIm9uRmlsdGVyZWRDaGFuZ2UiLCJvblJlc2l6ZWRDaGFuZ2UiLCJvbkV4cGFuZGVkQ2hhbmdlIiwicGl2b3RCeSIsInBpdm90VmFsS2V5Iiwic3RyaW5nIiwicGl2b3RJREtleSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5IiwibmVzdGluZ0xldmVsS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5Iiwib25GZXRjaERhdGEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsImNvbHVtbnMiLCJhcnJheU9mIiwic2hhcGUiLCJDZWxsIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIkhlYWRlciIsIkZvb3RlciIsIkFnZ3JlZ2F0ZWQiLCJQaXZvdCIsIlBpdm90VmFsdWUiLCJFeHBhbmRlciIsIkZpbHRlciIsInNob3ciLCJtaW5XaWR0aCIsIm1pblJlc2l6ZVdpZHRoIiwiYWdncmVnYXRlIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJnZXRIZWFkZXJQcm9wcyIsImZvb3RlckNsYXNzTmFtZSIsImZvb3RlclN0eWxlIiwiZ2V0Rm9vdGVyUHJvcHMiLCJmaWx0ZXJNZXRob2QiLCJmaWx0ZXJBbGwiLCJzb3J0TWV0aG9kIiwiZXhwYW5kZXJEZWZhdWx0cyIsIndpZHRoIiwicGl2b3REZWZhdWx0cyIsInByZXZpb3VzVGV4dCIsIm5vZGUiLCJuZXh0VGV4dCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInBhZ2VUZXh0Iiwib2ZUZXh0Iiwicm93c1RleHQiLCJwYWdlSnVtcFRleHQiLCJyb3dzU2VsZWN0b3JUZXh0IiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIlByZXZpb3VzQ29tcG9uZW50IiwiTmV4dENvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLGVBQWU7QUFDYjtBQUNBQyxRQUFNRCxVQUFVRSxHQUZIO0FBR2JDLFdBQVNILFVBQVVJLElBSE47QUFJYkMsa0JBQWdCTCxVQUFVSSxJQUpiO0FBS2JFLHFCQUFtQk4sVUFBVUksSUFMaEI7QUFNYkcsd0JBQXNCUCxVQUFVSSxJQU5uQjtBQU9iSSx1QkFBcUJSLFVBQVVJLElBUGxCO0FBUWJLLG1CQUFpQlQsVUFBVVUsS0FSZDtBQVNiQyxtQkFBaUJYLFVBQVVZLE1BVGQ7QUFVYkMsZ0JBQWNiLFVBQVVJLElBVlg7QUFXYlUsMkJBQXlCZCxVQUFVSSxJQVh0QjtBQVliVyx3QkFBc0JmLFVBQVVJLElBWm5CO0FBYWJZLHdCQUFzQmhCLFVBQVVJLElBYm5CO0FBY2JhLHNCQUFvQmpCLFVBQVVJLElBZGpCO0FBZWJjLFlBQVVsQixVQUFVSSxJQWZQO0FBZ0JiZSxhQUFXbkIsVUFBVUksSUFoQlI7QUFpQmJnQixjQUFZcEIsVUFBVUksSUFqQlQ7QUFrQmJpQixtQkFBaUJyQixVQUFVSSxJQWxCZDtBQW1CYmtCLGlCQUFldEIsVUFBVVUsS0FuQlo7QUFvQmJhLG1CQUFpQnZCLFVBQVVVLEtBcEJkO0FBcUJiYyxrQkFBZ0J4QixVQUFVVSxLQXJCYjtBQXNCYmUsbUJBQWlCekIsVUFBVTBCLE1BdEJkO0FBdUJiQyx1QkFBcUIzQixVQUFVNEIsSUF2QmxCO0FBd0JiQyxxQkFBbUI3QixVQUFV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QUEzQixDQUFwQixDQWpLRjtBQWtLYmtELG9CQUFrQjlILFVBQVUyRSxTQUFWLENBQW9CLENBQUMzRSxVQUFVNEIsSUFBWCxFQUFpQjVCLFVBQVU0RSxPQUEzQixDQUFwQixDQWxLTDtBQW1LYm1ELG1CQUFpQi9ILFVBQVUyRSxTQUFWLENBQW9CLENBQUMzRSxVQUFVNEIsSUFBWCxFQUFpQjVCLFVBQVU0RSxPQUEzQixDQUFwQixDQW5LSjtBQW9LYm9ELG9CQUFrQmhJLFVBQVUyRSxTQUFWLENBQW9CLENBQUMzRSxVQUFVNEIsSUFBWCxFQUFpQjVCLFVBQVU0RSxPQUEzQixDQUFwQixDQXBLTDtBQXFLYnFELG1CQUFpQmpJLFVBQVUyRSxTQUFWLENBQW9CLENBQUMzRSxVQUFVNEIsSUFBWCxFQUFpQjVCLFVBQVU0RSxPQUEzQixDQUFwQjtBQXJLSixDQUFmIiwiZmlsZSI6InByb3BUeXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBHZW5lcmFsXG4gIGRhdGE6IFByb3BUeXBlcy5hbnksXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzaG93UGFnaW5hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dQYWdpbmF0aW9uVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd1BhZ2luYXRpb25Cb3R0b206IFByb3BUeXBlcy5ib29sLFxuICBzaG93UGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRQYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgc2hvd1BhZ2VKdW1wOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sbGFwc2VPblNvcnRpbmdDaGFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICBjb2xsYXBzZU9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbGxhcHNlT25EYXRhQ2hhbmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZnJlZXplV2hlbkV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFNvcnREZXNjOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFNvcnRlZDogUHJvcFR5cGVzLmFycmF5LFxuICBkZWZhdWx0RmlsdGVyZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdFJlc2l6ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgZGVmYXVsdEV4cGFuZGVkOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWZhdWx0RmlsdGVyTWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdFNvcnRNZXRob2Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8vIENvbnRyb2xsZWQgU3RhdGUgQ2FsbGJhY2tzXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUGFnZVNpemVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNvcnRlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRmlsdGVyZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlc2l6ZWRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZGVkQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvLyBQaXZvdGluZ1xuICBwaXZvdEJ5OiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLy8gS2V5IENvbnN0YW50c1xuICBwaXZvdFZhbEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGl2b3RJREtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3ViUm93c0tleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWdncmVnYXRlZEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmVzdGluZ0xldmVsS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmlnaW5hbEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5kZXhLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdyb3VwZWRCeVBpdm90S2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8vIFNlcnZlci1zaWRlIENhbGxiYWNrc1xuICBvbkZldGNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gQ2xhc3Nlc1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8vIENvbXBvbmVudCBkZWNvcmF0b3JzXG4gIGdldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGFibGVQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkR3JvdXBQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkR3JvdXBUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRHcm91cFRoUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUaGVhZFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRUaFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGhlYWRGaWx0ZXJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkRmlsdGVyVHJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRoZWFkRmlsdGVyVGhQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRib2R5UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUckdyb3VwUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUclByb3BzOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0VGRQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFRmb290UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUZm9vdFRyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRUZm9vdFRkUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRQYWdpbmF0aW9uUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRMb2FkaW5nUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICBnZXROb0RhdGFQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFJlc2l6ZXJQcm9wczogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLy8gR2xvYmFsIENvbHVtbiBEZWZhdWx0c1xuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgLy8gUmVuZGVyZXJzXG4gICAgICBDZWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEhlYWRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBGb290ZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgICAgQWdncmVnYXRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBQaXZvdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBQaXZvdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEV4cGFuZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICAgIEZpbHRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAgIC8vIEFsbCBDb2x1bW5zXG4gICAgICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLCAvLyB1c2UgdGFibGUgZGVmYXVsdFxuICAgICAgZmlsdGVyYWJsZTogUHJvcFR5cGVzLmJvb2wsIC8vIHVzZSB0YWJsZSBkZWZhdWx0XG4gICAgICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgbWluUmVzaXplV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAgIC8vIENlbGxzIG9ubHlcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBQaXZvdCBvbmx5XG4gICAgICBhZ2dyZWdhdGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBIZWFkZXJzIG9ubHlcbiAgICAgIGhlYWRlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGhlYWRlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0SGVhZGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgICAvLyBGb290ZXJzIG9ubHlcbiAgICAgIGZvb3RlckNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZvb3RlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgZ2V0Rm9vdGVyUHJvcHM6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZmlsdGVyTWV0aG9kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGZpbHRlckFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzb3J0TWV0aG9kOiBQcm9wVHlwZXMuZnVuY1xuICAgIH0pXG4gICksXG5cbiAgLy8gR2xvYmFsIEV4cGFuZGVyIENvbHVtbiBEZWZhdWx0c1xuICBleHBhbmRlckRlZmF1bHRzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGZpbHRlcmFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pLFxuXG4gIHBpdm90RGVmYXVsdHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLy8gVGV4dFxuICBwcmV2aW91c1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBuZXh0VGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIGxvYWRpbmdUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgbm9EYXRhVGV4dDogUHJvcFR5cGVzLm5vZGUsXG4gIHBhZ2VUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgb2ZUZXh0OiBQcm9wVHlwZXMubm9kZSxcbiAgcm93c1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICBwYWdlSnVtcFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICByb3dzU2VsZWN0b3JUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvLyBDb21wb25lbnRzXG4gIFRhYmxlQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgVGhlYWRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBUYm9keUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIFRyR3JvdXBDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBUckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIFRoQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgVGRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBUZm9vdENvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIEZpbHRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIEV4cGFuZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgUGl2b3RWYWx1ZUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIEFnZ3JlZ2F0ZWRDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAvLyB0aGlzIGlzIGEgY29tcHV0ZWQgZGVmYXVsdCBnZW5lcmF0ZWQgdXNpbmdcbiAgUGl2b3RDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAvLyB0aGUgRXhwYW5kZXJDb21wb25lbnQgYW5kIFBpdm90VmFsdWVDb21wb25lbnQgYXQgcnVuLXRpbWUgaW4gbWV0aG9kcy5qc1xuICBQYWdpbmF0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgUHJldmlvdXNDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBOZXh0Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgTG9hZGluZ0NvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIE5vRGF0YUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIFJlc2l6ZXJDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBQYWRSb3dDb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuZWxlbWVudF0pXG59XG4iXX0=