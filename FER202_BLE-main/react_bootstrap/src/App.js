import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/header';
import Menu from './components/menu';
import Bagde from './components/bagde';
import Content from './components/content';
import Footer from './components/footer';



function App() {
  return (

    <div>
      <Header/>
      <Menu/>
      <Bagde/>
      <Content/>
      <Footer/>
    </div>

  );
}

export default App;
