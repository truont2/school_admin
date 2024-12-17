"use client";

import dayGridPlugin from "@fullcalendar/daygrid"; // Month view
import interactionPlugin from "@fullcalendar/interaction"; // For dateClick, etc.
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; // Week and day view

export default function BigCalendar() {
    // const calendarRef = useRef(null);
    return (
        <FullCalendar
            // ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth" // Default view
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay", // View buttons
            }}
            editable={true} // Allows drag and drop
            selectable={true} // Allows selection
            events={[
                { title: "Event 1", start: "2024-12-17" },
                { title: "Event 2", start: "2024-12-18", end: "2025-06-14" },
            ]}
        />
    );
}
