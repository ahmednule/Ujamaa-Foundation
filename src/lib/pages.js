const pages = [
  { label: 'HOME', path: '/' },
  { label: 'WHO ARE WE', path: '/who-we-are' },
  { 
    label: 'OUR PROGRAMS', 
    path: '/our-programs',
    subMenu: [
      {
        label: 'Peace Building And Community cohestion',
        path: '/our-programs/peace-building-and-community-cohestion'
      },
      {
        label: 'Education And Empowerment',
        path: '/our-programs/education-and-empowerment'
      },
      {
        label: 'Environment Restoration',
        path: '/our-programs/environment-restoration',
        fullName: 'Environment Restoration and Natural Resource Management'
      },
      {
        label: 'Training And Capacity',
        path: '/our-programs/training-and-capacity',
        fullName: 'Training and Capacity Building'
      }
    ]
  },
  { label: 'LATEST ACTIVITIES', path: '/latest-activities' },
  { label: 'CONTACT US', path: '/contact-us' },
];

export default pages;