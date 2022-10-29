import "./sidebar.css";
import { LineStyle, PermIdentity } from "@material-ui/icons";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/promotion" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Promotion
              </li>
            </Link>
            <Link to="/delivery" className="link">
              <li className="sidebarListItem">
                <LocalShippingIcon className="sidebarIcon" />
                Delivery
              </li>
            </Link>
            <Link to="/inventoryList" className="link">
              <li className="sidebarListItem">
                <LocalShippingIcon className="sidebarIcon" />
                Inventory
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
