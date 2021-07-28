import React from 'react';

const Store = React.createContext();
export default Store;

const { Provider } = Store;
export const StoreProvider = (props) => {
  const value = {
    name: 'jyjin',
  };
  console.log('context store == ', props);
  return (
    <Provider value={value} test="123">
      {props.children}
    </Provider>
  );
};
