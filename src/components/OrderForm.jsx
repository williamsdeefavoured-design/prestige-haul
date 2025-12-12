// OrderForm.jsx
import React, { useEffect, useMemo, useState } from "react";
import OrderImg from "../assets/car.png";
import Input from "./Input";
import { useNotification } from "./context/NotificationContext";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import { riders } from "../data/rider"; // your rider data array

export default function OrderForm() {
  const { showNotification } = useNotification();
  const { saveOrder } = useCart();
  const navigate = useNavigate();

  // Steps: 0..4 (5 steps)
  const [step, setStep] = useState(0);

  // Core form state - we keep everything here so "every field is saved"
  const [form, setForm] = useState({
    // Personal
    fullname: "",
    email: "",
    phone: "",
    address: "",
    // Travel
    direction: "From Ekiti",
    destination: "",
    // Service
    serviceType: "Convoy", // Convoy | Haulage | Cargo
    // Convoy fields
    convoyCars: 1,
    convoyDate: "",
    convoyTime: "",
    // Haulage fields
    haulageWeightKg: "",
    haulageGoodsType: "",
    haulageLoadingAddress: "",
    // Cargo fields
    cargoSize: "",
    cargoFragile: "no",
    // Common
    instructions: "",
    // assigned rider will be attached on submit
  });

  // Location options
  const fromEkitiLocations = [
    "Lagos",
    "Ibadan",
    "Oyo",
    "Ogun",
    "Osun",
    "Ondo",
    "Rivers",
    "Akwa Ibom",
    "Imo",
    "Delta",
    "Kaduna",
  ];
  const toEkitiLocations = [
    "Lagos",
    "Rivers",
    "Akwa Ibom",
    "Imo",
    "Delta",
    "Oyo",
    "Ogun",
    "Kaduna",
  ];

  const destinationOptions = useMemo(
    () => (form.direction === "From Ekiti" ? fromEkitiLocations : toEkitiLocations),
    [form.direction]
  );

  // Small helper updates
  const update = (patch) => setForm((f) => ({ ...f, ...patch }));

  // Navigation helpers
  const canNext = () => {
    // Basic per-step validation
    if (step === 0) {
      return form.fullname.trim() && form.email.trim() && form.phone.trim() && form.address.trim();
    }
    if (step === 1) {
      return form.direction && form.destination;
    }
    if (step === 2) {
      return !!form.serviceType;
    }
    if (step === 3) {
      if (form.serviceType === "Convoy") {
        return form.convoyCars > 0 && form.convoyDate && form.convoyTime;
      }
      if (form.serviceType === "Haulage") {
        return form.haulageWeightKg && form.haulageGoodsType && form.haulageLoadingAddress;
      }
      if (form.serviceType === "Cargo") {
        return form.cargoSize && (form.cargoFragile === "yes" || form.cargoFragile === "no");
      }
      return true;
    }
    return true;
  };

  const next = () => {
    if (!canNext()) {
      showNotification("Please fill required fields for this step", "error");
      return;
    }
    setStep((s) => Math.min(4, s + 1));
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  // Random rider helper
  const pickRandomRider = () => {
    if (!Array.isArray(riders) || riders.length === 0) return null;
    const i = Math.floor(Math.random() * riders.length);
    return riders[i];
  };

  // Final submit
  const handleSubmit = (e) => {
    e?.preventDefault?.();

    // last-minute validation
    if (!form.fullname || !form.email || !form.phone) {
      showNotification("Please provide your contact details", "error");
      setStep(0);
      return;
    }

    // attach assigned rider
    const assignedRider = pickRandomRider();

    const payload = {
      ...form,
      assignedRider,
      createdAt: new Date().toISOString(),
    };

    // save to cart context
    try {
      saveOrder(payload);
      showNotification(
        <span>
          Order added to cart —{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            click here to finish payment
          </span>
        </span>,
        "success"
      );

      // reset form (optional)
      setForm((f) => ({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        direction: "From Ekiti",
        destination: "",
        serviceType: "Convoy",
        convoyCars: 1,
        convoyDate: "",
        convoyTime: "",
        haulageWeightKg: "",
        haulageGoodsType: "",
        haulageLoadingAddress: "",
        cargoSize: "",
        cargoFragile: "no",
        instructions: "",
      }));
      setStep(0);
    } catch (err) {
      console.error(err);
      showNotification("Could not save order. Try again.", "error");
    }
  };

  // Small UI utilities
  const StepIndicator = () => {
    const titles = ["Personal", "Route", "Service", "Details", "Summary"];
    return (
      <div className="w-full mb-6">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          {titles.map((t, i) => (
            <div key={t} className="flex-1 text-center">
              {i === step ? <strong className="text-sm text-blue-700">{t}</strong> : t}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all"
            style={{ width: `${((step + 1) / titles.length) * 100}%` }}
          />
        </div>
      </div>
    );
  };

  // Render per-step UI
  return (
    <div className="order-container flex flex-col-reverse lg:flex-row items-center justify-center py-20 px-6">
      <div className="left flex justify-center lg:w-1/2 mb-10 lg:mb-0">
        <img src={OrderImg} className="w-[300px] md:w-[400px] lg:w-[800px] object-contain" alt="Order Car" />
      </div>

      <div className="right bg-white rounded-3xl p-8 w-full max-w-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Book Your Ride</h2>

        <StepIndicator />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Step 0 - Personal */}
          {step === 0 && (
            <>
              <Input inputName="fullname" inputType="text" inputPlaceholder="Full name" inputValue={form.fullname} onChange={(e) => update({ fullname: e.target.value })} />
              <Input inputName="email" inputType="email" inputPlaceholder="Email address" inputValue={form.email} onChange={(e) => update({ email: e.target.value })} />
              <Input inputName="phone" inputType="tel" inputPlaceholder="Phone number" inputValue={form.phone} onChange={(e) => update({ phone: e.target.value })} />
              <Input inputName="address" inputType="text" inputPlaceholder="Pickup address" inputValue={form.address} onChange={(e) => update({ address: e.target.value })} />
            </>
          )}

          {/* Step 1 - Route */}
          {step === 1 && (
            <>
              <label className="text-sm font-medium">Direction</label>
              <select value={form.direction} onChange={(e) => update({ direction: e.target.value, destination: "" })} className="border p-3 rounded-xl outline-none">
                <option value="From Ekiti">From Ekiti</option>
                <option value="To Ekiti">To Ekiti</option>
              </select>

              <label className="text-sm font-medium">Destination</label>
              <select value={form.destination} onChange={(e) => update({ destination: e.target.value })} className="border p-3 rounded-xl outline-none">
                <option value="">Choose a destination</option>
                {destinationOptions.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Step 2 - Service selection */}
          {step === 2 && (
            <>
              <label className="text-sm font-medium">Service Type</label>
              <div className="flex gap-3">
                {["Convoy", "Haulage", "Cargo"].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => update({ serviceType: s })}
                    className={`px-4 py-2 rounded-xl border ${form.serviceType === s ? "bg-blue-600 text-white" : "bg-white"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 3 - Dynamic detail fields */}
          {step === 3 && (
            <>
              {form.serviceType === "Convoy" && (
                <>
                  <label className="text-sm font-medium">Number of Cars</label>
                  <Input inputType="number" inputName="convoyCars" inputValue={form.convoyCars} onChange={(e) => update({ convoyCars: Number(e.target.value) })} />

                  <label className="text-sm font-medium">Convoy Date</label>
                  <Input inputType="date" inputName="convoyDate" inputValue={form.convoyDate} onChange={(e) => update({ convoyDate: e.target.value })} />

                  <label className="text-sm font-medium">Pickup Time</label>
                  <Input inputType="time" inputName="convoyTime" inputValue={form.convoyTime} onChange={(e) => update({ convoyTime: e.target.value })} />
                </>
              )}

              {form.serviceType === "Haulage" && (
                <>
                  <label className="text-sm font-medium">Weight (kg)</label>
                  <Input inputType="number" inputName="haulageWeightKg" inputValue={form.haulageWeightKg} onChange={(e) => update({ haulageWeightKg: e.target.value })} />

                  <label className="text-sm font-medium">Goods Type</label>
                  <Input inputType="text" inputName="haulageGoodsType" inputValue={form.haulageGoodsType} onChange={(e) => update({ haulageGoodsType: e.target.value })} />

                  <label className="text-sm font-medium">Loading Address</label>
                  <Input inputType="text" inputName="haulageLoadingAddress" inputValue={form.haulageLoadingAddress} onChange={(e) => update({ haulageLoadingAddress: e.target.value })} />
                </>
              )}

              {form.serviceType === "Cargo" && (
                <>
                  <label className="text-sm font-medium">Package Size</label>
                  <Input inputType="text" inputName="cargoSize" inputValue={form.cargoSize} onChange={(e) => update({ cargoSize: e.target.value })} />

                  <label className="text-sm font-medium">Fragile?</label>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => update({ cargoFragile: "yes" })} className={`px-4 py-2 rounded-xl border ${form.cargoFragile === "yes" ? "bg-blue-600 text-white" : "bg-white"}`}>Yes</button>
                    <button type="button" onClick={() => update({ cargoFragile: "no" })} className={`px-4 py-2 rounded-xl border ${form.cargoFragile === "no" ? "bg-blue-600 text-white" : "bg-white"}`}>No</button>
                  </div>

                  <label className="text-sm font-medium">Delivery Instructions</label>
                  <Input inputType="textarea" inputName="cargoInstructions" inputValue={form.instructions} onChange={(e) => update({ instructions: e.target.value })} />
                </>
              )}
            </>
          )}

          {/* Step 4 - Summary & submit */}
          {step === 4 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Review your booking</h3>
              <div className="text-sm text-gray-700">
                <p><strong>Name:</strong> {form.fullname}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Phone:</strong> {form.phone}</p>
                <p><strong>Address:</strong> {form.address}</p>
                <p><strong>Direction:</strong> {form.direction}</p>
                <p><strong>Destination:</strong> {form.destination}</p>
                <p><strong>Service:</strong> {form.serviceType}</p>

                {form.serviceType === "Convoy" && (
                  <>
                    <p><strong>Cars:</strong> {form.convoyCars}</p>
                    <p><strong>Date:</strong> {form.convoyDate}</p>
                    <p><strong>Time:</strong> {form.convoyTime}</p>
                  </>
                )}
                {form.serviceType === "Haulage" && (
                  <>
                    <p><strong>Weight (kg):</strong> {form.haulageWeightKg}</p>
                    <p><strong>Goods:</strong> {form.haulageGoodsType}</p>
                    <p><strong>Loading:</strong> {form.haulageLoadingAddress}</p>
                  </>
                )}
                {form.serviceType === "Cargo" && (
                  <>
                    <p><strong>Package size:</strong> {form.cargoSize}</p>
                    <p><strong>Fragile:</strong> {form.cargoFragile}</p>
                    <p><strong>Instructions:</strong> {form.instructions}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-4">
            <div>
              {step > 0 && (
                <button type="button" onClick={back} className="px-4 py-2 rounded-xl border mr-2">
                  Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {step < 4 ? (
                <button type="button" onClick={next} className="px-6 py-2 rounded-xl bg-blue-700 text-white">
                  Next
                </button>
              ) : (
                <button type="submit" className="px-6 py-2 rounded-xl bg-green-600 text-white">
                  Confirm & Add to Cart
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
