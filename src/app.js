import React from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

// top props
export function rootContainer(container) {

  return container
  // return React.createElement('div', { name: 'jyjin123' }, container)
  // return React.createElement(IntlProvider, { name: 'jyjin123' }, container)
}

export function render(oldRender){
  oldRender({name: 'tom'})
}
