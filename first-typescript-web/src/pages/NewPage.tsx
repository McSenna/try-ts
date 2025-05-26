import { useState } from "react";


const NewPage = () => {

    const [showAlert, setShowAlert] =  useState(false);

    return (
        <div>
            <button onClick={() => setShowAlert(true)}> CLick</button>

            {showAlert && (
                <div className="flex relative bg-blue-300">
                    <p>Alert: This is a new page!</p>
                    <button onClick={() => setShowAlert(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default NewPage;