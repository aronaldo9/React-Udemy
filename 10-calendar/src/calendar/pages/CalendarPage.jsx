import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { Navbar } from "../components/Navbar";

import { localizer, getMessagesES } from "../../helpers";

const toUTC = (date) =>
  new Date(date.getTime() - date.getTimezoneOffset() * 60000);

const events = [
  {
    title: "Cumpleaños del Jefe",
    notes: "Hay que comprrar el pastel",
    start: toUTC(new Date()),
    end: toUTC(addHours(new Date(), 2)),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Aarón",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
