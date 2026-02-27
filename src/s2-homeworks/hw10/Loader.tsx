import s from './Loader.module.css';
import loader from './loader.svg';

export const Loader = () => (
  <img className={s.loader} src={loader} alt='loading' />
);
