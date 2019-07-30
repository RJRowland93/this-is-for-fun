// import query from "../../lib/db";

export default {
  getTime: async () => {
    try {
      // const result = await query("SELECT NOW()");
      const result = "About tree fiddy";
      // await pool.end();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
};
