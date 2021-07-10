import "./App.css";
import Handlebars from "handlebars";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import emoji from "remark-emoji";

import { useEffect, useState } from "react";

Handlebars.registerHelper({
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
});

function App() {
  const [mode, setMode] = useState("rw");
  const [markdownParams, setMarkdownParams] = useState({ demo: "Stéphan" });
  const [markdownParamsError, setMarkdownParamsError] = useState(undefined);
  const [markdownParamsText, setMarkdownParamsText] = useState(
    '{ "demo": "Stéphan" }'
  );

  const [markdownError, setMarkdownError] = useState(undefined);
  const [markdownUrl, setMarkdownUrl] = useState(undefined);
  const [markdownTemplate, setMarkdownTemplate] = useState("{{demo}}");
  const [renderedMarkdown, setRenderedMarkdown] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const markdownUrl = urlParams.get("markdown");
      const gistUrl =
        urlParams.get("gist") ||
        "https://gist.github.com/mestachs/e1819a776ca1618b981d1de082a550aa";

      setMode(urlParams.get("mode") || "rw");

      if (markdownUrl) {
        let contentUrl = markdownUrl;
        if (markdownUrl.startsWith("https://github.com/")) {
          contentUrl =
            "https://raw.githubusercontent.com/" +
            markdownUrl.split("/").slice(3, 5).join("/") +
            "/" +
            markdownUrl.split("/").slice(6).join("/");
        }
        setMarkdownUrl(contentUrl);
        const markdownContent = await fetch(contentUrl).then((response) =>
          response.text()
        );
        setMarkdownTemplate(markdownContent);
      } else if (gistUrl) {
        let gistId = gistUrl;
        if (
          gistUrl.startsWith("https://gist.github.com") ||
          gistUrl.startsWith("https://gist.githubusercontent.com")
        ) {
          gistId = gistUrl.split("/")[4];
        }

        const gist = await fetch(`https://api.github.com/gists/${gistId}`).then(
          (response) => response.json()
        );
        setMarkdownUrl(gist.html_url);

        let checklist = gist.files["tasklist.md"] || gist.files["checklist.md"];

        if (checklist == undefined) {
          const fileName = Object.keys(gist.files).find((name) =>
            name.endsWith(".md")
          );
          checklist = gist.files[fileName];
        }

        let params = gist.files["params.json"];

        if (params == undefined) {
          const mutacheParams = Handlebars.parse(checklist.content);

          const mustacheParamsNames = mutacheParams.body
            .filter((k) => k.type == "MustacheStatement")
            .flatMap((k) => k.path.parts);

          const options = {};
          for (let paramName of mustacheParamsNames) {
            let fromUrlValue = urlParams.get("params." + paramName);
            if (fromUrlValue) {
              if (fromUrlValue && fromUrlValue == "false") {
                fromUrlValue = false;
              }
              if (fromUrlValue && fromUrlValue == "true") {
                fromUrlValue = true;
              }
              options[paramName] = fromUrlValue;
            } else {
              options[paramName] = "exampleValue for " + paramName;
            }
          }

          params = {
            content: JSON.stringify(options),
          };
        }

        if (params) {
          setMarkdownParamsText(
            JSON.stringify(JSON.parse(params.content), undefined, 2)
          );
          setMarkdownParams(JSON.parse(params.content));
        }
        setMarkdownTemplate(checklist.content);
      }
    };

    loadData();
  }, []);
  useEffect(() => {
    try {
      const template = Handlebars.compile(markdownTemplate);
      setRenderedMarkdown(template(markdownParams));
      setMarkdownError("");
    } catch (error) {
      setMarkdownError(error.message);
    }
  }, [markdownTemplate, markdownParamsText, markdownParams]);

  return (
    <div className="App">
      <div id="edit" className="main">
        {mode == "rw" && (
          <div className="noprint">
            <div>
              <p>
                <b>Parameters</b>{" "}
                <span style={{ color: "red" }}>{markdownParamsError}</span>
              </p>
              <textarea
                value={markdownParamsText}
                onChange={(event) => {
                  setMarkdownParamsText(event.target.value);
                  try {
                    setMarkdownParams(JSON.parse(event.target.value));
                    setMarkdownParamsError(undefined);
                  } catch (error) {
                    setMarkdownParamsError(error.message);
                  }
                }}
                cols="120"
                rows="10"
              ></textarea>
            </div>
            <div>
              <p>
                <b>Markdown template</b>{" "}
                {markdownUrl && (
                  <a href={markdownUrl} target="_blank" rel="noreferrer">
                    source
                  </a>
                )}
                <span style={{ color: "red" }}>{markdownError}</span>
              </p>
              <textarea
                value={markdownTemplate}
                onChange={(event) => {
                  setMarkdownTemplate(event.target.value);
                }}
                cols="120"
                rows="50"
              ></textarea>
            </div>
          </div>
        )}
        <div
          style={{
            paddingLeft: "20px",
            marginLeft: "20px",
            width: mode == "r" ? "80%" : "",
            margin: mode == "r" ? "auto" : "",
          }}
        >
          <p className="noprint">
            {mode == "rw" && <b>Preview</b>}
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => window.print()}
            >
              Print
            </button>
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => setMode(mode == "rw" ? "r" : "rw")}
            >
              Toggle to {mode == "rw" ? "r" : "rw"}
            </button>
          </p>
          <div className={"checklist " + mode}>
            <ReactMarkdown remarkPlugins={[gfm, emoji]} children={renderedMarkdown} />
          </div>
        </div>
      </div>
      {mode == "rw" && (
        <div className="noprint">
          <p>
            <b>
              Instantiated markdown, create a{" "}
              <a
                href="https://gist.github.com/"
                target="_blank"
                rel="noreferrer"
              >
                gist
              </a>{" "}
              and start the procedure
            </b>
          </p>
          <textarea value={renderedMarkdown} cols="200" rows="50"></textarea>
        </div>
      )}
    </div>
  );
}

export default App;
