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
import { Link } from "react-router-dom";

const Chip = ({ text }) => (
  <div class="chip" alt={text}>
    {text}
  </div>
);

const GithubRepo = (props) => {
  const location = window.location.href.split("/gh/")[1];

  const query = useQuery({
    queryKey: ["repoContent", location],
    queryFn: async () => {
      const content = await fetch(
        "https://raw.githubusercontent.com/" + location
      ).then((c) => c.text());
      const endMetaBlock = content.indexOf("---", 5);

      const metaLines = content.slice(3, endMetaBlock).split("\n");
      const meta = {};
      for (let metaLine of metaLines) {
        const sepIndex = metaLine.indexOf(":");
        try {
          meta[metaLine.slice(0, sepIndex)] = JSON.parse(
            metaLine.slice(sepIndex + 1)
          );
        } catch {
          meta[metaLine.slice(0, sepIndex)] = metaLine.slice(sepIndex + 1);
        }
      }
      return {
        location,
        meta,
        content: content.slice(endMetaBlock + 3),
      };
    },

    enabled: location.split("/").length > 3,
  });

  const queryIndex = useQuery({
    queryKey: ["repoIndex", location],
    queryFn: async () => {
      const content = await fetch(
        "https://raw.githubusercontent.com/" + location + "/main/index.json"
      ).then((c) => c.json());
      content.files.reverse();
      return content;
    },

    enabled: location.split("/").length >= 2,
  });

  useEffect(() => {
    const toTransform = document.querySelectorAll(".language-mermaid");
    const elements = Array.from(toTransform);
    elements.forEach((el) => (el.parentNode.style = "background-color:white"));

    mermaid.init({ noteMargin: 10 }, ".language-mermaid");

    hljs.highlightAll();
  }, [query?.data?.content]);

  const onLinkClick = () => {
    const refresh = () => window.location.reload();
    setInterval(refresh, 500);
  };

  return (
    <div key={location}>
      {<span>{location.split("/").length}</span>}
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        {queryIndex.data && (
          <div>
            {queryIndex.data.files.map((file) => (
              <div key={file.file}>
                <Link
                  to={"/gh/" + location + "/main" + file.file}
                  onClick={onLinkClick}
                  style={{ fontWeight: "bolder", fontSize: "2em" }}
                >
                  {file.meta.title}
                </Link>
                <br></br>
                <code style={{ marginLeft: "20px" }}>{file.meta.date}</code>
                <hr></hr>
              </div>
            ))}
          </div>
        )}
        {query.data && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <TableOfContents key={query.data.content} />
              <br></br>
              {query.data.meta.tags &&
                query.data.meta.tags.map((tag) => (
                  <Chip title={tag} text={tag} />
                ))}
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
                {query.data.meta.title}
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
