import { GoodsList } from './components/GoodsList';
import goods from './goods.json';
import './index.scss';

export const App = () => (
  <div className="App">
    <h1>Goods List</h1>

    <GoodsList goods={goods} />
  </div>
);

export default App;
