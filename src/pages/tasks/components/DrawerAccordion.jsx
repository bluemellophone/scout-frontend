import React, { useState } from 'react';

import { useTheme } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Text from '../../../components/Text';
import Files from './drawerAreas/Files';
import Properties from './drawerAreas/Properties';

const items = [
  {
    id: 'annotations',
    label: 'Annotations',
    component: () => <div>Annotations</div>,
  },
  {
    id: 'files',
    label: 'Files',
    component: Files,
  },
  {
    id: 'counts',
    label: 'Counts',
    component: () => <div>Counts</div>,
  },
  {
    id: 'properties',
    label: 'Image properties',
    component: Properties,
  },
  {
    id: 'tags',
    label: 'Tags',
    component: () => <div>Tags</div>,
  },
];

export default function DrawerAccordion(props) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState('files');

  const handleChange = panel => (_, newExpanded) => {
    if (newExpanded) setExpanded(panel);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      {items.map(item => {
        const isExpanded = expanded === item.id;
        return (
          <Accordion
            key={item.id}
            expanded={isExpanded}
            onChange={handleChange(item.id)}
            style={{
              flexGrow: isExpanded ? 1 : 0,
              overflow: 'scroll',
              flexShrink: isExpanded ? 1 : 0,
            }}
            TransitionProps={{ timeout: 0 }}
            square
          >
            <AccordionSummary
              aria-controls={`${item.label} panel content`}
              id={`${item.id}-header`}
              style={{
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  0.1,
                ),
                minHeight: 56,
              }}
            >
              <Text variant="h6">{item.label}</Text>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 'unset' }}>
              {<item.component {...props} />}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
