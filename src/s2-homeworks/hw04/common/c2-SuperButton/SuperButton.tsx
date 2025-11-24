import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const red = ` ${s.red}`;
  const def = ` ${s.default}`;
  const sec = ` ${s.secondary}`;
  const dis = disabled ? ` ${s.disabled}` : '';

  const type = xType === 'red' ? red : xType === 'secondary' ? sec : def;

  const finalClassName =
    s.button +
    type +
    dis +
    // + (disabled
    //         ? ...
    //         : xType === 'red'
    //             ? ...
    (className ? ' ' + className : ''); // задачка на смешивание классов

  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
