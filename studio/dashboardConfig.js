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
                  buildHookId: '5ebc0d1febdb894e43f6c511',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mvt6aoif',
                  apiId: '36106047-b8ca-4a7c-9a6b-9d59320a6989'
                },
                {
                  buildHookId: '5ebc0d1f938b7bf4cc376bc9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mo3p6bh9',
                  apiId: '235341c6-328a-4380-964e-48727b0795c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moeehajj/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mo3p6bh9.netlify.app', category: 'apps'}
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
