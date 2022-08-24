import React from 'react';
import { get } from 'lodash-es';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import { cellRenderers } from '../../../../components/dataDisplays/cellRenderers';

function getCellAlignment(cellIndex, columnDefinition) {
  if (columnDefinition.align) return columnDefinition.align;
  if (cellIndex === 0) return undefined;
  return 'right';
}

export default function SelectableRow({
  columns,
  datum,
  cellStyles = {},
  onSelectRow,
  selected,
  ...rest
}) {
  return (
    <TableRow {...rest}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onChange={onSelectRow}
          inputProps={{ 'aria-label': 'Select this image' }}
        />
      </TableCell>
      {columns.map((c, i) => {
        const cellValue = get(datum, c.name);

        const requestedCellRenderer = get(
          c,
          'options.cellRenderer',
          'default',
        );
        const cellRendererProps = get(
          c,
          'options.cellRendererProps',
          {},
        );
        const customCellRenderer = get(c, 'options.customBodyRender');
        const RequestedCellRenderer =
          cellRenderers[requestedCellRenderer];

        return (
          <TableCell
            key={c.name}
            align={getCellAlignment(i, c)}
            style={{
              ...cellStyles,
            }}
          >
            {customCellRenderer ? (
              customCellRenderer(cellValue, datum)
            ) : (
              <RequestedCellRenderer
                value={cellValue}
                datum={datum}
                {...cellRendererProps}
              />
            )}{' '}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
