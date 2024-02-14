interface CardProps {
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  loading: Boolean
}

const Card = ({ loading, children }: CardProps) => {

  if (loading) {
    return (
      <li className="bg-black border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case">
      {children}
    </li>
    )
  }

  return (
    <li className="bg-white border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case">
      {children}
    </li>
  );
};

export default Card;
