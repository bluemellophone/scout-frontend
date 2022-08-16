import React from 'react';
import { get } from 'lodash-es';

import { withTheme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Text from './components/Text';
import SadScreen from './components/SadScreen';

const initialState = {
  hasError: false,
  errorName: '',
  errorMessage: '',
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorName: get(error, 'name', 'Unnamed Error'),
      errorMessage: get(error, 'message', 'No details available.'),
    };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <SadScreen
        variant="genericError"
        description="If the problem persists, you can report this error on the Community Forums."
      >
        <div
          style={{
            marginTop: 20,
            width: '100%',
            maxWidth: 400,
            textAlign: 'left',
          }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Text variant="h6">View error details</Text>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Text variant="h5">{this.state.errorName}</Text>
              <Text variant="body2">{this.state.errorMessage}</Text>
            </AccordionDetails>
          </Accordion>
        </div>
      </SadScreen>
    );
  }
}

export default withTheme(ErrorBoundary);
