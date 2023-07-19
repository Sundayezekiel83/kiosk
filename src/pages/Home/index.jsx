import React, { useState, useEffect } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { PiHandWaving } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FiEye, FiShield, FiShieldOff } from "react-icons/fi";
import AppLayout from "../../layout/AppLayout";
import AreaCharts from "../../components/Chart/AreaCharts";
import hamza from "../../assets/images/hamza.jpeg";
import CustomSelect from "../../components/CustomInput/Select";
import AppLayoutNew from "../../layout/AppLayoutNew";
import {
  BsArrowDownLeft,
  BsArrowUpRight,
  BsFillShieldLockFill,
} from "react-icons/bs";
import CustomButton from "../../components/Buttons/CustomButton";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Home() {
  const percentage = 66;

  const todaySummary = [
    {
      title: "Total Partners",
      value: "10",
      notCurrency: true,
    },
    {
      title: "Total Users",
      value: "19",
      notCurrency: true,
    },
    {
      title: "Total Products",
      value: "30",
      notCurrency: true,
    },
    {
      title: "Total Logistics",
      value: "22,000",
      notCurrency: true,
    },
    {
      title: "Total Supply Goods",
      value: "22,000",
      notCurrency: true,
    },
    {
      title: "Supply Request",
      value: "22,000",
      notCurrency: true,
    },
    {
      title: "Pending Payment",
      value: "22,000",
    },
  ];

  const records = [
    {
      image: hamza,
      name: "Ridiculous Guy",
      email: "ridiculousguy@gmail.com",
      score: "100,000",
      joinDate: "02/23/2023",
      activated: false,
      numberOfReqs: 23,
      indebted: "89,000",
    },
    {
      image: hamza,
      name: "Isah Hamza",
      email: "itshamzy@gmail.com",
      score: "30,000",
      joinDate: "02/23/2023",
      activated: true,
      numberOfReqs: 19,
      indebted: "23,000",
    },
    {
      image: hamza,
      name: "Obajemu Samuel",
      email: "objsamuel@gmail.com",
      score: "150,000",
      joinDate: "12/30/2020",
      activated: true,
      numberOfReqs: 32,
      indebted: "90,000",
    },
    {
      image: hamza,
      name: "Hyper-realistic User",
      email: "unrealuser@gmail.com",
      score: "90,000",
      joinDate: "08/02/2021",
      activated: false,
      numberOfReqs: 11,
      indebted: "54,000",
    },
  ];

  const analysis = [
    {
      title: "Total Volume",
      desc: "total transaction Paid",
      amount: "40000",
    },
    {
      title: "Total Collection",
      desc: "total money Collected",
      amount: "50000",
    },
    {
      title: "Total Savings",
      desc: "saving on system",
      amount: "54000",
    },
    {
      title: "Total Point Gathered",
      desc: "point",
      amount: "4",
      point: "90",
    },

    {
      title: "Repayment",
      desc: "",
      amount: "80000",
    },

    {
      title: "Subcription",
      desc: "payment to finish",
      amount: "100000",
    },

    {
      title: "Goods worth",
      desc: "",
      amount: "100000",
    },

    {
      title: "total Handsby",
      desc: "",
      amount: "100000",
    },
  ];

  const filter = [
    { label: "Filter by Period", value: null },
    { label: "All Time", value: 0 },
    { label: "Today", value: 1 },
    { label: "This Week", value: 2 },
    { label: "This Month", value: 3 },
    { label: "This Year", value: 4 },
  ];

  return (
    <AppLayoutNew>
      {/* main */}
      <div className="pb-10">
        <div className="rounded text px-7 pt-0">
          <p className="text-2xl font-semibold mb-4">Overview</p>
          <div className="grid grid-cols-4 gap-5">
            {analysis.map((item, idx) => (
              <>
                <div
                  key={idx}
                  style={{ backgroundColor: "rgba(255,255,255,.9)" }}
                  className="flex flex-col justify-between rounded min-h-[180px] p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{item.title} </p>
                    <button>
                      <MdArrowRightAlt
                        color="rgb(97, 51, 51)"
                        className={item.rise ? "" : ""}
                        size={25}
                      />
                    </button>
                  </div>
                  <div className=" mt-auto">
                    <p className="text-xs">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      {item.point ? (
                        item.point
                      ) : (
                        <p className="font-medium opacity-70 text-2xl">
                          {!item.notCurrency ? "₦" : ""}
                          {item.amount}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="px-6">
          <div className=" grounded min-h-[200px] w-full  bg-dimmed_white shadow-md p-5 !pb-7 mt-5 ">
            <p className="text-lg font-medium mb-5"> Product</p>

            <div className="grid grid-cols-4 gap-3 items-center">
              {todaySummary.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-full flex flex-col">
                    <p className="font-medium opacity-70 mb-1.5">
                      {item.title}
                    </p>
                    <p className="font-semibold text-xl">
                      {!item.notCurrency ? "₦" : ""}
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid-cols-2 py-4 grid mt-10 ">
              <div className="bg-white shadow-md px-10 mx-10 min-h-[180px] w-[70%] p-5">
                <p className="font-medium">Top Perfoming </p>

                <p className="text-xs mt-20">Customer 1 </p>
              </div>

              <div className="bg-white shadow-md px-10 mx-10 min-h-[180px] w-[70%]">
                <p className="font-medium">List of 5 Transactions</p>

                <p className="text-xs mt-20">List of 5 Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayoutNew>
  );
}

export default Home;
