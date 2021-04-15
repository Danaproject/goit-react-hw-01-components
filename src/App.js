import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/Friendlist/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
import Container from './components/Container/Container'
import styles from './styles.module.css';

function App() {
  return (
    <Container>
        <h1>react-01-components</h1>
        <div className={styles.components}>
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
      </Container>
  );
}

export default App;
