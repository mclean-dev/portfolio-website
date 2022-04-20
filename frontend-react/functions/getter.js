require('dotenv').config()
const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source).url();

exports.handler = async function (event, context) {
    const query = event.queryStringParameters.query;
    const data = await client.fetch(query).then((results) => {
        const allData = results.map((item) => {
            const output = item
            const image = item.imgUrl ? item.imgUrl.asset._ref : null;
            if (image) {
                output.image = urlFor(item.imgUrl)
            }
            return output;
        })
        return allData;
    })

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }

}
  