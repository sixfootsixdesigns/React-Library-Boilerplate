import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from './Paragraph';

storiesOf('Paragraph', module)
  .add('Default', () =>
    <div>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
      Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
      Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</Paragraph>
    </div>
  )
  .add('Compact', () =>
    <div>
      <Paragraph compact>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
      Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</Paragraph>
      <Paragraph compact>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et metus ex.
      Vestibulum nunc dolor, pellentesque eu tortor vitae, semper tempor lectus.
      Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Nam lacinia quam nibh, quis egestas purus hendrerit non</Paragraph>
    </div>
  )
;
