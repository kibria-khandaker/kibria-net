export async function getBlogPosts() {
  const apiKey = process.env.BLOGGER_API_KEY?.trim();
  const blogId = process.env.BLOGGER_SITE_ID?.trim();

  if (!apiKey || !blogId) {
    console.error("Blogger API configuration is missing.");
    return [];
  }

  const params = new URLSearchParams({
    key: apiKey,
    maxResults: "100",
    fetchBodies: "true",
  });

  const url =
    `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?${params.toString()}`;

  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });

    if (!response.ok) {
      const details = await response.text();

      console.error(
        "Blogger API error:",
        response.status,
        details
      );

      throw new Error(
        `Blogger data loading failed: ${response.status}`
      );
    }

    const data = await response.json();

    return Array.isArray(data.items)
      ? data.items
      : [];

  } catch (error) {
    console.error("Blogger loading error:", error);
    return [];
  }
}