const Container = ({ children }) => {
  return (
    <div className=" bg-primary rounded-sm flex flex-col p-4 mx-auto w-[90%] max-w-[500px]">
      {children}
    </div>
  );
};

export default Container;
