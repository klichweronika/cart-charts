import {
  toast,
  ToastContainer,
  ToastContent,
  ToastOptions,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const toastSuccess = (content: ToastContent, options?: ToastOptions) => {
  return toast.success(content, options);
}

export const toastError = (content: ToastContent, options?: ToastOptions) => {
  return toast.error(content, options);
}

export default function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2500}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
