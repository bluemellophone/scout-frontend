import React, { useState, useMemo } from 'react';
import { get, differenceBy } from 'lodash-es';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import useGetKeywords from '../models/keywords/useGetKeywords';
import { getKeywordColor } from '../utils/colorUtils';

export default function KeywordAutocomplete({
  filterAsset, // optionally omit all keywords present on a given asset
  textFieldProps = {},
  value,
  onChange,
}) {
  const { data: keywordOptions } = useGetKeywords();
  const filteredKeywordOptions = useMemo(
    () => {
      if (!filterAsset) return keywordOptions;

      const assetKeywords = filterAsset?.tags;
      if (!assetKeywords || !keywordOptions) return [];
      return differenceBy(keywordOptions, assetKeywords, 'guid');
    },
    [get(filterAsset, 'guid'), keywordOptions],
  );
  const [newTagSelectValue, setNewTagSelectValue] = useState(null);
  const [newTagInputValue, setNewTagInputValue] = useState('');

  return (
    <Autocomplete
      id="tag value"
      freeSolo
      blurOnSelect
      clearOnEscape
      handleHomeEndKeys
      selectOnFocus
      value={newTagSelectValue}
      onChange={(_, newValue) => {
        setNewTagSelectValue(newValue);
      }}
      inputValue={newTagInputValue}
      onInputChange={(_, newValue) => {
        setNewTagInputValue(newValue);
      }}
      options={filteredKeywordOptions}
      getOptionLabel={option => get(option, 'value', '')}
      renderOption={option => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              marginRight: 8,
              borderRadius: 100,
              backgroundColor: getKeywordColor(option.guid),
            }}
          />
          <span>{option.value}</span>
        </div>
      )}
      renderInput={params => (
        <TextField {...params} {...textFieldProps} autoFocus />
      )}
    />
  );
}
