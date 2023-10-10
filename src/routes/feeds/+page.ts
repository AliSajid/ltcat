import type { PageLoad } from './$types';

export const load = (async () => {
  return {
    feeds: [
      {
        id: '1',
        title: 'Feed 1',
        image: 'https://placehold.co/400',
        description: 'Feed 1 description',
      },
      {
        id: '2',
        title: 'Feed 2',
        image: 'https://placehold.co/400',
        description: 'Feed 2 description',
      },
      {
        id: '3',
        title: 'Feed 3',
        image: 'https://placehold.co/400',
        description: 'Feed 3 description',
      },
      {
        id: '4',
        title: 'Feed 4',
        image: 'https://placehold.co/400',
        description: 'Feed 4 description',
      },
      {
        id: '5',
        title: 'Feed 5',
        image: 'https://placehold.co/400',
        description: 'Feed 5 description',
      },
    ],
  };
}) satisfies PageLoad;
