interface Props {
  height?: number;
  width?: number;
  fill?: string;
}

export default function CodeIcon({
  height = 24,
  width = 24,
  fill = "#212121",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={fill}
    >
      <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
    </svg>
  );
}
