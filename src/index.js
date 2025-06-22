const getMetaData = (event) => {
  const {
    body,
    tag_name,
    name,
    created_at,
    published_at,
    author: { login },
  } = event;

  return {
    body,
    tag_name,
    name,
    created_at,
    published_at,
    author: { login },
  };
};

export { getMetaData };
