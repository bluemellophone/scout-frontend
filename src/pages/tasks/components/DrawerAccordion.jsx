import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Text from '../../../components/Text';
import Files from './drawerAreas/Files';
import Properties from './drawerAreas/Properties';

const items = [
  {
    id: 'annotations',
    label: 'Annotations',
    component: Properties,
  },
  {
    id: 'files',
    label: 'Files',
    component: Files,
  },
  {
    id: 'counts',
    label: 'Counts',
    component: Properties,
  },
  {
    id: 'properties',
    label: 'Image properties',
    component: Properties,
  },
  {
    id: 'tags',
    label: 'Tags',
    component: Properties,
  },
];

const AccordionSummary = withStyles(theme => ({
  root: {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    margin: '12px 0',
    '&$expanded': {
      margin: '12px 0',
    },
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles({
  root: {
    padding: 'unset',
  },
})(MuiAccordionDetails);

export default function DrawerAccordion(props) {
  const [expanded, setExpanded] = useState('files');

  const handleChange = panel => (_, newExpanded) => {
    if (newExpanded) setExpanded(panel);
  };

  return (
    <div>
      {items.map(item => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          square
        >
          <AccordionSummary
            aria-controls={`${item.label} panel content`}
            id={`${item.id}-header`}
          >
            <Text variant="h6">{item.label}</Text>
          </AccordionSummary>
          <AccordionDetails>
            {<item.component {...props} />}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
