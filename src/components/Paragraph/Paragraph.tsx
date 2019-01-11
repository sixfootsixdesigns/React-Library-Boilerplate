import React from 'react';
import classNames from 'classnames';
import './paragraph.scss';

export interface ParagraphProps {
  compact?: boolean | undefined;
  children?: any;
  className?: string;
}

export class Paragraph extends React.PureComponent<ParagraphProps> {
  public render() {
    const { compact, className, children, ...rest } = this.props;

    const classes = classNames(
      'Paragraph',
      compact && `Paragraph--compact`,
      className
    );

    return (
      <p {...rest} className={classes}>
        {children}
      </p>
    );
  }
}
