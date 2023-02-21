import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './component/store/StoreIndex';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
