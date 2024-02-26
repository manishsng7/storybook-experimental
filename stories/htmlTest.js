import "./button.css";
import test from "../froala/html/test.html";

export const createTestButton = ({}) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(test, "text/html");

  const button = doc.getElementById("testButton");
  console.log({ button });
  button.addEventListener("click", () => alert("clicked"));
  console.log({ html: doc.body.outerHTML });

  return doc.body.outerHTML;
};
