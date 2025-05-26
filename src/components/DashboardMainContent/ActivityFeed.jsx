import styles from "../../styles/DashboardMainContent/ActivityFeed.module.css";

const dayLists = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
const barCount = 15;

function ActivityFeed() {
  return (
    <section className={styles.activityContainer}>
      <div className={styles.activityHeader}>
        <p>Activity</p>
        <p>3 appoinment on this week</p>
      </div>
      <div className={styles.equalizer}>
        {Array.from({ length: barCount }).map((_, index) => (
          <div key={index} className={styles.bar}></div>
        ))}
      </div>
      <div className={styles.dayLists}>
        {dayLists.map((day, index) => (
          <p key={index}>{day}</p>
        ))}
      </div>
    </section>
  );
}
export default ActivityFeed;
