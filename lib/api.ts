const WORK_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  date
  order
  websiteLink
  sourceLink
  blurb
  coverImage {
    title
  }
  stack
  order
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // next: { tags: ['Work'] },
    },
  ).then((response) => response.json());
}

function extractWork(fetchResponse: any): any {
  return fetchResponse?.data?.workItemCollection?.items?.[0];
}

function extractWorkEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.workItemCollection?.items;
}

export async function getPreviewWorkBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      workItemCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractWork(entry);
}

export async function getAllWork(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      workItemCollection(where: { slug_exists: true }, order: order_ASC, preview: ${
        isDraftMode ? 'true' : 'false'
      }) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return extractWorkEntries(entries);
}

export async function getWorkAndMoreWork(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      workItemCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      workItemCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    work: extractWork(entry),
    moreWork: extractWorkEntries(entries),
  };
}
