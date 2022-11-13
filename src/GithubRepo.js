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
import { Link, useLocation } from "react-router-dom";

const Chip = ({ text }) => (
  <div class="chip" alt={text}>
    {text}
  </div>
);

const HamburgerIcon = ({ location }) => {
  const style = {
    width: "35px",
    height: "5px",
    backgroundColor: "var(--color-text)",
    margin: "6px 0",
  };
  return (
    <Link to={location}>
      <div style={style} />
      <div style={style} />
      <div style={style} />
    </Link>
  );
};

const GithubRepo = (props) => {
  const location2 = useLocation();
  const location = location2.pathname.split("/gh/")[1];

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

  const queryUser = useQuery({
    queryKey: ["user", location],
    queryFn: async () => {
      const user = await fetch(
        "https://api.github.com/users/" + location.split("/")[0]
      ).then((c) => c.json());

      return user;
    },

    enabled: location.split("/").length >= 2,
  });

  useEffect(() => {
    const toTransform = document.querySelectorAll(".language-mermaid");
    const elements = Array.from(toTransform);
    elements.forEach((el) => (el.parentNode.style = "background-color:white"));

    mermaid.init({ noteMargin: 10 }, ".language-mermaid");

    hljs.highlightAll();

    if (location.split("/").length == 2 && queryUser.data) {
      document.title = queryUser.data.name;
    }
    if (query?.data?.meta && location.split("/").length > 2) {
      document.title = query?.data?.meta?.title;
    }
  }, [queryUser?.data, query?.data?.content]);

  return (
    <div key={location}>
      {query.data && (
        <div>
          <HamburgerIcon
            location={location2.pathname.split("/main/")[0] + "/"}
          ></HamburgerIcon>
        </div>
      )}
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
      >
        {!query.data && queryUser.data && (
          <div>
            <img
              style={{ borderRadius: "50%" }}
              src={queryUser.data.avatar_url}
            ></img>
            <span style={{ fontSize: "5em" }}>{queryUser.data.name}</span>
            <br></br>
            <span>{queryUser.data.location}</span>
          </div>
        )}
        {queryIndex.data && (
          <div>
            {queryIndex.data.files.map((file) => (
              <div key={file.file} style={{ margin: "40px 40px 40px 0px" }}>
                <Link
                  to={("/gh/" + location + "/main" + file.file).replace(
                    "//",
                    "/"
                  )}
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
