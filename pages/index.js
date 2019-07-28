import axios from "axios";

const Index = props => {
  const { users } = props;
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <p>Real dank tomfooler coming soon...</p>
      <p>{`Coming to you from ${users.map(({ name }) => name)}`}</p>
    </div>
  );
};

Index.getInitialProps = async ({ req }) => {
  const {
    data: {
      data: { users }
    }
  } = await axios.post("http://localhost:3000/api/graphql", {
    query: `{ users { name } }`
  });
  return { users };
};

export default Index;
