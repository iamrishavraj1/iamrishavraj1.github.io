import React, { useEffect } from "react";

const Error = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <>
      <h1>Error</h1>
    </>
  );
};

export default Error;
