import teeth from "../assets/images/dashboard/teeth.png";
import { MdBackHand } from "react-icons/md";
import styles from "../styles/DashboardMainContent/simpleAppointmentCard.module.css";

function SimpleAppointmentCard() {
  return (
    <section className={styles.scheduleContainer}>
      <section className={styles.dentist}>
        <div className={styles.scheduleHeader}>
          <p className={styles.title}>Dentist</p>
          <img src={teeth} alt="Dentist" width={20} />
        </div>
        <p className={styles.pTag}>09:00 - 11.00</p>
        <p className={styles.pTag}>Dr.Cameron Williamson</p>
      </section>
      <section className={styles.physiotherapy}>
        <div className={styles.scheduleHeader}>
          <p className={styles.title}>Physiotherapy Appoinment</p>
          <MdBackHand />
        </div>
        <p className={styles.pTag}>11:00 - 12:00</p>
        <p className={styles.pTag}>Dr.Kevin Djones</p>
      </section>
    </section>
  );
}
export default SimpleAppointmentCard;
