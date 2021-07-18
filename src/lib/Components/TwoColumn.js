import cx from "classnames";

export default function TwoColumn(props) {
  console.log("TwoColumn", props);
  return (
    <div className={cx("TwoColumn", props.data?.classes)}>{props.children}</div>
  );
}
