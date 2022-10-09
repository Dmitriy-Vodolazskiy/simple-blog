export default {
  name: 'post',
  type: 'document',
  title: 'POst',
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      group: 'meta',
      validation: Rule => Rule.required(),
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published Date',
      group: 'content',
      validation: Rule => Rule.required(),
    },
     {
      name: 'image',
      title: 'image',
      type: 'image',
       group: 'content',
       validation: Rule => Rule.required(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ],
      validation: Rule => Rule.required(),
     },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
      validation: Rule => Rule.required(),
    },

    {
      title: 'Description',
      name: 'description',
      type: 'text',
      group: 'content',
      validation: Rule => Rule.required(),
    },

    {
      name: 'body',
      title: 'Body content',
      type: 'array',
      group: 'content',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
        }
      ]
    }
  ]
}