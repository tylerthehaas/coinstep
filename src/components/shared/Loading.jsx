import React from "react";

type Props = { isLoading: Boolean, error: ?Error };

const Loading = ({ isLoading, error }: Props) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    console.log(error);
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

export default Loading;
