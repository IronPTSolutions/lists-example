import './App.css';
import Album from './components/Album';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="text-center">
        <section className="container my-5">
          <h1 className="fw-light">IronCracks</h1>
          
          <p className="lead text-muted">An album with the ironhackers profile</p>
        </section>

        <Album />
      </main>
    </div>
  );
}

export default App;
