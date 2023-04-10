import React from "react";

const Blog = () => {
  return (
    <div className="mt-24 bg-blue-200 p-8 my-container rounded mb-10">
      <h1 className="text-4xl text-bold text-center mb-10">Question</h1>
      <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
        <h1 className="text-2xl font-bold mb-2">
          1. When should i use context API?
        </h1>
        <p className="text-gray-600">
          <span className="font-bold">Ans: </span>The React Context API should
          be used when you have data or state that needs to be accessible by
          multiple components across the component tree, without having to pass
          props down manually. It's especially useful for global settings or
          themes, authentication, or any data that needs to be shared across
          components. However, it's important to note that overusing context can
          make your code more complex and harder to debug, so it's best to use
          it judiciously and in cases where it simplifies your code.
        </p>
      </article>
      <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
        <h1 className="text-2xl font-bold mb-2">2. What is custom hook?</h1>
        <p className="text-gray-600">
          <span className="font-bold">Ans: </span>A custom hook is a reusable
          function in React that encapsulates logic or behavior, enabling you to
          extract component logic into reusable functions to simplify and make
          it more reusable.
        </p>
      </article>
      <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
        <h1 className="text-2xl font-bold mb-2">
          3. What is useRef() and what is it used for?
        </h1>
        <p className="text-gray-600">
          <span className="font-bold">Ans: </span>useRef() is a built-in hook in
          React that returns a mutable object with a current property, which can
          be used to hold a value or reference to a DOM element. useRef() is
          often used to access DOM nodes, manage focus, or store previous values
          of a state variable, without triggering a re-render of the component.
          It's also commonly used in combination with useEffect() to manage
          side-effects in a component.
        </p>
      </article>
      <article className="bg-blue-100 p-5 rounded-xl shadow-2xl mb-5">
        <h1 className="text-2xl font-bold mb-2">
          4. What is useMemo() and what is it used for?
        </h1>
        <p className="text-gray-600">
          <span className="font-bold">Ans: </span>useMemo() is a built-in hook
          in React that allows you to memoize a function's output, caching it
          for later use if the input parameters remain the same. useMemo() is
          often used to optimize performance by reducing the number of expensive
          computations or re-renders. It's particularly useful for optimizing
          expensive calculations, filtering, or sorting of large arrays, or any
          other function that takes a while to execute.
        </p>
      </article>
    </div>
  );
};

export default Blog;
