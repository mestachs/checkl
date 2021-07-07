import "./App.css";
import Mustache from "mustache";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";

function App() {
  const [markdownParams, setMarkdownParams] = useState({ demo: "Stéphan" });
  const [markdownParamsText, setMarkdownParamsText] = useState(
    '{ demo: "Stéphan" }'
  );

  const [markdownTemplate, setMarkdownTemplate] = useState("{{demo}}");

  useEffect(() => {
    const loadData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const gistUrl = urlParams.get("gist");

      const gistContentUrl =
        gistUrl ||
        "https://gist.githubusercontent.com/mestachs/e1819a776ca1618b981d1de082a550aa/raw/cbfedc3156a166eae0eb21dcf99aaf5b6c7d9a70";

      const params = await fetch(gistContentUrl + "/params.json").then((r) =>
        r.json()
      );
      const textmd = await fetch(gistContentUrl + "/tasklist.md").then((r) =>
        r.text()
      );

      setMarkdownParamsText(JSON.stringify(params, undefined, 2));
      setMarkdownParams(params);
      setMarkdownTemplate(textmd);
    };

    loadData();
  }, []);

  const markdown = Mustache.render(markdownTemplate, markdownParams);
  return (
    <div className="App">
      <div id="edit" className="main">
        <div className="noprint">
          <div>
            <p>
              <b>Parameters</b>
            </p>
            <textarea
              value={markdownParamsText}
              onChange={(event) => {
                setMarkdownParamsText(event.target.value);
                try {
                  setMarkdownParams(JSON.parse(event.target.value));
                } catch (error) {}
              }}
              cols="120"
              rows="20"
            ></textarea>
          </div>
          <div>
            <p>
              <b>Markdown template</b>
            </p>
            <textarea
              value={markdownTemplate}
              onChange={(event) => {
                debugger;
                setMarkdownTemplate(event.target.value);
              }}
              cols="120"
              rows="50"
            ></textarea>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p className="noprint">
            <b>Preview</b>
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => window.print()}
            >
              Print
            </button>
          </p>
          <div className="checklist">
            <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
          </div>
        </div>
      </div>
      <div className="noprint">
        <p>
          <b>Instantiated markdown, create a gist and start the procedure</b>
        </p>
        <textarea value={markdown} cols="200" rows="50"></textarea>
      </div>
    </div>
  );
}

export default App;
