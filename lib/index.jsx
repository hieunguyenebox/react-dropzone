import React, { useState } from 'react';
import './index.scss';

function Dropzone(props) {
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false);
  const { width, height, defaultStyle } = props;

  const styles = {};
  if (width) styles.width = width;
  if (height) styles.height = height;

  const classes = ['dz-container'];
  if (defaultStyle) classes.push('dz-style');

  const onDrop = evt => {
    evt.preventDefault();
    console.log(evt.dataTransfer.files);
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
      <div className={`dz-img ${active ? 'dz-active' : ''}`} />
      {error && <div className="error" />}
      <span>Drop file here</span>
    </div>
  );
}

export default Dropzone;
