import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="p-4 flex gap-4 xl:flex-row flex-col">
            {/* left */}
            <div className="w-full xl:w-2/3 flex flex-col gap-8">
                <div className="h-full bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Schedule (4a)</h1>
                    <BigCalendar />
                </div>
                {/* for calendar use fullcalendar and implement yourself later  */}
            </div>
            {/* right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
                <div></div>
            </div>
        </div>
    );
};

export default StudentPage;
