const SearchImages = async (input) => {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${input}`, {
    headers: {
      "Authorization": "AZprDpV9tT2OGZaZ8nrsUJmHpt1bdC8VpkhTDP9hJrm9OQ17PeIf3SI9"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => data)

  return response;
}

export default SearchImages;
