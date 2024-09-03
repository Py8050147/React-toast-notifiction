const Toast = ({type, message, onClose}) => {
  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  const icons = {
    success: "✔️",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };
    return (
        <div className={`flex items-center justify-between max-w-sm p-4 rounded shadow-md ${typeStyles[type]}`}>
        <div className="flex items-end">
            <span className="text-lg mr-3">{icons[type]}</span>
            <span>{message}</span>
        </div>
        <button className="ml-4" onClick={onClose}>
        ✖
      </button>
    </div>
    )
};

export default Toast;
