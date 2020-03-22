export const fakeYoutubeData = {
  kind: 'youtube#searchListResponse',
  etag: '"ksCrgYQhtFrXgbHAhi9Fo5t0C2I/uXWb08Z9G31f2YPQbOvunGa1BW0"',
  nextPageToken: 'CAEQAA',
  regionCode: 'US',
  pageInfo: {
    totalResults: 16,
    resultsPerPage: 1,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '"ksCrgYQhtFrXgbHAhi9Fo5t0C2I/mrVYQsUgnrGxgCe3IwXSwoa5HxQ"',
      id: {
        kind: 'youtube#video',
        videoId: '5aMqWLl0gE0',
      },
      snippet: {
        publishedAt: '2020-03-20T02:15:35.000Z',
        channelId: 'UCbVpSIpg8knuWNftRyXaSQQ',
        title: 'FEENY - &quot;Bookends&quot; Official Music Video',
        description:
          'What if... the lyrics were literal? http://feenynj.com/ https://www.betweenthebookends.net/ Follow Feeny: https://www.instagram.com/feenynj/ ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/5aMqWLl0gE0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/5aMqWLl0gE0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/5aMqWLl0gE0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Feeny NJ',
        liveBroadcastContent: 'none',
      },
    },
  ],
};
