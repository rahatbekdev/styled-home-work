import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({
  type,
  variant,
  children,
  className,
  id,
  onClick,
  size,
}) => {
  return (
    <div>
      <MyButton
        type={type ? type : "button"}
        // eslint-disable-next-line react/no-unknown-property
        variant={variant}
        className={className ? `btn-component ${className}` : "btn-component"}
        id={id}
        onClick={onClick}
        size={size}
      >
        {children}
      </MyButton>
    </div>
  );
};

//! ========= STYLED COMPONENTS  =======================

const MyButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 250px;
  font-size: 15px;
  font-weight: bold;
  border: ${(props) =>
    props.size === "sz1"
      ? "2px solid blue"
      : props.size === "sz5"
      ? "1px solid blue"
      : props.size === "sz13"
      ? "2px solid rgba(201, 201, 201, 1)"
      : props.size === "sz17"
      ? "none"
      : props.size === "sz18"
      ? "none"
      : props.size === "sz19"
      ? "none"
      : props.size === "sz20"
      ? "none"
      : props.size === "sz2"
      ? "none"
      : props.size === "sz3"
      ? "none"
      : props.size === "sz4"
      ? "none"
      : props.size === "sz6"
      ? "none"
      : props.size === "sz7"
      ? "none"
      : props.size === "sz8"
      ? "none"
      : props.size === "sz9"
      ? "none"
      : props.size === "sz10"
      ? "none"
      : props.size === "sz11"
      ? "none"
      : props.size === "sz12"
      ? "none"
      : props.size === "sz14"
      ? "none"
      : props.size === "sz15"
      ? "none"
      : props.size === "sz16"
      ? "none"
      : ""};
  border-radius: 5px;
  padding: 0
    ${(props) =>
      props.size === "sz1"
        ? "20px"
        : props.size === "sz2"
        ? "20px"
        : props.size === "sz3"
        ? "20px"
        : props.size === "sz4"
        ? "20px"
        : props.size === "sz5"
        ? "20px"
        : props.size === "sz6"
        ? "20px"
        : props.size === "sz7"
        ? "20px"
        : props.size === "sz8"
        ? "20px"
        : props.size === "sz9"
        ? "20px"
        : props.size === "sz10"
        ? "20px"
        : props.size === "sz11"
        ? "20px"
        : props.size === "sz12"
        ? "20px"
        : props.size === "sz13"
        ? "20px"
        : props.size === "sz14"
        ? "20px"
        : props.size === "sz15"
        ? "20px"
        : props.size === "sz16"
        ? "20px"
        : props.size === "sz17"
        ? "20px"
        : props.size === "sz18"
        ? "20px"
        : props.size === "sz19"
        ? "20px"
        : props.size === "sz20"
        ? "20px"
        : "5px"};
  height: ${(props) =>
    props.size === "sz1"
      ? "40px"
      : props.size === "sz2"
      ? "40px"
      : props.size === "sz3"
      ? "40px"
      : props.size === "sz4"
      ? "40px"
      : props.size === "sz5"
      ? "40px"
      : props.size === "sz6"
      ? "40px"
      : props.size === "sz7"
      ? "40px"
      : props.size === "sz8"
      ? "40px"
      : props.size === "sz9"
      ? "40px"
      : props.size === "sz10"
      ? "40px"
      : props.size === "sz11"
      ? "40px"
      : props.size === "sz12"
      ? "40px"
      : props.size === "sz13"
      ? "40px"
      : props.size === "sz14"
      ? "40px"
      : props.size === "sz15"
      ? "40px"
      : props.size === "sz16"
      ? "40px"
      : props.size === "sz17"
      ? "40px"
      : props.size === "sz18"
      ? "40px"
      : props.size === "sz19"
      ? "40px"
      : props.size === "sz20"
      ? "40px"
      : "5px"};
  background-color: ${(props) =>
    props.variant === "vr1"
      ? "white"
      : props.variant === "vr2"
      ? "rgba(76, 148, 240, 1)"
      : props.variant === "vr3"
      ? "rgba(255, 145, 43, 1)"
      : props.variant === "vr4"
      ? "rgba(229, 67, 67, 1)"
      : props.variant === "vr5"
      ? "white"
      : props.variant === "vr6"
      ? "rgba(31, 110, 212, 1)"
      : props.variant === "vr7"
      ? "rgba(243, 119, 5, 1)"
      : props.variant === "vr8"
      ? "rgba(223, 45, 45, 1)"
      : props.variant === "vr9"
      ? "rgba(0, 82, 188, 1)"
      : props.variant === "vr10"
      ? "rgba(0, 82, 188, 1)"
      : props.variant === "vr11"
      ? "rgba(207, 99, 0, 1)"
      : props.variant === "vr12"
      ? "rgba(194, 11, 11, 1)"
      : props.variant === "vr13"
      ? "white"
      : props.variant === "vr14"
      ? "rgba(210, 210, 210, 0.42)"
      : props.variant === "vr15"
      ? "rgba(201, 201, 201, 1)"
      : props.variant === "vr16"
      ? "rgba(201, 201, 201, 1)"
      : "transparent"};
     
  &:hover {
    background-color: ${(props) =>
      props.variant === "vr2"
        ? "rgba(31, 110, 212, 0.42)"
        : props.variant === "vr3"
        ? "#c38448"
        : props.variant === "vr4"
        ? "#c24f4f"
        : props.variant === "vr6"
        ? "#365680"
        : props.variant === "vr7"
        ? "#7f5936"
        : props.variant === "vr8"
        ? "#6b2e2e"
        : props.variant === "vr9"
        ? "#14345e"
        : props.variant === "vr10"
        ? "#1f262f"
        : props.variant === "vr11"
        ? "#61360e"
        : props.variant === "vr12"
        ? "#560b0b"
        : ""};

&:active{
        background-color: green;
      }
  }
`;

//!=========== PROPTYPES ============================
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
};
