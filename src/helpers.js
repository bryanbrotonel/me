// Fetches data from Contentful with query
export function fetchContentfulData(query, collection, setPage) {
  window
    .fetch('https://graphql.contentful.com/content/v1/spaces/yg6bvazmunnt/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Auth request
        Authorization:
          'Bearer a0257b82968ffe4ec3d59ee2087eea1f82eabd5b0a2c50e9737aeadceb95d24d',
      },
      // Send GraphQL query
      body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      }

      console.log(
        data.asset != null
          ? data.asset
          : data[collection].items.length == 1
          ? data[collection].items[0]
          : data[collection].items
      );

      setPage(
        data.asset != null
          ? data.asset
          : data[collection].items.length == 1
          ? data[collection].items[0]
          : data[collection].items
      );
    });
}
