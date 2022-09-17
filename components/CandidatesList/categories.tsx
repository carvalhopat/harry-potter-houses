const categories = {
  name: {
    value: 'Name'
  },
  email: {
    value: 'Email',
    columnWidth: '7%'
  },
  birth_date: {
    value: 'Age',
    isNumberCell: true,
    isFormattedDate: true
  },
  year_of_experience: {
    value: 'Years of experience',
    isNumberCell: true,
    isSortable: true
  },
  position_applied: {
    value: 'Position applied',
    isSortable: true
  },
  application_date: {
    value: 'Date of application',
    isNumberCell: true,
    isSortable: true
  },
  status: {
    value: 'Status',
    isBadge: true
  }
};

export default categories;
