import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../redux/localeSlice';
import { getLang } from '../redux/selector';

export const LangSwitcher = () => {
  // useDispatch - update the state by dispatching actions
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  const handleChange = e => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div>
      <select value={lang} onChange={handleChange}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
};
