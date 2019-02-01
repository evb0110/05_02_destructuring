import makeAttackArray from './destructure';

test('input object has attacks with and without description', () => {
  const input = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 7,
        name: 'Двойной вы',
        icon: 'http://...',
      },
      {
        id: 4,
        name: 'dsadf вы',
        icon: 'http://...',
      },
    ],
  };

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 7,
      description: 'Описание недоступно',
      name: 'Двойной вы',
      icon: 'http://...',
    },
    {
      id: 4,
      description: 'Описание недоступно',
      name: 'dsadf вы',
      icon: 'http://...',
    },
  ];

  const output = makeAttackArray(input);

  expect(output).toEqual(expected);
});
