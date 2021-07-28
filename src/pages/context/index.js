import { StoreProvider } from './Store';
import App from './App';

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};
