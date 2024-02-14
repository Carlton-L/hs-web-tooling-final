import { PropsWithChildren } from "react";

interface ButtonProps {
  callback(): () => void;
  loading: boolean | undefined;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  console.log(props.loading);
  return (
    <button
      data-testid="fetch-button"
      disabled={props.loading}
      className="enabled:bg-black enabled:text-white disabled:bg-gray-400 disabled:text-gray-500 py-2.5 px-5 uppercase font-bold"
      onClick={() => props.callback()}
    >
      {props.children}
    </button>
  );
};

export default Button;
