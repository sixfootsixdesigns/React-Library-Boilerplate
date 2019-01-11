import React from 'react';
import { Paragraph } from '../Paragraph';
import { render } from 'react-testing-library';

describe('Paragraph Component', () => {
  it('Paragraph renders', () => {
    const { container } = render(<Paragraph />);

    const node = container.querySelector('p.Paragraph');
    expect(node!.className).toEqual('Paragraph');
  });

  it('Paragraph compact renders', () => {
    const { container } = render(<Paragraph compact />);

    const node = container.querySelector('p.Paragraph');
    expect(node!.className).toEqual('Paragraph Paragraph--compact');
  });
});
