import React, { useState } from 'react';
import { get } from 'lodash-es';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LinearProgress from '@material-ui/core/LinearProgress';

import FilterList from '@material-ui/icons/FilterList';
import CloudDownload from '@material-ui/icons/CloudDownload';

import Text from '../../../../components/Text';
import Keywords from '../../../../components/Keywords';
import { formatDate } from '../../../../utils/formatters';
import TablePaginationActions from './TablePaginationActions';
import SelectableRow from './SelectableRow';
import sendCsv from './sendCsv';

const dateRendererOptions = {
  customBodyRender: timestamp => (
    <Text variant="body2">{formatDate(timestamp)}</Text>
  ),
};

const countRendererOptions = {
  customBodyRender: count => (
    <Text variant="body2">{count.toString()}</Text>
  ),
};

function getCellAlignment(cellIndex, columnDefinition) {
  if (columnDefinition.align) return columnDefinition.align;
  if (cellIndex === 0) return undefined;
  return 'right';
}

/* Note for component consumers: every data item needs a unique ID!  */
export default function ImageTable({
  data,
  title,
  onClickImage = Function.prototype,
  selectedImages = [],
  setSelectedImages = Function.prototype,
  idKey = 'guid',
  tableSize = 'small',
  noTitleBar,
  loading,
  paginated = false,
  paginatedExternally = true, // display all data provided and let parent component(s) paginate
  page,
  onChangePage,
  rowsPerPage,
  dataCount, // in a paginated table there will be more data than provided to the data prop
  paperStyles = {},
  cellStyles = {},
  searchParams,
  setSearchParams,
  ...rest
}) {
  const columns = [
    {
      name: 'filename',
      label: 'Filename',
      align: 'left',
      sortable: true,
      sortProperty: 'path',
      options: {
        customBodyRender: (filename, asset) => {
          return (
            <button
              type="button"
              style={{ cursor: 'pointer' }}
              onClick={() => onClickImage(asset)}
            >
              {filename}
            </button>
          );
        },
      },
    },
    {
      name: 'created',
      label: 'Date added',
      align: 'left',
      sortable: true,
      options: dateRendererOptions,
    },
    {
      name: 'updated',
      label: 'Last updated',
      align: 'left',
      sortable: true,
      options: dateRendererOptions,
    },
    {
      name: 'annotation_count',
      label: '# Annotations',
      align: 'left',
      sortable: false,
      options: countRendererOptions,
    },
    {
      name: 'tags',
      label: 'Tags',
      align: 'left',
      sortable: false,
      options: {
        customBodyRender: (_, asset) => (
          <Keywords
            asset={asset}
            style={{ marginTop: 0, flexWrap: undefined }}
          />
        ),
      },
    },
  ];
  const initialColumnNames = columns.map(c => c.name);

  const [visibleColumnNames, setVisibleColumnNames] = useState(
    initialColumnNames,
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const filterPopperOpen = Boolean(anchorEl);

  const startIndex = paginated ? page * rowsPerPage : 0;
  const endIndex = paginated
    ? (page + 1) * rowsPerPage - 1
    : Infinity;

  const visibleData = data.filter((_, index) => {
    if (index < startIndex && !paginatedExternally) return false;
    if (index > endIndex && !paginatedExternally) return false;
    return true;
  });

  const visibleColumns = columns.filter(column =>
    visibleColumnNames.includes(column.name),
  );

  const noResults = data && data.length === 0;
  const allImagesSelected =
    selectedImages.length === visibleData.length;

  return (
    <div {...rest}>
      <Popper
        open={filterPopperOpen}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              style={{ padding: '20px 32px 20px 20px' }}
              elevation={8}
            >
              <Grid container direction="column">
                {columns
                  .filter(c =>
                    get(c, 'options.displayInFilter', true),
                  )
                  .map(c => (
                    <FormControlLabel
                      key={c.name}
                      control={
                        <Checkbox
                          size="small"
                          checked={visibleColumnNames.includes(
                            c.name,
                          )}
                          onClick={() => {
                            if (visibleColumnNames.includes(c.name)) {
                              if (visibleColumnNames.length === 1)
                                return;
                              setVisibleColumnNames(
                                visibleColumnNames.filter(
                                  vc => vc !== c.name,
                                ),
                              );
                            } else {
                              setVisibleColumnNames([
                                ...visibleColumnNames,
                                c.name,
                              ]);
                            }
                          }}
                        />
                      }
                      label={<Text variant="body2">{c.label}</Text>}
                    />
                  ))}
              </Grid>
            </Paper>
          </Fade>
        )}
      </Popper>
      {!noTitleBar && (
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ margin: '16px 0' }}
        >
          <Grid item>
            <Text variant="body2">{title}</Text>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => sendCsv(visibleColumns, visibleData)}
              size="small"
            >
              <CloudDownload style={{ marginRight: 4 }} />
            </IconButton>
            <IconButton
              onClick={event => {
                setAnchorEl(anchorEl ? null : event.currentTarget);
              }}
              size="small"
            >
              <FilterList />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <TableContainer style={paperStyles}>
        <Table
          style={{ minWidth: 10 }}
          size={tableSize}
          aria-label={title}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedImages.length > 0 && !allImagesSelected
                  }
                  checked={allImagesSelected}
                  onChange={() => {
                    if (allImagesSelected) {
                      setSelectedImages([]);
                    } else {
                      setSelectedImages(
                        visibleData.map(datum => get(datum, idKey)),
                      );
                    }
                  }}
                  inputProps={{ 'aria-label': 'Select all images' }}
                />
              </TableCell>
              {visibleColumns.map((c, i) => {
                const sortProperty = c?.sortProperty || c.name;
                const activeSort =
                  sortProperty === searchParams?.sort;
                const reverseSearch = get(
                  searchParams,
                  'reverse',
                  false,
                );
                const sortDirection = reverseSearch ? 'desc' : 'asc';
                return (
                  <TableCell
                    key={c.name}
                    align={getCellAlignment(i, c)}
                    sortDirection={sortDirection}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {c?.sortable ? (
                      <TableSortLabel
                        active={activeSort}
                        direction={sortDirection}
                        onClick={() => {
                          const nextReverse = activeSort
                            ? !reverseSearch
                            : false;
                          setSearchParams({
                            ...searchParams,
                            sort: sortProperty,
                            reverse: nextReverse,
                          });
                        }}
                      >
                        {c.label}
                      </TableSortLabel>
                    ) : (
                      c.label
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody style={{ whiteSpace: 'nowrap' }}>
            {!loading &&
              visibleData.map(datum => {
                const datumGuid = get(datum, idKey);
                const datumSelected = selectedImages.includes(
                  datumGuid,
                );
                return (
                  <SelectableRow
                    key={datumGuid}
                    onSelectRow={() => {
                      if (datumSelected) {
                        setSelectedImages(
                          selectedImages.filter(i => i !== datumGuid),
                        );
                      } else {
                        setSelectedImages([
                          ...selectedImages,
                          datumGuid,
                        ]);
                      }
                    }}
                    selected={datumSelected}
                    datum={datum}
                    cellStyles={cellStyles}
                    columns={visibleColumns}
                  />
                );
              })}
          </TableBody>
          {paginated && !loading && !noResults && (
            <TableFooter>
              <TableRow>
                <TablePagination
                  page={page}
                  count={dataCount || get(data, 'length', 0)}
                  onChangePage={onChangePage}
                  rowsPerPage={rowsPerPage}
                  rowsPerPageOptions={[rowsPerPage]}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
      {!loading && noResults && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <Text style={{ marginTop: 12 }}>No images to display.</Text>
        </div>
      )}
      {loading && <LinearProgress style={{ margin: '16px 32px' }} />}
    </div>
  );
}
