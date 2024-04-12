const oracledb = require("oracledb");

// Connection parameters
const dbConfig = {
  apps_usr: "apps",
  apps_pwd: "devapps",
  host: "ec2-52-2-62-212.compute-1.amazonaws.com",
  port: "1521",
  dbname: "ebs_DEV", // e.g., 'localhost/XE' for local database
};

// Function to connect to the Oracle DB
async function connectToDB() {
  try {
    // Establish connection
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected to Oracle Database");

    // Execute your queries here
    // For example:
    const result = await connection.execute(
      `select * from fnd_user where user_name=upper('MSURENDT')`
    );
    console.log("Query Result:", result.rows);

    // Close the connection
    await connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error("Error occurred:", err);
  }
}

// Call the function to connect to the database
connectToDB();
