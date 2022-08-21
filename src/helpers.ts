import * as Contentful from 'contentful';
// Fetches data from Contentful with query

export async function fetchContentfulData(query: string, collection: string) {
  return await fetch(
    'https://graphql.contentful.com/content/v1/spaces/yg6bvazmunnt/',
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // Auth request
        Authorization:
          'Bearer a0257b82968ffe4ec3d59ee2087eea1f82eabd5b0a2c50e9737aeadceb95d24d',
      },
      body: JSON.stringify({ query }),
    }
  )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }

      return data.asset != null
        ? (data.asset as Contentful.Asset)
        : data[collection].items.length == 1
        ? (data[collection].items[0] as Contentful.Entry<any>)
        : (data[collection].items as Contentful.EntryCollection<any>);
    });
}
