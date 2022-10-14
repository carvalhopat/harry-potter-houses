import React from 'react';
import Image from 'next/image';

const categories = {
  name: {
    value: 'Name',
    isSortable: true
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
    value: 'Date of Birth',
    isSortable: true
  },
  patronus: {
    value: 'Patronus'
  },
  alive: {
    value: 'Alive',
    formatter: ({ item }) =>
      item.alive ? (
        <Image src="/true-icon.svg" width="12" height="12" alt="True icon" />
      ) : (
        <Image src="/false-icon.svg" width="12" height="12" alt="False icon" />
      )
  }
};

export default categories;
