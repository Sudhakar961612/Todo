import down from "../images/caret-down.png";
import notification from "../images/clarity_notification-line.png";
import calendar from "../images/iconoir_calendar.png";
import refresh from "../images/Vectorrr.png";
import star from "../images/ph_star.png";
import tick from "../images/check_small.png";
import add from "../images/add.png";
import Delete from "../images/delete.png";
import cross from "../images/material-symbols_close.png";
import { useState } from "react";
const Mainbar = () => {
  const [tasks, setTasks] = useState<any[]>([{ title: "cool" }]);
  const [complete, setComplete] = useState<any[]>([{ title: "Do Cardio" }]);
  const [visi, setVisi] = useState(false);
  const [text, setText] = useState("");
  const [sele, setSele] = useState("");
  return (
    <div className="flex-1 flex flex-col gap-10 relative">
      <div className="flex items-center gap-2 mt-5">
        <p style={{ color: "rgba(20, 46, 21, 0.62)" }}>To Do</p>
        <img src={down} />
      </div>
      <div
        className="h-[178px] flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(53, 121, 55, 0.1) 0%, rgba(208, 255, 210, 0.1) 100%)",
        }}
      >
        <input
          placeholder="Enter Task"
          className="bg-transparent ml-10 mt-10 h-[50px] pl-5"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div className="flex items-center flex-1 justify-end">
          <div className="flex-1 flex items-center gap-4 pl-10">
            <img src={notification} />
            <img src={refresh} />
            <img src={calendar} />
          </div>
          <button
            className="py-2 px-4"
            style={{
              background: "rgba(53, 121, 55, 0.16)",
              color: "rgba(53, 121, 55)",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (text.length) {
                setTasks((prev) => [...prev, { title: text }]);
                setText("");
              }
            }}
          >
            ADD TASK
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {tasks.map((ele, index) => {
          return (
            <div className="flex flex-col gap-4 cursor-pointer">
              <div key={index} className=" w-full flex items-center ">
                <div className="flex-1 flex items-center justify-start gap-3">
                  <div
                    className="h-[24px] w-[24px]"
                    style={{ border: "2px solid rgba(30, 30, 30, 1)" }}
                    onClick={() => {
                      const arr = tasks;
                      const narr = arr.filter(
                        (elee) => elee.title != ele.title
                      );
                      setTasks(narr);
                      setComplete((prev) => {
                        return [...prev, ele];
                      });
                    }}
                  ></div>
                  <p
                    style={{ color: "rgba(27, 40, 27, 1)" }}
                    onClick={() => {
                      setVisi(true);
                      setSele(ele.title);
                    }}
                  >
                    {ele.title}
                  </p>
                </div>
                <img src={star} />
              </div>
              <hr />
            </div>
          );
        })}
        <p className="text-start">Completed</p>
        <hr />
        {complete.map((ele, index) => {
          return (
            <div className="flex flex-col gap-4">
              <div key={index} className=" w-full flex items-center">
                <div className="flex-1 flex items-center justify-start gap-3">
                  <div
                    className="h-[24px] w-[24px]"
                    style={{ background: "rgba(63, 145, 66, 1)" }}
                  >
                    <img src={tick} />
                  </div>
                  <p
                    style={{ color: "rgba(27, 40, 27, 1)" }}
                    className="cursor-pointer"
                    onClick={() => {
                      setVisi(true);
                      setSele(ele.title);
                    }}
                  >
                    {ele.title}
                  </p>
                </div>
                <img src={star} />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      {visi && (
        <div
          className="absolute top-10 right-0 min-h-[730px] w-[450px]"
          style={{ background: "rgba(238, 246, 239, 1)" }}
        >
          <div className="min-h-[530px] flex flex-col gap-3 mt-20 ml-10">
            <hr />
            <div className="flex items-center h-[40px] px-10">
              <div className="flex items-center flex-1 gap-5">
                <div
                  className="h-[24px] w-[24px] "
                  style={{ border: "2px solid rgba(30, 30, 30, 1)" }}
                ></div>
                <p>{sele}</p>
              </div>
              <img src={star} />
            </div>
            <hr />
            <div className="flex items-center h-[40px] px-10">
              <div className="flex items-center flex-1 gap-5">
                <img src={add} />
                <p>Add Step</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center h-[40px] px-10">
              <div className="flex items-center flex-1 gap-5">
                <img src={notification} />
                <p>Set Reminder</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center h-[40px] px-10">
              <div className="flex items-center flex-1 gap-5">
                <img src={calendar} />
                <p>Add Due Date</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center h-[40px] px-10">
              <div className="flex items-center flex-1 gap-5">
                <img src={refresh} />
                <p>Repeat</p>
              </div>
            </div>
            <hr />
            <input
              placeholder="Add Note"
              className="pl-10 h-[40px] bg-transparent"
            />
          </div>
          <div className="flex-col gap-3">
            <hr />
            <div className="flex  items-center justify-around mt-4">
              <img
                src={cross}
                className="cursor-pointer"
                onClick={() => {
                  setVisi(false);
                  setSele("");
                }}
              />
              <p
                style={{ color: "rgba(27, 40, 27, 0.59)" }}
                className="font-mono text-sm"
              >
                Create Today
              </p>
              <img
                src={Delete}
                onClick={() => {
                  const arr = tasks;
                  const narr = arr.filter((ele) => ele.title != sele);
                  setTasks(narr);
                  const arrr = complete;
                  const narrr = arrr.filter((elee) => elee.title != sele);
                  setComplete(narrr);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainbar;
