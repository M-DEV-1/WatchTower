import React from "react";
import Webcam from "react-webcam";

const Navbar = () => (
    <nav className="bg-gray-900 p-4 shadow-lg">
        <h1 className="text-center text-2xl text-green-500">WatchTower - AI Proctor</h1>
    </nav>
);

class WebcamCapture extends React.Component {
    render() {
        const videoConstraints = {
            facingMode: "user"
        };

        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
                <Navbar />
                <div className="mt-10">
                    <Webcam
                        videoConstraints={videoConstraints}
                        className="border-2 border-green-500 rounded-lg"
                    />
                    <button className="mt-5 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                        Start Test
                    </button>
                </div>
            </div>
        );
    }
}

export default WebcamCapture;
