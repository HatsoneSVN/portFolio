import Welcome from './components/welcome/Welcome';
import Header from './components/headerComp/Header';
import About from './components/aboutMeComp/AboutMeComp';
import Bio from './components/bioComp/BioComp';
import './App.css';

function App() {
  return (
    <div> 
      <Header/>
      <main>
        <Welcome/>
        <About/>
        <Bio/>
       
      </main> 
    </div>    
  );
}

export default App;
