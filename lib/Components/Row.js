import cx from "classnames";

export default function Row(props) {
  return (
    <div
      className={cx("Row", props.data?.classes)}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {props.children}
    </div>
  );
}
