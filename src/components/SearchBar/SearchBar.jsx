import css from './SearchBar.module.css';
import { HiSearch } from 'react-icons/hi';

export const SearchBar = ({ onChange, value }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className={css.inputWrapper}>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search products..."
      />
      <HiSearch className={css.icon} />
    </div>
  );
};
