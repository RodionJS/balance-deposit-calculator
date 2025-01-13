function formatNum(num) {
  num = new Intl.NumberFormat("de-DE").format(num);
  return num;
}

export const calculateProfit = (calArrProfit) => {
  let [start, add, years, interest] = calArrProfit;

  !add && (add = 0);
  /* BECAUSE "0" PLACEHOLDER DOES NOT RETURN 0 */

  let result = start - add;
  const mult = interest / 100 + 1;

  for (let i = 0; i < years; i++) {
    result = (result + add) * mult;
  }
  /* MAIN LOGIC, CALCULATING BALANCE */

  const sum = result - (start + add * (years - 1));
  const month = sum / (12 * years);
  /* CALCULATING PROFIT */

  let bal = result;
  let inv = start + add * (years - 1);
  let mon = month;
  let tot = sum;

  const resultArr = [bal, inv, mon, tot].map((element) =>
    formatNum(Math.round(element))
  );

  return resultArr;
};

export const calculateDeposit = (calArrDeposit) => {
  let [take, years, interest] = calArrDeposit;

  !interest && (interest = 0);
  /* BECAUSE "0" PLACEHOLDER DOES NOT RETURN 0 */

  const mult = interest / 100 + 1;
  let sum = 0;

  for (let i = take; true; i += 10000) {
    sum = i;
    for (let ii = 0; ii < years - 1; ii++) {
      sum = (sum - take) * mult;

      if (sum < 0) {
        break;
      }
    }

    if (sum > 0) {
      return formatNum(Math.round(i));
    }
  }
  /* MAIN LOGIC TO CALCULATE AND RETURN INITIAL DEPOSIT */
};
