const pages = [
  { label: 'HOME', path: '/' },
  { label: 'WHO ARE WE', path: '/who-we-are' },
  { 
    label: 'OUR PROGRAMS', 
    path: '/our-programs',
    subMenu: [
      {
        label: 'Peace Building',
        path: '/our-programs/peace-building'
      },
      {
        label: 'Education Empowerment',
        path: '/our-programs/education-empowerment'
      },
      {
        label: 'Environment Restoration',
        path: '/our-programs/environment-restoration',
      },
      {
        label: 'Training And Capacity',
        path: '/our-programs/training-capacity',
      }
    ]
  },
  { label: 'LATEST ACTIVITIES', path: '/latest-activities' },
  { label: 'CONTACT US', path: '/contact-us' },
];

export default pages;