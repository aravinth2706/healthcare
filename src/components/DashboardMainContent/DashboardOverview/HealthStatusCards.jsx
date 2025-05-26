import styles from "../../../styles/DashboardMainContent/DashboardOverview/HealthStatusCards.module.css";
import lungs from "../../../assets/images/dashboard/lungs.png";
import teeth from "../../../assets/images/dashboard/teeth.png";
import bone from "../../../assets/images/dashboard/bone.png";
import { MdArrowForward } from "react-icons/md";

function HealthStatusCards() {
  return (
    <section className={styles.healthStatusContainer}>
      <div className={styles.healthStatus}>
        <div>
          <img src={lungs} alt="Lungs" />
          <p>Lungs</p>
        </div>
        <p className={styles.date}>Date 26 Oct 2021</p>
        <div className={styles.progressContainer}>
          <div style={{ backgroundColor: "#b34e50" }} />
        </div>
      </div>
      <div className={styles.healthStatus}>
        <div>
          <img src={teeth} alt="Teeth" />
          <p>Teeth</p>
        </div>
        <p className={styles.date}>Date 26 Oct 2021</p>
        <div className={styles.progressContainer}>
          <div style={{ backgroundColor: "#7FD3C4" }} />
        </div>
      </div>
      <div className={styles.healthStatus}>
        <div>
          <img src={bone} alt="Bone" />
          <p>Bone</p>
        </div>
        <p className={styles.date}>Date 26 Oct 2021</p>
        <div className={styles.progressContainer}>
          <div style={{ backgroundColor: "#F87155" }} />
        </div>
      </div>
      <div className={styles.details}>
        <p>Details</p>
        <MdArrowForward />
      </div>
    </section>
  );
}
export default HealthStatusCards;
