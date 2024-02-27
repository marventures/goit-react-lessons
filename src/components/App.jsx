import { useSelector } from 'react-redux';
import { LangSwitcher } from './LangSwitcher';
import { Bank } from './Bank';

export const App = () => {
  // const lang = useSelector(state => state.locale.lang);
  // const balance = useSelector(state => state.balance.value);

  return (
    <div>
      <LangSwitcher />
      {/* <p>Current lang: {lang}</p> */}
      <hr />
      <hr />
      <hr />

      <Bank />
      {/* <p>Current bal: {balance}</p> */}
    </div>
  );
};
