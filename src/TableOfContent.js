import React from "react";

const Headings = ({ headings, activeId, setActiveId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveId(heading.id);
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(child.id);
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("body h1, body h2, body h3")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  const counters = { h1: 0, h2: 0, h3: 0 };

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H1") {
      counters.h1 = counters.h1 + 1;
      counters.h2 = 0;
      counters.h3 = 0;
      nestedHeadings.push({
        id,
        title: counters.h1 + ". " + title,
        items: [],
      });
    }

    if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
      counters.h2 = counters.h2 + 1;
      counters.h3 = 0;

      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title: counters.h1 + "." + counters.h2 + " " + title,
      });
    }

    if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      counters.h3 = counters.h3 + 1;
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title:
          counters.h1 + "." + counters.h2 + "." + counters.h3 + " " + title,
      });
    }
  });

  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId) => {
  React.useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));

    headingElements.forEach((element) => {
      element.addEventListener(
        "mouseover",
        function (event) {
          setActiveId(event.target.id);
        },
        false
      );
    });
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = React.useState();
  const { nestedHeadings } = useHeadingsData();
  const setSmarterActiveIdWithScroll = (newActiveId) => {
    const oldelement = document.getElementById(activeId);
    if (oldelement) {
      oldelement.style.color = "";
      debugger;
    }
    const element = document.getElementById(newActiveId);
    element.style.color = "orange";
    element.scrollIntoView({
      behavior: "smooth",
    });
    setActiveId(newActiveId);
  };

  const setSmarterActiveId = (newActiveId) => {
    const oldelement = document.getElementById(activeId);
    if (oldelement) {
      oldelement.style.color = "";
    }
    const element = document.getElementById(newActiveId);
    if (element) {
      element.style.color = "orange";
    }
    setActiveId(newActiveId);
  };
  useIntersectionObserver(setSmarterActiveId);

  return (
    <nav aria-label="Table of contents">
      <Headings
        headings={nestedHeadings}
        activeId={activeId}
        setActiveId={setSmarterActiveIdWithScroll}
      />
    </nav>
  );
};

export default TableOfContents;
