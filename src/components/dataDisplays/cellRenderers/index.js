import DefaultRenderer from './DefaultRenderer';
import ActionsRenderer from './ActionsRenderer';
import UserRenderer from './UserRenderer';
import CapitalizedStringRenderer from './CapitalizedStringRenderer';
import DateRenderer from './DateRenderer';
import FloatRenderer from './FloatRenderer';
import IntegerRenderer from './IntegerRenderer';

export const cellRendererTypes = {
  default: 'default',
  actions: 'actions',
  user: 'user',
  capitalizedString: 'capitalizedString',
  date: 'date',
  float: 'float',
  integer: 'integer',
};

export const cellRenderers = {
  [cellRendererTypes.default]: DefaultRenderer,
  [cellRendererTypes.actions]: ActionsRenderer,
  [cellRendererTypes.user]: UserRenderer,
  [cellRendererTypes.capitalizedString]: CapitalizedStringRenderer,
  [cellRendererTypes.date]: DateRenderer,
  [cellRendererTypes.float]: FloatRenderer,
  [cellRendererTypes.integer]: IntegerRenderer,
};
