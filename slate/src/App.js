import './App.css';
import { FooterComponent } from './function-components/footer-component';
import { HeaderComponent } from './function-components/header-component';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
