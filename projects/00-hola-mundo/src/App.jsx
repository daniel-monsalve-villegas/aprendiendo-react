import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="daniel.m," name="Daniel Monsalve Villegas" />
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard userName="pheralb" name="Pablo Hernández" />
    </div>
  );
}

export default App;
