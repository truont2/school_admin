"use client";

import { eventsData } from "@/lib/data";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month view
import interactionPlugin from "@fullcalendar/interaction"; // For dateClick, etc.
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; // Week and day view

export default function BigCalendar() {
    // const calendarRef = useRef(null);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth" // Default view
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "timeGridDay,timeGridWeek,dayGridMonth",
            }}
            height={"98%"} // Adjust height automatically
            editable={true} // Allows drag and drop
            selectable={true} // Allows selection
            slotMinTime="08:00:00" // Start time at 8:00 AM
            slotMaxTime="17:00:00" // End time at 5:00 PM
            events={eventsData}
            expandRows={true} // Expand rows to fill the height
            nowIndicator={true} // Show current time
        />
    );
}
