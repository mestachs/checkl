import "./App.css";

import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import emoji from "remark-emoji";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import simplePlantUML from "@akebifiky/remark-simple-plantuml";
import { useEffect } from "react";
import mermaid from "mermaid";
import TableOfContents from "./TableOfContent";
import hljs from "highlight.js/lib/common";

const GithubRepo = (props) => {
  const location = window.location.href.split("/gh/")[1];

  const query = useQuery(["repoContent", location], async () => {
    const content = await fetch(
      "https://raw.githubusercontent.com/" + location
    ).then((c) => c.text());
    const endMetaBlock = content.indexOf("---", 5);

    const metaLines = content.slice(3, endMetaBlock).split("\n");
    const meta = {};
    for (let metaLine of metaLines) {
      const sepIndex = metaLine.indexOf(":");
      meta[metaLine.slice(0, sepIndex)] = metaLine.slice(sepIndex + 1);
    }
    return {
      location,
      meta,
      content: content.slice(endMetaBlock + 3),
    };
  });

  useEffect(() => {
    const toTransform = document.querySelectorAll(".language-mermaid");
    const elements = Array.from(toTransform);
    elements.forEach((el) => (el.parentNode.style = "background-color:white"));
    console.log(elements);
    debugger;

    mermaid.init({ noteMargin: 10 }, ".language-mermaid");

    hljs.highlightAll();
  }, [query?.data?.content]);

  return (
    <div>
      <div
        style={{
          paddingLeft: "20px",
          marginLeft: "20px",
          width: "80%",
          margin: "auto",
        }}
      >
        {query.data && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <TableOfContents key={query.data.content} />
            </div>
            <div style={{ minWidth: "70%" }}>
              <div
                style={{
                  fontSize: "3em",
                  fontWeight: "bolder",
                  textAlign: "center",
                  width: "70%",
                  margin: "auto",
                  marginBottom: "30px",
                }}
              >
                {query.data.meta.title.split('"').join("")}
              </div>
              <code style={{ float: "right" }}>{query.data.meta.date}</code>
              <br></br>
              <ReactMarkdown
                key={query.data.content}
                remarkPlugins={[slug, headings, gfm, emoji, simplePlantUML]}
                children={query.data.content}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubRepo;
