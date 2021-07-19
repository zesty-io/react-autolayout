import cx from "classnames";

export default function Root(props) {
  // console.log("Root", props);
  return <div className={cx("Root", props.data.classes)}>{props.children}</div>;
}
