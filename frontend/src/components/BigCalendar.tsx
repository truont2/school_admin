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
                left: "",
                center: "title",
                right: "timeGridDay,timeGridWeek,dayGridMonth", // View buttons
            }}
            height={"98%"}
            editable={true} // Allows drag and drop
            selectable={true} // Allows selection
            slotMinTime="08:00:00" // Start time at 8:00 AM
            slotMaxTime="17:00:00" // End time at 5:00 PM
            events={[
                { title: "Event 1", start: "2024-12-17" },
                { title: "Event 2", start: "2024-12-18", end: "2025-06-14" },
            ]}
            expandRows={true}
        />
    );
}
