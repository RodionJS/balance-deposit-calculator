//Thank you for your interest in my project!
//Created by Rodion Kuznetsov, student of Singidunum University, Belgrade, Serbia.

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import BalanceCalculator from "./pages/BalanceCalculator";
import DepositCalculator from "./pages/DepositCalculator";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/balance-calculator" element={<BalanceCalculator />} />
      <Route path="/deposit-calculator" element={<DepositCalculator />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
