import styles from "../../styles/DashboardMainContent/UpcomingSchedule.module.css";

const schedule = [
  {
    day: "On Thursday",
    list: [
      { treatment: "Health Checkup Completed", icon: "", time: "11.00 AM" },
      { treatment: "Health Checkup Completed", icon: "", time: "11.00 AM" },
    ],
  },
  {
    day: "On Saturday",
    list: [
      { treatment: "Health Checkup Completed", icon: "", time: "11.00 AM" },
      { treatment: "Health Checkup Completed", icon: "", time: "11.00 AM" },
    ],
  },
];

function UpcomingSchedule() {
  return (
    <>
      <p className={styles.title}>The Upcoming Schedule</p>
      {schedule.map(({ day, list }, index) => (
        <section key={index} className={styles.scheduleSection}>
          <p className={styles.day}>{day}</p>
          <section>
            {list.map(({ treatment, icon, time }, i) => (
              <div key={i}>
                <div>
                  <p className={styles.headline}>{treatment}</p>
                  <p className={styles.time}>{time}</p>
                </div>
                <p>{icon}</p>
              </div>
            ))}
          </section>
        </section>
      ))}
    </>
  );
}
export default UpcomingSchedule;
