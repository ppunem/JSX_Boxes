const Box = (props) => {
  const { container, matter };
  return (
    <div className={container}>
      <p className="text">{matter}</p>
    </div>
  );
};

const element = (
  <div>
    <h1 className="head">Boxes</h1>
    <Box container="small-container" matter="Small" />
    <Box container="medium-container" matter="Medium" />
    <Box container="large-container" matter="Large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
