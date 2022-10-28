const Token = () => {
  const myToken =
    Math.random().toString(16).substr(2) + Math.random().toString(16);

  return myToken;
};

export default Token;
