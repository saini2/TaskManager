import React from 'react';
import s from './TabChanger.module.scss';

export default class TabChanger extends React.PureComponent {
  render() {
    if (this.props.config === this.props.active) {
      return (
        <div onClick={this.props.onClick} className={s.clicked}>
          <div className={s.highlighted}>
            <span
              className={`${s.text}`}
            >
              {this.props.text}
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div onClick={this.props.onClick} className={s.click}>
          <div className={s.highlight}>
            <span
              className={`${s.text}`}
            >
              {this.props.text}
            </span>
          </div>
        </div>
      );
    }
  }
}
