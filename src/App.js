import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Layout } from 'antd';
import Header1 from './components/Header/Header1';
import Menuu from './components/Menu/Menu';
import Footer1 from './components/Footer/Footer';


function App() {

  localStorage.setItem('username', 'admin');
  localStorage.setItem('password', '12345');
  return (
    <Layout>
      <Header1 />
      <Menuu />
      <Footer1 />
    </Layout>
  );
}

export default App;