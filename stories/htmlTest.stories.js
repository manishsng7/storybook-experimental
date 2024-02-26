import "../froala/js/test.js";
// import { createTestButton } from "./htmlTest.js";
import test from "../froala/html/test.html";

export default {
  title: "Example / TestButton",
  argTypes: { onclick: { action: "clicked" } },
  parameters: {
    actions: {
      handles: ["mouseenter", "click", "focusin", "focusout"],
    },
  },
};

export const TestButton = () => test;

// export const TestButton = () => {
//   // Create a DOM parser to parse the HTML string
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(test, "text/html");

//   // Find the button with id 'testButton' in the parsed HTML and add the click event listener

//   const button = doc.getElementById("testButton");
//   console.log({ button });
//   button.addEventListener("click", () => alert("clicked"));
//   console.log({ doc });

//   // Return the outer HTML of the body, which now includes the button with the event listener
//   return doc.body.outerHTML;
// };

// export default {
//   title: "Example/TestButton",
//   tags: ["autodocs"],
//   render: ({ label, ...args }) => {
//     // You can either use a function to create DOM elements or use a plain html string!
//     // return `<div>${label}</div>`;
//     return createTestButton({ label, ...args });
//   },
//   argTypes: {
//     backgroundColor: { control: "color" },
//     label: { control: "text" },
//     onClick: { action: "onClick" },
//     primary: { control: "boolean" },
//     size: {
//       control: { type: "select" },
//       options: ["small", "medium", "large"],
//     },
//   },
// };

// export const Primary = {
//   args: {
//     primary: true,
//     label: "Button",
//     // onClick: handleClick,
//   },
// };
