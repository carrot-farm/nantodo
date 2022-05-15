function Check({ className = "", color = "#c4c4c4" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.2857 16.5L6 12L7.28572 10.65L10.2857 13.7834L16.7143 7.5L18 8.84146L10.2857 16.5Z"
        fill={color}
      />
    </svg>
  );
}

export default Check;
