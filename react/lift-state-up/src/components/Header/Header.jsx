import classNames from 'classnames';

import { SORT_FIELD } from "../../constants";

export const Header = ({ sortField, setSortField }) => (
  <header className='header'>
    <button onClick={() => setSortField('')}>Reset</button>

    <div className='header__sort'>
      Sort by:
      <button 
        onClick={() => setSortField(SORT_FIELD.ID)} 
        className={classNames({ active: sortField === SORT_FIELD.ID })}
      >
        id
      </button>

      <button 
        onClick={() => setSortField(SORT_FIELD.NAME)} 
        className={classNames({ active: sortField === SORT_FIELD.NAME })}
      >
        name
      </button>

      <button 
        onClick={() => setSortField(SORT_FIELD.COLOR)} 
        className={classNames({ active: sortField === SORT_FIELD.COLOR })}
      >
        color
      </button>
    </div>
  </header>
);
