import React, { useState } from "react";
import axios from "axios";

const PaymentButton = () => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        try {
            setLoading(true);

            const payload = {
                amount: 15,
                merchantOrderId: `ORD_${Date.now()}`, // unique & valid
            };

            const res = await axios.post(
                "https://api-test24.azurewebsites.net/api/v1/Test24/create", // update if needed
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const paymentUrl = res.data?.paymentUrl;

            if (!paymentUrl) {
                throw new Error("Payment URL not received from backend");
            }

            // 🚀 Redirect user to PhonePe
            window.location.href = paymentUrl;

        } catch (err) {
            console.error("Payment error:", err);
            alert("Failed to initiate payment");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <button
                onClick={handlePayment}
                disabled={loading}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                {loading ? "Processing..." : "Pay ₹10"}
            </button>
        </div>
    );
};

export default PaymentButton;