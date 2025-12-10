import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { PaystackButton } from "react-paystack";
import { useCart } from "../components/context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeOrder } = useCart(); // <-- added removeOrder
  const [tab, setTab] = useState("bank");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const publicKey = "pk_test_7be01e1c18b184c0c7a4b5f5c34ec3e6aac049ff";

  // Dynamic total price
  const totalPrice = cart?.reduce((sum, order) => {
    const base = 20000;
    const multiplier = order.direction === "From Ekiti" ? 1 : 1.5;
    return sum + base * multiplier;
  }, 0) || 0;

  useEffect(() => {
    if (cart && cart.length > 0) {
      const lastOrder = cart[cart.length - 1];
      setFormData({
        ...formData,
        name: lastOrder.fullname || "",
        email: lastOrder.email || "",
        phone: lastOrder.phone || "",
      });
    }
  }, [cart]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSuccess = () => {
    toast.success("Payment successful!", { autoClose: 2000 });
    navigate("/receipt");
  };

  const handleClose = () => {
    toast.info("Payment closed without completing.", { autoClose: 2000 });
  };

  const paystackProps = {
    email: formData.email,
    amount: totalPrice * 100,
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
    metadata: { name: formData.name, phone: formData.phone },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

        {cart && cart.length > 0 ? (
          <>
            <ul className="mb-4 space-y-3">
              {cart.map((order, i) => (
                <li key={i} className="p-3 border rounded-lg relative">
                  <p><span className="font-semibold">Name:</span> {order.fullname}</p>
                  <p><span className="font-semibold">Direction:</span> {order.direction}</p>
                  <p><span className="font-semibold">Destination:</span> {order.destination}</p>
                  <p><span className="font-semibold">Fare:</span> ₦{order.direction === "From Ekiti" ? 20000 : 30000}</p>

                  {/* 🗑️ Delete Button */}
                  <button
                    onClick={() => removeOrder(i)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                    title="Remove this order"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>

            <p className="text-lg font-semibold mb-6">
              Total Price: ₦{totalPrice.toLocaleString()}
            </p>

            {/* 🔵 Tabs */}
            <div className="flex mb-6 border-b pb-2">
              <button
                onClick={() => setTab("bank")}
                className={`w-1/2 text-center py-2 font-semibold ${
                  tab === "bank" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500"
                }`}
              >
                Bank / Card
              </button>
              <button
                onClick={() => setTab("stellar")}
                className={`w-1/2 text-center py-2 font-semibold ${
                  tab === "stellar" ? "text-blue-700 border-b-2 border-blue-700" : "text-gray-500"
                }`}
              >
                Stellar
              </button>
            </div>

            {/* 🔵 Payment Form */}
            {tab === "bank" && (
              <div className="flex flex-col gap-4">
                <Input label="Name" name="name" value={formData.name} onChange={handleChange} required />
                <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <PaystackButton {...paystackProps} className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl" />
              </div>
            )}

            {tab === "stellar" && (
              <div className="p-4 bg-yellow-50 rounded-xl">
                <p className="font-semibold text-yellow-700">Send Payment Using Stellar</p>
                <p>Asset: USDC (Stellar)</p>
                <p>Network: Stellar Mainnet</p>
                <Input readOnly label="Wallet" value="GA3D...YOUR_WALLET...XYZ" />
                <Input readOnly label="Memo" value="AUTO-GENERATED-MEMO" />
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}
