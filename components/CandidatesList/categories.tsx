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
  patronus: {
    value: 'Patronus'
  },
  wizard: {
    value: 'Wizard',
    formatter: ({ item }) => (item.wizard ? 'true' : 'false')
  }
};

export default categories;
