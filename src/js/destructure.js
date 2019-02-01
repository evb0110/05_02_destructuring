const makeAttackArray = obj => (
  obj.special.map((elem) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = elem;
    return {
      id, name, description, icon,
    };
  })
);

export default makeAttackArray;
