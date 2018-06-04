import 'bootstrap/dist/css/bootstrap.min.css';
import './index.jsx';
import '../assets/application.css';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
