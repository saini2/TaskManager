import React from 'react';
import s from './CardLayout.module.scss';

export default class CardLayout extends React.PureComponent {
  render() {
    const { width, height, fullWidth, classNameStr } = this.props;
    let style = {};
    style.width = width ? width : 'auto';
    style.height = height ? height : 'auto';

    return (
      <>
        <div
          className={`${s.parentOuter} ${fullWidth ? s.fullWidth : ""} ${
            classNameStr ? classNameStr : ""
            }`}
          style={style}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}