import { useSpring, animated } from '@react-spring/web'

interface CardProps {
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  loading: Boolean
}

const Card = ({ loading, children }: CardProps) => {

  const [fadeProps, fadeApi] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  const [colorProps, colorApi] = useSpring(
    () => ({
      from: { backgroundColor: "black" },
      to: { backgroundColor: "white" },
    }),
    []
  )

  if (loading) {
    return (
      <animated.li style={fadeProps} className="bg-black border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case">
      {children}
    </animated.li>
    )
  }

  return (
    <animated.li style={colorProps} className="bg-white border-4 border-black border-solid min-w-2xl text-black px-8 py-2.5 m-2 flex justify-center normal-case">
      {children}
    </animated.li>
  );
};

export default Card;
