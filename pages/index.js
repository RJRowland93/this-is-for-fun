import axios from "axios";

import Layout from "../layouts/layout";

const Index = props => {
  const { users, time } = props;
  return (
    <Layout>
      <div
        style={{
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <p>Real dank tomfoolery coming soon...</p>
        <p>{`Brought to you by: ${users.map(({ name }) => name)}`}</p>
        <p>{`You opened this page at: ${time.time}`}</p>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    const {
      data: {
        data: { users, time }
      }
    } = await axios.post("http://localhost:3000/api/graphql", {
      query: `
      {
        users {
          name
        }
        time {
          time
        }
      }
      `
    });

    return { users, time };
  } catch (err) {
    console.log(err);
  }
};

export default Index;
