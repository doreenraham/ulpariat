const loadNextPage = async (network) => {
  try {
    // Assuming 'network' is a URL or API endpoint for simplicity
    const response = await fetch(network);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // Process the data here
    console.log(data);
    return data; // Return data for further processing
  } catch (error) {
    console.error('Error loading the next page:', error);
  }
};
