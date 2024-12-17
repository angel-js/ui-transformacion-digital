import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./styles.css"; // Importa los estilos

const TurnosCalendar = () => {
  const [turnos] = useState([
    {
      title: "Guardia Juan - Sucursal 1",
      start: "2024-09-01T08:00:00",
      end: "2024-09-01T16:00:00",
    },
    {
      title: "Guardia María - Sucursal 2",
      start: "2024-09-02T14:00:00",
      end: "2024-09-02T22:00:00",
    },
    {
      title: "Guardia Pedro - Sucursal 3",
      start: "2024-09-03T06:00:00",
      end: "2024-09-03T14:00:00",
    },
  ]);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={turnos}
        editable={true}
        droppable={true}
        eventClick={(info) => alert(`Turno: ${info.event.title}`)}
      />
    </div>
  );
};

export default TurnosCalendar;
