
import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Alert from './Alert';

describe('<Alert>', () => {
  it('checkAlertRender', () => {
    const color = "red";
    const message ="Error 2"
    const { getByText } = render(<Alert message={message} color={color}/>);
    const linkElement = getByText(message);
    expect(document.body.contains(linkElement));
  });

  
});