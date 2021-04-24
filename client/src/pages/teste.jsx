import React, { useState } from "react";

const Teste = () => {
  const [greeting, setGreeting] = useState("Hello Function Component!");

  const handleChange = (event) => setGreeting(event.target.value);

  return <Headline headline={greeting} onChangeHeadline={handleChange} />;
};

const Headline = ({ headline, onChangeHeadline }) => (
  <div>
    <h1>{headline}</h1>

    <input type="text" value={headline} onChange={onChangeHeadline} />
  </div>
);

export default Teste;
