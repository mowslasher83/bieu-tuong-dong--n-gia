import React from 'react';
import ReactDOM from 'react-dom';

export const IconName = ({ size, color }) => {
  return <div style={{ width: size, height: size, backgroundColor: color }}>Icon</div>;
};

// Vẽ biểu tượng mẫu
export const App = () => <IconName size={24} color="purple" />;

ReactDOM.render(<App />, document.getElementById('app'));