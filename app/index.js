import 'bootstrap/dist/css/bootstrap.min.css';
import run from './index.jsx';
import faker from 'faker';
// import gon from 'gon';
import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const userName = faker.name.findName();
const getName = () => cookies.get('name');
if (!getName()) {
  cookies.set('name', userName);
}

run(getName());