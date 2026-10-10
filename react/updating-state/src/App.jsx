import { useState } from 'react';

import goodsFromServer from './goods.json';
import { GoodsList } from './components/GoodsList';
import './index.scss';
import { SORT_FIELD } from './constants';
import { Header } from './components/Header/Header';

function getPreparedGoods(goods, { sortField, query }) {
  let preparedGoods = [...goods];

  if (query) {
    preparedGoods = preparedGoods.filter(good => good.name.includes(query));
  }

  if (sortField) {
    preparedGoods.sort((good1, good2) => {
      switch (sortField) {
        case SORT_FIELD.ID:
          return good1[sortField] - good2[sortField];

        case SORT_FIELD.NAME:
        case SORT_FIELD.COLOR:
          return good1[sortField].localeCompare(good2[sortField]);

        default: 
          return 0;
      }
    });
  }

  return preparedGoods;
}

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortField, setSortField] = useState('');
  const [query, setQuery] = useState('');

  const visibleGoods = getPreparedGoods(
    goodsFromServer, 
    { sortField, query },
  );

  // Reorder elements
  const moveUp = (good) => {
    // find index of current element
    const index = goods.indexOf(good);

    if (index < 1) {
      return;
    }

    setGoods([
      // all before previous item
      ...goods.slice(0, index - 1),

      // change place of current and previus elements
      goods[index], // current
      goods[index - 1], // previous
      
      // all after current
      ...goods.slice(index + 1),
    ]);
  };

   const moveDown = (good) => {
    // Update state with callback:
    // Parameter `goods` is the last calculated value, but not the initial
    setGoods((currentGoods) => {
      console.log(currentGoods.map(g => g.name))

      // find index of current element
      const index = currentGoods.indexOf(good);

      if (index === currentGoods.length - 1) {
        return;
      }

      return [
        // all before previous item
        ...currentGoods.slice(0, index),

        // change place of current and previus elements
        currentGoods[index + 1], // next
        currentGoods[index], // current
        
        // all after next
        ...currentGoods.slice(index + 2),
      ]
    });
    // When react executes several updates with the same value, the result of each previous callback will be passed to the next same callback which is called on. similar to method `reduce`. So we call this function 3 times in `GoodsList` button `down 3`.
  };

  return (
    <div className="App">
      {false && (
        <Header
          sortField={sortField}
          sortBy={(field) => {
            setSortField(field);
          }}
          query={query}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
        />
      )}

      <GoodsList 
        goods={goods} 
        moveUp={moveUp}
        moveDown={moveDown}
      />
    </div>
  );
};

export default App;
