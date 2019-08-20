import React from 'react';
const loginHoc = (Comp) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component{
    render() {
      return (
        <div>
          <Comp/>
        </div>
      );
    }

  };
};

export default loginHoc;