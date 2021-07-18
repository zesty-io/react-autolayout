import cx from "classnames";

export default function Container(props) {
  console.log("Container", props);
  return (
    <div className={cx("Container", props.data.classes)}>{props.children}</div>
  );
}
