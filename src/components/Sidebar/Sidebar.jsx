import { AskJunctionPanel } from "./components/AskJunctionPanel";
import { SidepanelHeader } from "./components/SidepanelHeader";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="asideWrapper">
        <SidepanelHeader />
        <AskJunctionPanel />
      </div>
    </aside>
  );
}

export default Sidebar;
