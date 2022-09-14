const Identifiants = () => {
  return {
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET_ID,
  };
};

export { Identifiants };
