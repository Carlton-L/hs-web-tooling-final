/**
 * React loading spinner component which displays a loading animation
 * @returns React element
 */
const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-6 dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
