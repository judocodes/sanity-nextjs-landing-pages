export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fc78bef7462ce919868fd23',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xqgnurhc',
                  apiId: 'f7e779c8-accd-4986-8cce-a700a97afaa4'
                },
                {
                  buildHookId: '5fc78beff6603f7b20846780',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i1kstrus',
                  apiId: '9c580df1-211b-4c6a-a7dd-161bc7ee6c36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/judocodes/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i1kstrus.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
