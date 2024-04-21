import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import Header from "./Header"
import Features from "./Features"
import Tariffs from "./Tariffs"
import Footer from "./Footer"
import Registration from "./Registration";
import Autorisation from "./Autorisation";
import "../css/style.css"
import "../css/fonts.css"

const App = () => {
    const [showModal, setShowModal] = useState(0);

    return (
        <div>
            <Navbar toggleModal={setShowModal} />
            <Header toggleModal={setShowModal} />
            <Features />
            <Tariffs />
            <Footer />
            {
                showModal === 1 ? <Autorisation toggleModal={setShowModal} /> : null
            }
            {
                showModal === 2 ? <Registration toggleModal={setShowModal} /> : null
            }
        </div>
    )
}

export default App