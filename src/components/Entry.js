import React from 'react';

const Entry = ({ keyName, value }) => (
  <p style={{ fontFamily: 'Verdana', fontWeight: 'bold', letterSpacing: '0.06em', textAlign: 'left', paddingBottom: '5px' }}>
    <span>{ keyName }</span>
    <span>{ `: ` }</span>
    <span style={{ color: '#426be8' }}>{ value }</span>
  </p>
);

export default Entry;
