import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 md:flex-row flex-col">
            {/* left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* user cards */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* middle charts */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Count chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* attendance chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* Bottom charts */}
                <div></div>
            </div>
            {/* right */}
            <div className="w-full lg:w-1/3">r</div>
        </div>
    );
};

export default AdminPage;
