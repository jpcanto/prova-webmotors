import React from "react";
import { useDispatch } from "react-redux";

import { Label } from "./LabelButton.styled";
import { setMakeFilter, setModelFilter, setVersionFilter } from "../../store/modules/filters/actions";

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
  const dispatch = useDispatch();
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

  function handleClick() {
    if (error) errorNotify();
    dispatch(setMakeFilter({ make: null }));
    dispatch(setModelFilter({ make: null }));
    dispatch(setVersionFilter({ make: null }));
  }

  return (
    <>
      <ToastContainer />
      <Label color={color} fontSize={fontSize} bold={bold} onClick={handleClick}>
        {text}
      </Label>
    </>
  );
};

export default LabelButton;
