export function getBlogSlug(post) {
  if (!post?.url) {
    return "";
  }

  try {
    const pathname = new URL(post.url).pathname;

    const lastPart = pathname
      .split("/")
      .filter(Boolean)
      .pop();

    return lastPart?.replace(/\.html$/, "") || "";
  } catch {
    return "";
  }
}


export function stripHtml(html = "") {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


export function formatBlogDate(date) {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}


export function getBlogImage(post) {
  if (
    Array.isArray(post?.images) &&
    post.images[0]?.url
  ) {
    return post.images[0].url;
  }


  const match =
    post?.content?.match(
      /<img[^>]+src=["']([^"']+)["']/i
    );


  return match?.[1] || null;
}