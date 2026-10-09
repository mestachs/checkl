const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;

const unquote = (value) => {
  const trimmed = value.trim();
  const quote = trimmed[0];
  if ((quote === '"' || quote === "'") && trimmed.endsWith(quote)) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

/**
 * Splits a leading yaml front matter block (simple "key: value" lines,
 * indented lines being continuations of the previous value) from the markdown.
 */
export const splitFrontMatter = (markdown) => {
  const match = markdown.match(FRONT_MATTER);
  if (!match) {
    return { fields: [], content: markdown };
  }
  const fields = [];
  for (const line of match[1].split(/\r?\n/)) {
    const sepIndex = line.indexOf(":");
    if (/^\S/.test(line) && sepIndex > 0) {
      fields.push({
        field: line.slice(0, sepIndex).trim(),
        value: unquote(line.slice(sepIndex + 1)),
      });
    } else if (line.trim() && fields.length > 0) {
      const last = fields[fields.length - 1];
      last.value = (last.value + " " + unquote(line)).trim();
    }
  }
  return { fields, content: markdown.slice(match[0].length) };
};

export const FrontMatter = ({ fields }) =>
  fields.length > 0 && (
    <table className="front-matter">
      <thead>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {fields.map(({ field, value }) => (
          <tr key={field}>
            <td>
              <code>{field}</code>
            </td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
