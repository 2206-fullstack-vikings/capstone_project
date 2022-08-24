const baseUrl = process.env.NODE_ENV === "production"
    ? "https://data.heroku.com/datastores/6412d5cb-abcf-4c30-9556-9f9cf291c5f0#"
    : "http://localhost:3000";
export default baseUrl;