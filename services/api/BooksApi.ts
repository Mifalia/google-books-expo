export async function searchBooks(q: string) {
  let searchResult = [];
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}`
    );
    const data = await response.json();
    searchResult = data.items;
    return searchResult;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

export async function getBookDetails(id: any) {
  let bookDetails = null;
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${encodeURIComponent(id)}`
    );
    const data = await response.json();
    bookDetails = data;
    console.log({ bookDetails });
    return bookDetails;
  } catch (error) {
    console.error("Error fetching book details:", error);
    return null;
  }
}
