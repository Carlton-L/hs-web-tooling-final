import { PropsWithChildren } from "react";

interface ButtonProps {
  callback: Function;
  loading: Boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className="bg-black text-white py-2.5 px-5 uppercase font-bold"
      onClick={() => props.callback()}
    >
      {props.children}
    </button>
  );
};

export default Button;
