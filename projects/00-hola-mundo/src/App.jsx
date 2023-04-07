import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  return (
    <div className="App">
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
      <TwitterFollowCard userName="pheralb" name="Pablo Heraldo" />
    </div>
  );
}

export default App;
