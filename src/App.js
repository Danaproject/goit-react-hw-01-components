import Profile from './components/Profile';
import Statistics from './components/Statistics';
import user from './user.json';
import statisticalData from './statistical-data.json';


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
      </div>
    </div>
  );
}

export default App;
