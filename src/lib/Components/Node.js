export default function Node(props) {
  // console.log("Node", props);
  return <div dangerouslySetInnerHTML={{ __html: props.data.html }} />;
}
