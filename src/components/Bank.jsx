import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlice';
import { getBalance } from '../redux/selector';

export const Bank = () => {
  const dispatch = useDispatch();
  const balance = useSelector(getBalance);

  const handleClickDeposit = () => {
    dispatch(deposit(10));
  };

  const handleClickWithdraw = () => {
    dispatch(withdraw(5));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <button onClick={handleClickDeposit}>Deposit 10 credits</button>
      <button onClick={handleClickWithdraw}>Withdraw 5 credits</button>
    </div>
  );
};
