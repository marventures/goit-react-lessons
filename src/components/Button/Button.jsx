import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.buttonWrap}>
      <button className={css.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};
