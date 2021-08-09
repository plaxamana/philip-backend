export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'previewImage',
      title: 'Preview image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'categories',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'liveSite',
      title: 'Live Site',
      type: 'string',
      description: 'Paste live site url here'
    },
    {
      name: 'codeRepo',
      title: 'Github Repo',
      type: 'string',
      description: 'Paste the github repo here'
    },
    {
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      description: 'If is featured, show on homepage.'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'previewImage',
    },
  },
};
