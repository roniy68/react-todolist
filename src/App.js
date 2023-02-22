import './App.css';
import { Footer, Navbar, TodoApp } from './components';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
