import axios from "axios";

import Layout from "../layouts/layout";

const Index = props => {
  const { users, time } = props;
  return (
    <Layout>
      <p>Real dank tomfoolery coming soon...</p>
      <p>{`Brought to you by: ${users.map(({ name }) => name)}`}</p>
      <p>{`You opened this page at: ${time.time}`}</p>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  try {
    const {
      data: { data: result }
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

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default Index;
