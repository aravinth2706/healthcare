import {
  MdDashboard,
  MdHistory,
  MdCalendarToday,
  MdEventNote,
  MdBarChart,
  MdChat,
  MdSupportAgent,
  MdSettings,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { useState, useEffect } from "react";
import styles from "../styles/sidebar.module.css";
import useDeviceType from "../hooks/useDeviceType";

const navLinks = [
  {
    label: "General",
    links: [
      { name: "Dashboard", icon: <MdDashboard /> },
      { name: "History", icon: <MdHistory /> },
      { name: "Calendar", icon: <MdCalendarToday /> },
      { name: "Appointments", icon: <MdEventNote /> },
      { name: "Statistics", icon: <MdBarChart /> },
    ],
  },
  {
    label: "Tools",
    links: [
      { name: "Chat", icon: <MdChat /> },
      { name: "Support", icon: <MdSupportAgent /> },
    ],
  },
  {
    label: "",
    links: [{ name: "Settings", icon: <MdSettings /> }],
  },
];

function Sidebar() {
  const { isMobile } = useDeviceType();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && !isSidebarOpen && (
        <div className={styles.toolbar}>
          <MdMenu
            size={24}
            onClick={toggleSidebar}
            className={styles.menuIcon}
          />
          <div className={styles.title}>
            Health<span>care.</span>
          </div>
        </div>
      )}

      {/* BACKDROP */}
      {isMobile && isSidebarOpen && (
        <div className={styles.backdrop} onClick={toggleSidebar}></div>
      )}

      {((isMobile && isSidebarOpen) || !isMobile) && (
        <nav className={`${isMobile ? styles.isMobile : ""} ${styles.sidebar}`}>
          <div className={styles.title}>
            Health<span>care.</span>
          </div>
          {isMobile && (
            <MdClose className={styles.closeBtn} onClick={toggleSidebar} />
          )}
          {navLinks.map(({ label, links }, index) => (
            <div key={index} className={styles.navSection}>
              {label && <p className={styles.label}>{label}</p>}
              <ul>
                {links.map(({ name, icon }) => (
                  <li
                    key={name}
                    className={`${styles.navItem}${
                      name === "Dashboard" ? " " + styles.active : ""
                    }`}
                  >
                    {icon}
                    <span className="name">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </>
  );
}

export default Sidebar;
