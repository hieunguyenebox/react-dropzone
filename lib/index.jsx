import React, { useState } from 'react';
import './index.scss';

function Image() {
  return (
    <div className="dz-img">
      <span className="dz-delete-icon" />
      <img
        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
        alt=""
      />
    </div>
  );
}

function Dropzone(props) {
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  const { width, height, defaultStyle } = props;

  const styles = {};
  if (width) styles.width = width;
  if (height) styles.height = height;

  const classes = ['dz-container'];
  if (defaultStyle) classes.push('dz-style');
  if (active) classes.push('dz-active');

  const onDrop = evt => {
    evt.preventDefault();
    setActive(false);
    setError(false);
  };

  return (
    <div
      style={{ ...styles }}
      className={classes.join(' ')}
      onDrop={onDrop}
      onDragOver={evt => evt.preventDefault()}
      onDragEnter={() => setActive(true)}
      onDragLeave={() => setActive(false)}
    >
      <div className="dz-img-list">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
      {error && <div className="error" />}
      <span className="dz-placholder">Drop file here</span>
    </div>
  );
}

export default Dropzone;
