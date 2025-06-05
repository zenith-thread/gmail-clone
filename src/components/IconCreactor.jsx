const IconCreactor = ({ IconComponent, sizeOfIcon }) => {
  return (
    <div className="p-3 text-[#EAEAEA] hover:bg-[#545455] rounded-full cursor-pointer transition ease-in-out duration-300">
      <IconComponent size={sizeOfIcon} />
    </div>
  );
};

export default IconCreactor;
