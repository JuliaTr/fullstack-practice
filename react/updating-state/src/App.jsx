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
    const index = goods.indexOf(good);

    if (index < 1) {
      return;
    }

    setGoods([
      // all before previous item
      ...goods.slice(0, index - 1),

      goods[index], // current
      goods[index - 1], // previous
      
      // all after current
      ...goods.slice(index + 1),
    ]);
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

      <GoodsList goods={goods} moveUp={moveUp} />
    </div>
  );
};

export default App;



// {[SORT_FIELD_ID, SORT_FIELD_NAME, SORT_FIELD_COLOR].map(field => (
//   <button
//     key={field}
//     onClick={() => setSortField(field)} 
//     className={classNames({ active: sortField === field })}
//   >
//     {field}
//   </button>
// ))}