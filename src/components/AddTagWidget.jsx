import React, { useState, useMemo } from 'react';
import { get, differenceBy } from 'lodash-es';

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import useAddKeyword from '../models/keywords/useAddKeyword';
import useGetKeywords from '../models/keywords/useGetKeywords';
import { getKeywordColor } from '../utils/colorUtils';
import Button from './ButtonNew';
import EphemeralFeedback from './EphemeralFeedback';

export default function AddTagWidget({
  missionGuid,
  asset,
  assetUpdatedTime,
  textFieldWidth = 200,
  style = {},
}) {
  const {
    data: keywordOptions,
    dataUpdatedAt: keywordsUpdatedTime,
  } = useGetKeywords();

  const assetGuid = asset?.guid;

  const filteredKeywordOptions = useMemo(
    () => {
      const assetKeywords = asset?.tags;
      if (!assetKeywords || !keywordOptions) return [];
      return differenceBy(keywordOptions, assetKeywords, 'guid');
    },
    [
      assetGuid,
      keywordOptions,
      keywordsUpdatedTime,
      assetUpdatedTime,
    ],
  );
  const [newTagSelectValue, setNewTagSelectValue] = useState(null);
  const [newTagInputValue, setNewTagInputValue] = useState('');

  const {
    mutate: addKeyword,
    loading: addKeywordLoading,
    error: addKeywordError,
    clearError: clearAddKeywordError,
  } = useAddKeyword();

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...style }}>
      <EphemeralFeedback
        severity="error"
        open={Boolean(addKeywordError)}
        setOpen={clearAddKeywordError}
        title="Error adding tag"
        message={addKeywordError}
      />
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
        disabled={addKeywordLoading}
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
          <TextField
            {...params}
            autoFocus
            style={{ width: textFieldWidth, margin: '0 8px' }}
          />
        )}
      />
      <Button
        display="tag"
        icon="add"
        loading={addKeywordLoading}
        onClick={async () => {
          const selectValue = get(newTagSelectValue, 'value');
          const selectKeywordId = get(newTagSelectValue, 'guid');
          const matchingKeywordId =
            newTagInputValue === selectValue ? selectKeywordId : null;

          const successful = await addKeyword({
            assetGuid: asset?.guid,
            keywordGuid: matchingKeywordId,
            keywordValue: newTagInputValue,
            missionGuid,
          });
          if (successful) {
            setNewTagInputValue('');
            setNewTagSelectValue(null);
          }
        }}
      >
        Add tag
      </Button>
    </div>
  );
}
