// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
var faker = require('faker/locale/fr');

module.exports = function (api) {
  api.loadSource(actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const growers = actions.addCollection({
      typeName: 'Growers'
    });

    for (let i = 0; i <= 13; i++) {
      const g = {
        id: i,
        image: `https://source.unsplash.com/${faker.random.number({min:290, max:310})}x${faker.random.number({min:150, max:200})}`,
        name: faker.company.companyName(),
        slug: faker.lorem.slug(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        canShip: faker.random.boolean(),
        canSell: faker.random.boolean()
      }
      console.log('node', i, g);
      growers.addNode(g)
    }

  
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allGrowers {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    data.allGrowers.edges.forEach(({ node }) => {
      createPage({
        path: `/grower/${node.slug}`,
        component: './src/templates/Grower.vue',
        context: {
          id: node.id
        }
      })
    })

  })
}
