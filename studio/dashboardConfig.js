export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b5e815e5d4a69c37f96195',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u4o8dc3i',
                  apiId: 'affcdb75-813c-43bf-92e4-750f5bc1d4fd'
                },
                {
                  buildHookId: '61b5e815edfd118255e40de0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-h8t9vmpo',
                  apiId: 'be25e324-9256-4c92-b82b-9b1c19760836'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wok/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-h8t9vmpo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
