export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d5e2a3597e9e886409e8a0a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z8tjda7o',
                  apiId: 'dafedc7c-9bda-4d27-9ffa-b80d2fb5c4f3'
                },
                {
                  buildHookId: '5d5e2a35408efd18c0b4f10c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vbrmeoig',
                  apiId: '30e98032-bc18-4a8a-a13f-045f73e15cf1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mykindofscum/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vbrmeoig.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
