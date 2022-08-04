import { isDate, isValid } from 'date-fns';

export function isValidDate(thing) {
  if (!isDate(thing)) return false;
  return isValid(thing);
}
