import { useSelector } from 'react-redux';
import { LangSwitcher } from './LangSwitcher';
import { Bank } from './Bank';
import { getLang } from '../redux/selector';

export const App = () => {
  const lang = useSelector(getLang);

  // const balance = useSelector(state => state.balance.value);

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: {lang}</p>
      <hr />
      <hr />
      <hr />

      {/* <Bank /> */}
      {/* <p>Current bal: {balance}</p> */}
    </div>
  );
};
