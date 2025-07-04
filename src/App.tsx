import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
            <main className="container relative top-[128px] pb-[40px] w-full h-full flex flex-col justify-center">
                <AppRouter/>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
