import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Badge color enumerable.
 *
 * @type {Object}
 */
export const BadgeColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Badge = props => {
  check.assert.maybe.string(props.color, 'Badge.props.color must be a string.');

  const className = classNames(
    props.className || 'badge',
    props.color
  );

  const omitProps = ['color'];

  return (
    <span {...omit(props, omitProps)} className={className}/>
  );
};

export default Badge;
