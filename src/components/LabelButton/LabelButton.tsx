import React from "react";

import { Label } from "./LabelButton.styled";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  color: string;
  fontSize: string;
  text: string;
  bold: boolean;
  error: boolean;
}

const LabelButton: React.FC<IProps> = ({ color, fontSize, text, bold, error }) => {
  const errorNotify = () =>
    toast.error("⚠️ Oops, essa funcionalidade ainda não foi implementada!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <ToastContainer />
      <Label
        color={color}
        fontSize={fontSize}
        bold={bold}
        onClick={() => (error ? errorNotify() : null)}
      >
        {text}
      </Label>
    </>
  );
};

export default LabelButton;
