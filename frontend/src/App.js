import logo from './logo.svg';
import './App.css';
import InputBox from './component/InputBox';
import Studentdata from './component/Studentdata';

function App() {
  return (
      <div className='main-box'>
          <div className='input-box-main'><InputBox/></div>
          <div className='data-box'><Studentdata/></div>
      </div>
  );
}

export default App;
