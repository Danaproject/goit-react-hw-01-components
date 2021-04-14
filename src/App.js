import Profile from './components/Profile';
import user from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';



function App() {
  return (
    <div className="App">
      <h1>react-01-components</h1>
      <div className="components">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
