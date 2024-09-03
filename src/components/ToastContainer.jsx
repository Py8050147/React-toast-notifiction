import { useState, useEffect } from "react";
import Toast from "./Toast";

const TOAST_DURATIONS = {
    success: 5000, // 5 seconds
    error: 3000,   // 3 seconds
    info: 2000,    // 2 seconds
    warning: 4000  // 4 seconds
  };

const ToastContainer = () => {
    const [showToasts, setShowToasts] = useState([]);

  const addToast = (type, message) => {
      const id = Math.random().toString(36).substring(2, 9);
      const duration = TOAST_DURATIONS[type] || 3000;
      setShowToasts([...showToasts, { id, type, message, duration }]);
  };

  const removeToast = (id) => {
    setShowToasts(showToasts.filter((toast) => toast.id !== id));
  };

    useEffect(() => {
        if (showToasts.length > 0) {
        const toast = showToasts[0]
      const timeOut = setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
      return () => clearTimeout(timeOut);
    }
  }, [showToasts]);

  console.log("Toasts state:", showToasts);
  return (
    <>
          <div className="fixed bottom-4 right-1/3 space-y-4">
              {
                  showToasts.map((toast) => (
                      <Toast
                          key={toast.id}
                          type={toast.type}
                          message={toast.message}
                          onClose={() => removeToast(toast.id)}
                      />
                  ))
              }
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() =>
              addToast("success", "This is a success notification!")
            }
          >
            Show Success Toast
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => addToast("error", "This is an error notification!")}
          >
            Show Error Toast
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => addToast("info", "This is an info notification!")}
          >
            Show Info Toast
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-black rounded"
            onClick={() =>
              addToast("warning", "This is a warning notification!")
            }
          >
            Show Warning Toast
          </button>
        </div>
      </div>
    </>
  );
};

export default ToastContainer;
