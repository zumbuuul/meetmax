const ButtonWithIcon = ({ children }) => {
  return (
    <div className="w-full bg-lightgrey text-darkgrey flex justify-around px-5 py-3 rounded-lg">
      {children}
    </div>
  );
};

export default ButtonWithIcon;
