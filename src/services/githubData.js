export async function getJsonData(url) {
  if (!url) {
    return [];
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Data loading failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("JSON data loading error:", error);

    return [];
  }
}