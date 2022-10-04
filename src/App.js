import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';


function App() {
  localStorage.setItem('username', 'admin');
  localStorage.setItem('password', '12345');
  return (
      <div>
        <Header />
        <Menu />
      </div>
  );
}

export default App;
