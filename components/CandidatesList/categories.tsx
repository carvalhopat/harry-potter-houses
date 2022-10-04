import React from 'react';

const categories = {
  name: {
    value: 'Name'
  },
  alternate_names: {
    value: 'Alternative names'
  },
  species: {
    value: 'Species'
  },
  gender: {
    value: 'Gender'
  },
  dateOfBirth: {
    value: 'Date of Birth'
  },
  // wand: {
  //   value: 'Wand',
  //   formatter: ({ item: { wand } }) => {
  //     return <div>{wand.wood}</div>;
  //   }
  // },
  patronus: {
    value: 'Patronus'
  },
  wizard: {
    value: 'Wizard',
    formatter: ({ item }) => (item.wizard ? 'true' : 'false')
  }
};

export default categories;
