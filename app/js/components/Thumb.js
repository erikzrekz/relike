import classnames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Thumb extends Component {
  static get propTypes() {
    return {
      active: PropTypes.bool.isRequired,
      count: PropTypes.number.isRequired,
      direction: PropTypes.oneOf(['up', 'down']).isRequired,
      filled: PropTypes.bool.isRequired,
      onClick: PropTypes.func.isRequired,
      pending: PropTypes.bool.isRequired,
      textSize: PropTypes.number.isRequired,
      thumbSize: PropTypes.number.isRequired,
    };
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      active,
      count,
      direction,
      filled,
      onClick,
      pending,
      textSize,
      thumbSize,
    } = this.props;

    const containerClasses = classnames([
      'align-items-center',
      'flex',
      'flex-grow-1',
      'justify-center',
      'text-grey',
      `text-size-${thumbSize}`,
    ]);

    const filledClass = filled ? '' : '-o';

    const thumbClasses = classnames([
      'fa',
      `fa-thumbs${filledClass}-${direction}`,
      { 'loading-pulsate': pending },
      { 'text-blue': active },
    ]);

    return (
      <div className={containerClasses}>
        <i aria-hidden="true" className={thumbClasses} onClick={onClick} />
        <span className={`text-size-${textSize} m-4-l`}>
          {count}
        </span>
      </div>
    );
  }
};
