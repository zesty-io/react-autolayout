export default function Text(props) {
  console.log("Text", props);

  return <div dangerouslySetInnerHTML={{ __html: props.data.html }} />;
}
