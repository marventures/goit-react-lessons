import css from './Button.module.css';

export const Button = ({ text }) => {
  return (
    <button className={css.button} type="button">
      {text}
    </button>
  );
};
