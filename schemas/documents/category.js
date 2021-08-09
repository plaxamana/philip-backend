export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      description: 'If it\'s using technologies, use "dev"',
    },
    {
      name: 'classNames',
      title: 'Tailwind (classNames)',
      type: 'string',
      description: 'Tailwind CSS class names. (i.e. text-blue-900, bg-blue-200)'
    },
  ],
};
