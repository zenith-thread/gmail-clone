const InboxIconCreator = ({ InboxIcon, iconSize, classes, onClick }) => {
  return (
    <div
      className={`hover:bg-[#DFDFDF] cursor-pointer transition ease-in-out duration-300 ${
        classes ? classes : ""
      }`}
      onClick={onClick}
    >
      <InboxIcon size={iconSize} />
    </div>
  );
};

export default InboxIconCreator;
