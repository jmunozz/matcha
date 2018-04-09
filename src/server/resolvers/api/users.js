export const getUser = (args) => {
  const { id } = args;
  return {
    id,
    name: `default_${id}`
  };
};

export const getUsers = () => [
  getUser({ id: 1 }), getUser({ id: 2 })
];

