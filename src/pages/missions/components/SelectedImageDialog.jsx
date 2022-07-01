import React, { useState, useMemo } from 'react';
import { get, differenceBy } from 'lodash-es';

import DialogContent from '@material-ui/core/DialogContent';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

import useAddKeyword from '../../../models/keywords/useAddKeyword';
import useGetKeywords from '../../../models/keywords/useGetKeywords';
import { formatDate } from '../../../utils/formatters';
import { getKeywordColor } from '../../../utils/colorUtils';
import StandardDialog from '../../../components/StandardDialog';
import Text from '../../../components/Text';
import Keywords from '../../../components/Keywords';
import Button from '../../../components/Button';
import Alert from '../../../components/Alert';

export default function SelectedImageDialog({
  open,
  onClose,
  missionGuid,
  missionAssets = [],
  assetGuid,
}) {
  const [addingTag, setAddingTag] = useState(false);
  const { data: keywordOptions } = useGetKeywords();

  const asset = useMemo(
    () => missionAssets.find(a => a?.guid === assetGuid),
    [assetGuid, missionAssets],
  );

  const filteredKeywordOptions = useMemo(
    () => {
      const assetKeywords = asset?.tags;
      if (!assetKeywords || !keywordOptions) return [];
      return differenceBy(keywordOptions, assetKeywords, 'guid');
    },
    [asset?.guid, keywordOptions],
  );
  const [newTagSelectValue, setNewTagSelectValue] = useState(null);
  const [newTagInputValue, setNewTagInputValue] = useState('');

  const {
    mutate: addKeyword,
    loading: addKeywordLoading,
    error: addKeywordError,
    clearError: clearAddKeywordError,
  } = useAddKeyword();

  function onCloseDialog() {
    setAddingTag(false);
    setNewTagInputValue('');
    setNewTagSelectValue(null);
    onClose();
  }

  return (
    <StandardDialog
      fullScreen
      open={open}
      onClose={onCloseDialog}
      title="Selected image"
    >
      <DialogContent>
        <img
          src={asset?.src}
          alt={asset?.filename}
          style={{ width: '100%' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 80,
          }}
        >
          <div>
            {addKeywordError && (
              <Alert
                style={{ marginTop: 16, marginBottom: 8 }}
                severity="error"
                onClose={clearAddKeywordError}
                title="Server error"
                description={addKeywordError}
              />
            )}
            <Keywords
              asset={asset}
              missionGuid={missionGuid}
              deletable
            >
              {addingTag ? (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                >
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
                    getOptionLabel={option =>
                      get(option, 'value', '')
                    }
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
                            backgroundColor: getKeywordColor(
                              option.guid,
                            ),
                          }}
                        />
                        <span>{option.value}</span>
                      </div>
                    )}
                    renderInput={params => (
                      <TextField
                        {...params}
                        autoFocus
                        style={{ width: 200, margin: '0 8px' }}
                      />
                    )}
                  />
                  <Button
                    display="panel"
                    size="small"
                    loading={addKeywordLoading}
                    onClick={async () => {
                      const selectValue = get(
                        newTagSelectValue,
                        'value',
                      );
                      const selectKeywordId = get(
                        newTagSelectValue,
                        'guid',
                      );
                      const matchingKeywordId =
                        newTagInputValue === selectValue
                          ? selectKeywordId
                          : null;

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
                    id="ADD_TAG"
                  />
                </div>
              ) : (
                <Button
                  display="basic"
                  size="small"
                  startIcon={<AddIcon />}
                  onClick={() => setAddingTag(true)}
                  id="ADD_TAG"
                />
              )}
            </Keywords>
          </div>
          <div>
            <Text variant="body2">{`Filename: ${
              asset?.filename
            }`}</Text>
            <Text variant="body2">{`Date added: ${formatDate(
              asset?.created,
            )}`}</Text>
            <Text variant="body2">{`Last updated: ${formatDate(
              asset?.updated,
            )}`}</Text>
            <Text variant="body2">{`Dimensions: ${
              asset?.dimensions?.width
            } Χ ${asset?.dimensions?.height} pixels `}</Text>
            <Text variant="body2">{`Size on disk: ${
              asset?.size_bytes
            } bytes`}</Text>
          </div>
        </div>
      </DialogContent>
    </StandardDialog>
  );
}
