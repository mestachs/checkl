import gfm from "remark-gfm";
import emoji from "remark-emoji";
import slug from "remark-slug";
import headings from "remark-autolink-headings";
import simplePlantUML from "@akebifiky/remark-simple-plantuml";
import raw from "rehype-raw";
import sanitize from "rehype-sanitize";
import githubSchema from "hast-util-sanitize/lib/github.json";

// GitHub-like sanitization so inline html (<details>, <summary>, ...) renders
// without allowing scripts, but keep heading ids (toc) and classes (mermaid, hljs)
const schema = {
  ...githubSchema,
  clobber: [],
  attributes: {
    ...githubSchema.attributes,
    "*": [...githubSchema.attributes["*"], "className"],
  },
};

export const remarkPlugins = [slug, headings, gfm, emoji, simplePlantUML];
export const rehypePlugins = [raw, [sanitize, schema]];
