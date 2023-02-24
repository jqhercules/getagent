/*
------ Suggested improvements ------

#1: Currently, the home page shows a list of properties that open in a modal. For a fully fledged-out process, the content could be placed in its own route.

#2: Following the above suggestion, each route could be dynamically set up to handle direct page visits where the content persists. This could be done with a direct API call that fetches the information.

#3: As there is a large array of properties within the database, displaying all of them at once is not wise. I have added pagination to ensure only a limited amount of data is returned per request. Due to the limited amount of time, the front-end side of this is not completed. However, if you open up an API client and query "http://localhost:3000/lrProperty/E11?page=2&pageSize=5," you will be able to see that this is set up.

#4: There are other aspects that could be improved, but due to the time limit, I have only completed what I believe is important for now.

------------------------------------
*/

import { Route, Routes, BrowserRouter } from "react-router-dom";

import RootLayout from "@components/RootLayout/RootLayout";
import WelcomePage from "@pages/Welcome";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
