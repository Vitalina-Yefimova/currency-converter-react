const IconChip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    viewBox="0 0 23 25"
    {...props}
  >
    <g clipPath="url(#icon_chip_svg__a)">
      <rect width={21} height={21} x={1} y={1} fill="#595769" rx={4} />
      <path
        fill="url(#icon_chip_svg__b)"
        d="M16.37 0v4.833a3.84 3.84 0 0 0-2.486 3.07h-4.77a3.84 3.84 0 0 0-2.486-3.07V0zm.818 17.1h-.001q-.03-.007-.059-.013a2.64 2.64 0 0 1-2.032-2.55V8.463q0-.106.01-.212 0-.01.002-.021a2.63 2.63 0 0 1 2.022-2.318l.038-.008.022-.005q.255-.053.524-.053H23v11.307h-5.285a2.7 2.7 0 0 1-.526-.053M5.81 5.9l.02.005.04.01a2.64 2.64 0 0 1 2.034 2.55v6.074q0 .106-.01.212 0 .01-.002.021a2.635 2.635 0 0 1-2.02 2.318q-.029.007-.058.013h-.002q-.256.054-.526.053H0V5.845h5.285q.27 0 .524.054zm3.346 3.257h4.688v4.688H9.156zM0 4.44A4.444 4.444 0 0 1 4.44 0h.937v4.596l-.091-.002H0zM4.44 23A4.445 4.445 0 0 1 0 18.56v-.153h5.285l.09-.003V23H4.44zm2.19 0v-4.833a3.84 3.84 0 0 0 2.486-3.07h4.77a3.84 3.84 0 0 0 2.486 3.07V23H6.63M23 18.56A4.445 4.445 0 0 1 18.56 23h-.937v-4.596q.045.002.091.003H23v.153zM17.715 4.592l-.09.003V0h.936a4.445 4.445 0 0 1 4.44 4.44v.154h-5.285z"
      />
    </g>
    <defs>
      <linearGradient
        id="icon_chip_svg__b"
        x1={2.5}
        x2={20.5}
        y1={1.5}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EC9F23" />
        <stop offset={0.304} stopColor="#FEE2B2" />
        <stop offset={0.47} stopColor="#FEE2B2" />
        <stop offset={1} stopColor="#DBA02E" />
      </linearGradient>
      <clipPath id="icon_chip_svg__a">
        <path fill="#fff" d="M0 0h23v23H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconChip;
