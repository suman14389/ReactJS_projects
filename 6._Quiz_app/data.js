export const data = [
  {
    question: "what is the output of 2 + '3' ?",
    options: ["'23'", "23", "error", "5"],
    answer: 1,
    selectedOption: null,
  },
  {
    question: "what is the value of [] === [] ?",
    options: ["true", "false", "none", "error"],
    answer: 2,
    selectedOption: null,
  },

  {
    question: "What is '2'+true",
    options: ["error", "true", "false", "2true"],
    answer: 4,
    selectedOption: null,
  },

  {
    question: "typeof(NaN)",
    options: ["undefined", "number", "string", "none"],
    answer: 2,
    selectedOption: null,
  },

  {
    question:
      "const result = false || {} || 20 || null; What is the value of result",
    options: ["null", "false", "20", "{}"],
    answer: 3,
    selectedOption: null,
  },

  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["stringify()", "parse()", "convert()", "toString()"],
    answer: 1,
    selectedOption: null,
  },

  {
    question: "How to stop an interval timer in Javascript?",
    options: ["clearTimer", "intervalOver", "clearInterval", "stopInterval"],
    answer: 3,
    selectedOption: null,
  },

  {
    question: "What does … operator do in JS?",
    options: [
      "No operation exists",
      "used to spread iterable to individual elements",
      "combines individual elements to array",
      "error",
    ],
    answer: 2,
    selectedOption: null,
  },

  {
    question: "What does the Javascript “debugger” statement do?",
    options: [
      "debug all the errors during run time",
      "debugs error in the current statement if any",
      "removes console.logs",
      "acts as breakpoint to the program",
    ],
    answer: 4,
    selectedOption: null,
  },
  {
    question: "What does the 'toLocateString()' method do in JS?",
    options: [
      "returns a localised string representation of object",
      "returns a parsed string",
      "returns an local object",
      "none",
    ],
    answer: 1,
    selectedOption: null,
  },
];
