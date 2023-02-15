import IconButton from "../../Atoms/IconButton/IconButton";
import Typography, { H3 } from "../../Atoms/Typography/Typography";
import Sidebar from "../../Compounds/SidebarMenu/Sidebar";


export default function ActiveBoard({ ...rest }) {
  return (
    <div className="flex h-full bg-surface-alt-light dark:bg-surface-alt-dark">
      <Sidebar />
      <div className="flex w-80 bg-surface-base-light dark:bg-surface-base-dark" id="drawed">
        <div className="flex justify-between px-6 py-4 h-14 w-80 items-center" id="header">
          <H3 type="h3">Eng Sprint 12</H3>
          <IconButton iconName="EllipsisHorizontalIcon" size="5" color="primary" />
        </div>
        <div className=""></div>
        <div className="flex flex-1"></div>
      </div>
    </div>
  );
}
