import styles from "../../styles/DashboardMainContent/CalendarView.module.css";
import { MdAdd, MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import UpcomingSchedule from "./UpcomingSchedule";
import useDeviceType from "../../hooks/useDeviceType";
import SimpleAppointmentCard from "../SimpleAppointmentCard";

const calendarList = [
  { day: "Mon", date: "25", time: ["10.00", "11.00", "12.00"] },
  { day: "Tues", date: "26", time: ["08.00", "09.00", "10.00"] },
  { day: "Wed", date: "27", time: ["12.00", "--", "13.00"] },
  { day: "Thu", date: "28", time: ["10.00", "11.00", "--"] },
  { day: "Fri", date: "29", time: ["--", "14.00", "16.00"] },
  { day: "Sat", date: "30", time: ["12.00", "14.00", "15.00"] },
  { day: "Sun", date: "31", time: ["09.00", "10.00", "11.00"] },
];
function CalendarView() {
  const { isMobile } = useDeviceType();
  return (
    <section className={styles.calendarViewContainer}>
      {!isMobile && (
        <section className={styles.calendarViewHeader}>
          <div>
            <FaUserAstronaut />
          </div>
          <div>
            <MdAdd />
          </div>
        </section>
      )}
      <section className={styles.calendarHeader}>
        <p>October 2021</p>
        <div>
          <MdArrowBack />
          <MdArrowForward />
        </div>
      </section>
      <section className={styles.calendar}>
        {calendarList.map(({ day, date, time }, index) => (
          <div key={index}>
            <p>{day}</p>
            <p className={styles.date}>{date}</p>
            <div className={styles.time}>
              {time.map((data, i) => (
                <p key={i}>{data}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
      <SimpleAppointmentCard />
      <UpcomingSchedule />
    </section>
  );
}
export default CalendarView;
