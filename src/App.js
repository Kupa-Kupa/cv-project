import './styles/App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Personal from './components/Personal';
import Input from './components/Input';

function App() {
  return (
    <div>
      <section>
        <Input />
      </section>
      <section>
        <Personal />
        <Experience />
        <Education />
      </section>
    </div>
  );
}

export default App;
