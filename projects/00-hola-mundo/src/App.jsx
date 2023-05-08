import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H',
    isFollowing: false,
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: false,
  },
];

const App = () => {
  return (
    <div className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </div>
  );
};

export default App;
