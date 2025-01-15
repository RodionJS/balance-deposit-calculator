import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex flex-col">
      <div className="min-w-[580px] w-4/5 md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/3 mx-auto mt-4 px-4 py-1 bg-[#0D1E4C]/70 rounded-2xl shadow-2xl">
        <div className="flex flex-col bg-[#0D1E4C]/50 my-2 rounded-2xl shadow-xl">
          <h1 className="text-slate-50 text-3xl mx-auto w-fit mt-3 select-none">
            Choose Your Tool
          </h1>

          <form className="border-4 border-[#E5C9D7] divide-y-4 divide-[#E5C9D7] m-5 mb-3 rounded-xl grid grid-cols-1 grid-rows-2">
            <Link to="/balance-calculator">
              <div className="rounded-tl-lg rounded-tr-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15 text-2xl text-center text-white p-6">
                Balance calculator
              </div>
            </Link>
            <Link to="/deposit-calculator">
              <div className="rounded-bl-lg rounded-br-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15 text-2xl text-center text-white p-6">
                Deposit calculator
              </div>
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
