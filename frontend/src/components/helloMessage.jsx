import React, { useEffect, useState } from "react";
import { getHelloMessage } from "../api.js"; // Adjust the import path if needed

const helloMessage = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const data = await getHelloMessage();
                setMessage(data); // Assuming the data is a string
            } catch (err) {
                setError("Failed to fetch message");
            } finally {
                setLoading(false);
            }
        };

        fetchMessage();
    }, []);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Message from the Server:</h2>
            <p className="mt-2 text-lg">{message}</p>
        </div>
    );
};

export default helloMessage;
