import { useEffect, useState } from "react";
import axios from "axios";

export default function useNewsSearch(query, newsUpdate, category, dateFilter) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const accessKey = "b94da5a13195473b15428cdf043efdaf"; // Change the API KEY if news aren't loading

  useEffect(() => {
    setNews([]);
  }, [query, category, dateFilter]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `http://api.mediastack.com/v1/news?access_key=${accessKey}`, // https for 'Premium acc only'
      params: {
        keywords: query,
        language: "en",
        countries: "us, gb, au",
        limit: 9,
        offset: newsUpdate,
        categories: category,
        sort: dateFilter,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setNews((prevNews) => {
          return [
            ...new Set([
              ...prevNews,
              ...res.data.data.map((n) => {
                return {
                  title: n.title,
                  description: n.description,
                  author: n.author,
                  published: n.published_at,
                  image: n.image,
                  url: n.url,
                };
              }),
            ]),
          ];
        });
        setHasMore(res.data.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  }, [query, newsUpdate, category, dateFilter]);

  return { loading, error, news, hasMore };
}
