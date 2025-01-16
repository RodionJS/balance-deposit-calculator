import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import {
  inputClasses,
  resultClasses,
  buttonClasses,
  wrapperClasses,
} from "../assets/css/css";
import { calculateProfit } from "../components/script";

const BalanceCalculator = () => {
  const hiddenResultClasses =
    resultClasses + " scale-y-0 m-0 p-0 h-0 opacity-0";
  const visibleResultClasses = resultClasses + " mt-5 mb-1";
  const [resultVisible, setResultVisible] = useState(false);

  function handleInput() {
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

    const inputArr = ["start", "add", "years", "coef"].map((id) =>
      parseFloat(document.getElementById(id + "Input").value)
    );
    /* CREATING ARRAY OF INPUT VALUES */

    if ((inputArr[0] > 0) & (inputArr[2] > 0) & (inputArr[3] > 0)) {
      let resultArr = calculateProfit(inputArr);
      /* PUTTING CALCULATED VALUES INTO ARRAY */

      let resultIdArr = ["bal", "inv", "mon", "tot"];
      for (let i = 0; i < resultArr.length; i++) {
        document.getElementById(resultIdArr[i] + "Output").innerHTML =
          resultArr[i];
      }
      /* PUTTING VALUES FROM OUTPUT ARRAY IN DOCUMENT */

      setResultVisible(true);
    } else {
      setResultVisible(false);
    }
  }

  return (
    <main className="flex flex-col transition-all duration-200 ease-in-out">
      <div className={wrapperClasses}>
        <div className="flex flex-col bg-[#0D1E4C]/50 my-2 rounded-2xl shadow-xl">
          <h1 className="text-slate-50 text-3xl mx-auto w-fit mt-3 select-none">
            Calculating Balance
          </h1>

          <form className="flex-1 m-5 mb-3 rounded-xl grid grid-cols-2 grid-rows-2 border-2 border-[#E5C9D7]">
            <div className="rounded-tl-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15 border-2 border-[#E5C9D7]">
              <label
                htmlFor=""
                className="sm:text-md text-lg mx-auto my-4 text-slate-100 select-none"
              >
                Initial deposit
              </label>
              <div className="flex flex-row pr-2 mb-4">
                <input
                  type="number"
                  id="startInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses}
                />
                <FaEuroSign className="mt-3.5 mx-auto text-xl text-white" />
              </div>
            </div>

            <div className="rounded-tr-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15 border-2 border-[#E5C9D7]">
              <label
                htmlFor=""
                className="sm:text-md text-lg mx-auto my-4 text-slate-100 select-none"
              >
                Annual deposit
              </label>
              <div className="flex flex-row pr-2 mb-4">
                <input
                  type="number"
                  id="addInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses}
                />
                <FaEuroSign className="mt-3.5 mx-auto text-xl text-white" />
              </div>
            </div>

            <div className="rounded-bl-lg flex flex-col duration-500 hover:bg-[#E5C9D7]/15 border-2 border-[#E5C9D7]">
              <label
                htmlFor=""
                className="sm:text-md text-lg mx-auto my-4 text-slate-100 select-none"
              >
                Deposit lifetime
              </label>
              <div className="flex flex-row pr-2 mb-4">
                <input
                  type="number"
                  id="yearsInput"
                  placeholder="0"
                  onChange={handleInput}
                  className={inputClasses}
                />
                <label className="mt-3 text-lg text-white font-bold select-none">
                  YEARS
                </label>
              </div>
            </div>

            <div className="rounded-br-lg flex flex-col duration-200 ease-in-out hover:bg-[#E5C9D7]/15 border-2 border-[#E5C9D7]">
              <label
                htmlFor=""
                className="sm:text-md text-lg mx-auto my-4 text-slate-100 select-none"
              >
                Interest percentage
              </label>
              <div className="flex flex-row pr-2 mb-4">
                <input
                  type="text"
                  id="coefInput"
                  placeholder={0}
                  onChange={handleInput}
                  className={inputClasses}
                />
                <label className="mt-3 mx-auto text-2xl text-white font-bold select-none">
                  %
                </label>
              </div>
            </div>
          </form>
        </div>
        <div
          className={resultVisible ? visibleResultClasses : hiddenResultClasses}
        >
          <ul className="col-span-2 p-2 text-xl text-start">
            <li>Balance: </li>
            <li>Total deposit:</li>
            <li>Net gain:</li>
            <li>Monthly gain:</li>
          </ul>
          <ul className="col-start-3 p-2 text-xl">
            <li id="balOutput"></li>
            <li id="invOutput"></li>
            <li id="totOutput"></li>
            <li id="monOutput"></li>
          </ul>
          <ul className="col-start-4 p-2 text-xl text-center">
            <li>EUR</li>
            <li>EUR</li>
            <li>EUR</li>
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
export default BalanceCalculator;
