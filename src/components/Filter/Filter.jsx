import { Input } from '@mui/material';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { searchContacts } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const hendleChangeInput = e => {
    dispatch(searchContacts(e.target.value));
  };
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <label className={css.inputFind}>
      Find contacts by name:
      <Input
        className={css.inputFindField}
        placeholder="search"
        inputProps={ariaLabel}
        type="text"
        name="filter"
        onChange={hendleChangeInput}
      />
    </label>
  );
};

export default Filter;
