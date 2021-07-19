import cx from "classnames";

export default function Column(props) {
  // console.log("Column", props);
  return (
    <div
      className={cx("Column", props.data?.classes)}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: props.data.width,
      }}
    >
      {props.children}
    </div>
  );
}
