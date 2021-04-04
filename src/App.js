import './App.css';
import Intervalo from './components/Intervalo'
import Media from './components/Media'
import Sorteio from './components/Sorteio'
import Soma from './components/Soma'

function App() {
    return (
        <div className="App">

          <h1>Exercícios React e Redux</h1>

          <div className="linha">
            <Intervalo> background </Intervalo>
          </div>

          <div className="linha">
            <Media/>
            <Soma/>
            <Sorteio/>
          </div>

        </div>
    );
}

export default App;