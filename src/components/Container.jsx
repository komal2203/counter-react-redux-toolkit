const Container = ({ children }) => {
  return (
    <body className="my_body">
      <div className="card my_card" style={{ width: "70%" }}>
        <div className="card-body">{children}</div>
      </div>
    </body>
  );
};

export default Container;
