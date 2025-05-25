import styles from "../styles/DashboardMainContent/Dashboard.module.css";
import { MdNotifications, MdSearch, MdKeyboardArrowDown } from "react-icons/md";
import CalenderView from "../components/DashboardMainContent/CalendarView";

function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <section>
        <div className={styles.dashboardTop}>
          <div className={styles.searchBar}>
            <MdSearch size={20} className={styles.searchIcon} />
            <input type="search" placeholder="Search" />
          </div>
          <MdNotifications size={24} className={styles.notificationIcon} />
        </div>
        <div className={styles.title}>
          <p>Dashboard</p>
          <div className={styles.detailSection}>
            <span>Details</span>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </section>
      <section>
        <CalenderView />
      </section>
    </section>
  );
}
export default Dashboard;
