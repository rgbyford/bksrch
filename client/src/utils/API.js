import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the books api for
export default {
  getBooks: function(query) {
    console.log ("getBooks");
    return axios.get("/api/books", { params: { q: query } });
  }
};
