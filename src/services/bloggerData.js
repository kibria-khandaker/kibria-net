import blogConfig from "@/data/blogConfig";


export async function getBlogPosts() {
  const apiKey = process.env.BLOGGER_API_KEY;

  if (!apiKey) {
    console.warn("BLOGGER_API_KEY is missing.");

    return [];
  }


  const url =
    `https://www.googleapis.com/blogger/v3/blogs/${blogConfig.blogId}/posts` +
    `?key=${apiKey}&maxResults=100&fetchBodies=true`;


  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });


if (!response.ok) {
  const errorDetails = await response.text();

  console.error(
    "Blogger API error:",
    response.status,
    errorDetails
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