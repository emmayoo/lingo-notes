require("dotenv").config();
import http from "http";
import { Client } from "@notionhq/client";
import { PartialDatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

type List = {
  id: string;
  sentence: string;
  translate: string;
  lang: string;
  date: string | null;
  link: string | null;
};

// The dotenv library will read from your .env file into these values on `process.env`
const notionDatabaseId = process.env.NOTION_DATABASE_ID;
const notionSecret = process.env.NOTION_SECRET;

// Will provide an error to users who forget to create the .env file
// with their Notion data in it
if (!notionDatabaseId || !notionSecret) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

// Initializing the Notion client with your secret
const notion = new Client({
  auth: notionSecret,
});

const host = "localhost";
const port = 8080;

// Require an async function here to support await with the DB query
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (req.url) {
    case "/":
      const query = await notion.databases.query({
        database_id: notionDatabaseId,
      });

      // PartialDatabaseObjectResponse
      const list: List[] = query.results.map((row: any) => {
        return {
          id: row.id,
          sentence: row.properties.sentence.title[0].plain_text,
          translate: row.properties.translate.rich_text[0].plain_text,
          lang: row.properties.lang.select.name || "en",
          date: row.properties.date.date.start || null,
          link: row.properties.link.url || null,
        };
      });

      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(list));
      break;

    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
