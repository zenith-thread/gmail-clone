const InboxIconCreator = ({ InboxIcon, iconSize, classes }) => {
  return (
    <div
      className={`hover:bg-[#DFDFDF] cursor-pointer transition ease-in-out duration-300 ${
        classes ? classes : ""
      }`}
    >
      <InboxIcon size={iconSize} />
    </div>
  );
};

export default InboxIconCreator;
