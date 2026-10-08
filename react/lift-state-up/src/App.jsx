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
  const [sortField, setSortField] = useState('');
  const visibleGoods = getPreparedGoods(goodsFromServer, { sortField });

  return (
    <div className="App">
      <Header
        // Lifting state up:
        sortField={sortField}
        sortBy={(field) => {
          console.log(field); // place for additional checks
          setSortField(field);
        }}
        // sortBy={setSortField} // same as sortBy={(field) => setSortField(field)}
      />

      <GoodsList goods={visibleGoods} />
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