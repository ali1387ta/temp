import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <ToastContainer
      hideProgressBar={true}
      theme="dark"
      toastStyle={{
        border: "1px solid #27272a",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.14)",
        userSelect: "none",
      }}
      draggable
      closeOnClick
    />
  );
};

export default Toast;
