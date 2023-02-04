import { FC, ReactNode } from "react";
import cs from "classnames";
import styles from "./container.module.scss";

type Props = {
  main?: boolean;
  className?: string;
  children: ReactNode | JSX.Element;
};

export const Container: FC<Props> = ({ main, children, className }) => {
  return (
    <div
      className={cs(
        styles.container,
        {
          [styles["container-main"]]: main,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
