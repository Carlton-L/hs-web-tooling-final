import { useSpring, animated } from "@react-spring/web";

interface CardProps {
  children:
    | string
    | number
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  loading: boolean;
}

/**
 * React component which renders a card containing text content or a React element.
 * @param {boolean} props.loading Boolean representing the loading state
 * @returns React component
 */
const Card = ({ loading, children }: CardProps) => {
  const [fadeProps] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    [],
  );

  const [colorProps] = useSpring(
    () => ({
      from: { backgroundColor: "black" },
      to: { backgroundColor: "white" },
    }),
    [],
  );

  if (loading) {
    return (
      <animated.li
        data-testid="loading-card"
        style={fadeProps}
        className="bg-black border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case"
      >
        {children}
      </animated.li>
    );
  }

  return (
    <animated.li
      data-testid="insult-card"
      style={colorProps}
      className="bg-white border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case"
    >
      {children}
    </animated.li>
  );
};

export default Card;
