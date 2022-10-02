import './App.css';
import Sidebar from './components/sidebar.component';
import { SAMPLE_COINS } from './utils/test-utils';
import MainView from './components/main.component';

const App = () => {

  return (
    <div>
      <Sidebar />

      <main className='lg:absolute lg:w-3/4 right-0 p-8'>
        <MainView />
      </main>
    </div>
  )
}


export default App;
