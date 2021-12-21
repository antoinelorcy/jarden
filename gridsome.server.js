// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
var faker = require('faker/locale/fr');
const axios = require('axios')
const strapiHost = 'http://localhost:1337';

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    // const growers = actions.addCollection({
    //   typeName: 'Growers'
    // });

    // for (let i = 0; i <= 13; i++) {
    //   const g = {
    //     id: i,
    //     image: `https://source.unsplash.com/${faker.random.number({min:290, max:310})}x${faker.random.number({min:150, max:200})}`,
    //     name: faker.company.companyName(),
    //     slug: faker.lorem.slug(),
    //     address: faker.address.streetAddress(),
    //     city: faker.address.city(),
    //     canShip: faker.random.boolean(),
    //     canSell: faker.random.boolean()
    //   }
    //   console.log('node', i, g);
    //   growers.addNode(g)
    // }

    // const { data } = await axios.get(strapiHost + '/growers')

    // const gCollection = actions.addCollection({
    //   typeName: 'Growers'
    // })

    // for (const item of data) {
    //   gCollection.addNode({
    //     ...item,
    //     thumbnail: getThumbnailUrl(item.thumbnail),
    //     canDeliver: item.canDeliver || false,
    //     canSell: item.canSell || false,
    //     slug: slugify(item.name),
    //     adress: item.adress || ''
    //   })
    // }

  
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    // const { data } = await graphql(`{
    //   allStrapiGrowers {
    //     edges {
    //       node {
    //         id
    //         name
    //       }
    //     }
    //   }
    // }`)

    // data.allGrowers.edges.forEach(({ node }) => {
    //   createPage({
    //     path: `/grower/${node.slug}`,
    //     component: './src/templates/Grower.vue',
    //     context: {
    //       id: node.id
    //     }
    //   })
    // })

  })
}

function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

function getThumbnailUrl (imageObject) {
  if (imageObject && imageObject.formats) {
    return imageObject.formats.small.url;
  }

  return '';
}