const SidebarLinks = ({ SidebarIcon, iconSize, linkName }) => {
  return (
    <div className="flex items-center text-white rounded-full hover:bg-[#636363] gap-4 py-2 px-4 cursor-pointer">
      <SidebarIcon size={iconSize} />
      <span className="font-medium">{linkName}</span>
    </div>
  );
};

export default SidebarLinks;
