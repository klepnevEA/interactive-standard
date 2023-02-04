import cs from "classnames";

export const Icon = ({
  size = 24,
  fill,
  viewBox = "0 0 24 24",
  className,
  path,
}) => (
  <svg
    className={cs(className)}
    width={size}
    height={size}
    viewBox={viewBox}
    style={{ fill }}
  >
    {path}
  </svg>
);
