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
                  buildHookId: '5e125e8ec61b63bb2ec028d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-of8th93g',
                  apiId: 'ec7f7fbb-aa5f-46f3-b1fc-fb94bb737cc7'
                },
                {
                  buildHookId: '5e125e8ed68ba230d9eee8ee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jxrd81xv',
                  apiId: 'e4ac9561-44bf-4f61-95fe-4a4a6f051f97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pulber/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jxrd81xv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
