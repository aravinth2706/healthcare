import anatomy from "../../../assets/images/dashboard/human-anatomy.png";
import styles from "../../../styles/DashboardMainContent/DashboardOverview/Anatomy.module.css";
import { MdFavorite, MdDirectionsRun, MdZoomIn } from "react-icons/md";
function AnatomySection() {
  return (
    <section className={styles.dashboardMain}>
      <div className={styles.anatomyContainer}>
        <div className={styles.anatomy}>
          <img src={anatomy} />
          <div className={styles.heart}>
            <MdFavorite color="red" />
            Healthly Heart
          </div>
          <div className={styles.leg}>
            <MdDirectionsRun color="white" />
            Healthly Leg
          </div>
          <MdZoomIn size={20} className={styles.zoomInIcon} />
        </div>
      </div>
      <div className={styles.healthStatus}></div>
    </section>
  );
}
export default AnatomySection;
