
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/style.css'
import { Provider } from 'react-redux';
import Store from './redux/slices/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

