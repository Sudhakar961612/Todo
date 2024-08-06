import profile from "../images/profile.png";
import task from "../images/task.png";
import calendar from "../images/calendar.png";
import book from "../images/book.png";
import planned from "../images/planned.png";
import clock from "../images/clock.png";
import add from "../images/add.png";
import group from "../images/Group 2016.png";
import chart from "../images/Ellipse 2319.png";
import first from "../images/Group 2068.png";
import second from "../images/Group 2018.png";
const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center relative mt-10">
      <img src={profile} className="absolute top-0" />
      <div
        style={{ backgroundColor: "#EEF6EF" }}
        className="w-[280px] min-h-[850px] mt-20 flex flex-col items-center  justify-start gap-9"
      >
        <p className="mt-20">Hey, ABCD</p>
        <div className="bg-white rounded-lg border flex flex-col justify-around w-[240px] min-h-[220px] py-5">
          <div className="flex items-center gap-2 justify-start px-4 py-3">
            <img src={task} />
            <p>All Tasks</p>
          </div>
          <div
            className="flex items-center gap-2 justify-start rounded-lg px-4 py-3"
            style={{ backgroundColor: "rgba(53, 121, 55, 0.16)" }}
          >
            <img src={calendar} />
            <p>Today</p>
          </div>
          <div className="flex items-center gap-2 justify-start px-4 py-3">
            <img src={clock} />
            <p>Important</p>
          </div>
          <div className="flex items-center gap-2 justify-start px-4 py-3">
            <img src={book} />
            <p>Planned</p>
          </div>
          <div className="flex items-center gap-2 justify-start px-4 py-3">
            <img src={planned} />
            <p>Assigned to me</p>
          </div>
        </div>
        <div className="bg-white w-[240px] h-[88px] flex items-center justify-center gap-3">
          <img src={add} /> Add list
        </div>
        <div className="bg-white w-[240px] min-h-[320px] px-4 py-4 mb-10">
          <div className="flex items-center justify-between">
            <p>Today Tasks</p>
            <img src={group} />
          </div>
          <div className="flex items-center justify-start">
            <p>11</p>
          </div>
          <br />
          <img src={chart} />
          <div className="flex items-center">
            <img src={first} />
            <img src={second} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
