import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import { inputClasses, resultClasses, buttonClasses } from "../assets/css/css";
import { calculateDeposit } from "../components/script";

const DepositCalculator = () => {
  const hiddenResultClasses =
    resultClasses + " opacity-0 scale-y-0 h-0 m-0 p-0";
  const visibleResultClasses = resultClasses + " h-fit mt-5 mb-1";
  const [resultVisible, setResultVisible] = useState(false);

  const handleInput = () => {
    const coefIn = document.getElementById("coefInput");
    coefIn.value = coefIn.value.replace(/[^0-9.,]/g, "");
    coefIn.value = coefIn.value.replace(",", ".");
    if (coefIn.value.split(".").length > 2) {
      coefIn.value = coefIn.value.slice(0, -1);
    }
    if (coefIn.value.startsWith(".")) {
      coefIn.value = coefIn.value.slice(1);
    }
    /* MANAGING LAST INPUT FIELD MANUALLY SINCE HTML NUMBER INPUT RETURNS 0 IF ENDS WITH "." OR "," */

    const inputArr = ["take", "years", "coef"].map((id) =>
      parseFloat(document.getElementById(id + "Input").value)
    );
    /* CREATING ARRAY OF INPUT VALUES */

    if ((inputArr[0] > 0) & (inputArr[1] > 0)) {
      let result = calculateDeposit(inputArr);
      /* GETTING OUTPUT */

      document.getElementById("depOutput").innerHTML = result;
      /* PUTTING OUTPUT INTO DOCUMENT */

      setResultVisible(true);
    } else {
      setResultVisible(false);
    }
  };

  return (
    <main className="flex flex-col transition-all duration-200 ease-in-out">
      <div className="min-w-[580px] w-4/5 md:w-3/4 lg:w-3/5 xl:w-2/5 2xl:w-1/3 mx-auto mt-4 px-4 py-1 bg-[#0D1E4C]/70 rounded-2xl shadow-2xl transform transition-all duration-200 ease-in-out">
        <div className="flex flex-col bg-[#0D1E4C]/50 my-2 rounded-2xl shadow-xl">
          <h1 className="text-slate-50 text-3xl mx-auto w-fit mt-3 select-none">
            Calculating Deposit
          </h1>

          <form className="flex-1 m-5 mb-3 rounded-xl grid grid-cols-3 grid-rows-1 divide-x-4 divide-[#E5C9D7] border-4 border-[#E5C9D7]">
            <div className=" rounded-l-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15">
              <label
                htmlFor=""
                className="text-lg mx-2 my-4 text-slate-100 select-none text-center"
              >
                Annual withdrawal
              </label>
              <div className="grid grid-cols-3 grid-rows-1 gap-1 pr-2 mb-4 mt-auto ml-1">
                <input
                  type="number"
                  id="takeInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses + " col-span-2"}
                />
                <FaEuroSign className="mt-3.5 mx-auto text-xl text-white col-start-3" />
              </div>
            </div>

            <div className="flex flex-col duration-500 hover:bg-[#E5C9D7]/15">
              <label
                htmlFor=""
                className="text-lg mx-2 my-4 text-slate-100 select-none text-center"
              >
                Deposit lifetime
              </label>
              <div className="grid grid-cols-3 grid-rows-1 gap-1 pr-2 mb-4 mt-auto ml-1">
                <input
                  type="number"
                  id="yearsInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses + " col-span-2"}
                />
                <label className="mt-3 mx-auto text-md text-white font-bold select-none col-start-3">
                  YEARS
                </label>
              </div>
            </div>

            <div className="rounded-r-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15">
              <label
                htmlFor=""
                className="text-lg mx-2 my-4 text-slate-100 select-none text-center"
              >
                Interest percentage
              </label>
              <div className="grid grid-cols-3 grid-rows-1 gap-1 pr-2 mb-4 mt-auto ml-1">
                <input
                  type="text"
                  id="coefInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses + " col-span-2"}
                />
                <label className="mt-3 mx-auto text-2xl text-white font-bold select-none col-start-3">
                  %
                </label>
              </div>
            </div>
          </form>
        </div>
        <div
          className={resultVisible ? visibleResultClasses : hiddenResultClasses}
        >
          <ul className="col-span-2 p-2 text-xl">
            <li>Initial deposit: </li>
          </ul>
          <ul className="col-start-3 p-2 text-xl">
            <li id="depOutput"></li>
          </ul>
          <ul className="col-start-4 p-2 text-xl text-center">
            <li>EUR</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-fit h-fit p-4">
        <Link to="/" className={buttonClasses}>
          Back
        </Link>
      </div>
    </main>
  );
};

export default DepositCalculator;
