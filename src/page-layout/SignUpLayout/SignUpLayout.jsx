import { ReactNode } from "react";
import styles from "./SignUpLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const SignUpLayout = ({ header, form, social }) => {
  return (
    <div className={cx("auth-page")}>
      <div className={cx("container")}>
        {header}
        {form}
        <div className={cx("social")}>{social}</div>
      </div>
    </div>
  );
};
