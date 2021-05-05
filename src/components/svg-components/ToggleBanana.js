import * as React from "react";

function SvgToggleBanana(props) {
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#toggle_banana_svg__clip0)" fill={props.isSelected ? '#3670b8' : '#777879'}>
        <path d="M16.282 3.6l-1.335-.36c-.274-.073-.56.07-.639.322l-.326 1.03 2.326.626.326-1.03c.079-.251-.079-.515-.352-.588zM16.208 6.122l-2.507-.674c-1.622 4.341-6.341 6.89-11.106 6.28-.74-.094-1.442.319-1.65.975-.174.554.052 1.157.563 1.5 5.242 3.524 12.65 1.11 14.42-4.5a7.805 7.805 0 00.28-3.58z" />
      </g>
      <defs>
        <clipPath id="toggle_banana_svg__clip0">
          <path
            fill="#fff"
            transform="matrix(.96565 .25986 -.30116 .95357 4.797 .509)"
            d="M0 0h13.397v14.61H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgToggleBanana;
