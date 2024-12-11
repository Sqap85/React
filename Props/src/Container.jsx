import React from 'react';

function Container(props) {
    {/* {children} diye alabilirdik */}
  return (
    <div>
      <div>Container</div>
      {/* Parent bileşenin içine yerleştirilen alt bileşen (children) */}
      {props.children}
    </div>
  );
}

export default Container;