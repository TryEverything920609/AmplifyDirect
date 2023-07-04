import './App.css';
import './asset/css/animate.css';
import './asset/css/App.css';
import './asset/css/base.css';
import './asset/css/fontawesome-all.css';
import './asset/css/magnific-popup.css';
import './asset/css/owl.carousel.css';
import './asset/css/responseive.css';
import './asset/css/shortcodes.css';
import './asset/css/line-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import { store } from './redux/store';

function App() {
  const pages = useRoutes(AppRoutes);
  return <Provider store={store}>{ pages }</Provider>
}

export default App;
