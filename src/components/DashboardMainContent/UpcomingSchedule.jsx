import styles from "../../styles/DashboardMainContent/UpcomingSchedule.module.css";
import { MdFavorite, MdVisibility, MdMedicalServices } from "react-icons/md";
import { FaSyringe } from "react-icons/fa";

const schedule = [
  {
    day: "On Thursday",
    list: [
      {
        treatment: "Health Checkup Completed",
        icon: <FaSyringe size={20} />,
        time: "11.00 AM",
      },
      {
        treatment: "Ophthalmologist",
        icon: <MdVisibility size={20} />,
        time: "14.00 PM",
      },
    ],
  },
  {
    day: "On Saturday",
    list: [
      {
        treatment: "Cardiologist",
        icon: <MdFavorite size={20} color="red" />,
        time: "12.00 AM",
      },
      {
        treatment: "Neurologist",
        icon: <MdMedicalServices size={20} />,
        time: "16.00 PM",
      },
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
