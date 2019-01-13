const router = require("express").Router();

router.get("/api/books", (req, res) => {
  console.log("get books");
  const results = makeApiCall();
  console.log(results);
});

module.exports = router;

//const axios = require("axios");
//const gapi = require('googleapis');
//API key
// AIzaSyCSXufWPucVlzp25Wc3qacrOitB83Dt6MM



/*   axios
.get("http://www.recipepuppy.com/api/", {
        params: req.query
      })
      .then(({
        data: {
          results
        }
      }) => res.json(results))
      .catch(err => res.status(422).json(err));
    });
    */
   
   
  //  function initClient () {
  //    console.log("iC");
     
  //    var books = require('google-books-search');
  //    console.log("books: ", books);
  //    books.search('Professional JavaScript for Web Developers', function (error, results) {
  //      if (!error) {
  //        console.log(results);
  //       } else {
  //         console.log(error);
  //       }
  //     });
  //   }
    
    
    async function makeApiCall () {
      var books = require('google-books-search');
      console.log("books: ", books);
      books.search('Professional JavaScript for Web Developers', function (error, results) {
        if (!error) {
          console.log(results);
         } else {
           console.log(error);
         }
       });
    //    let response;
    //   try {
    //     response = await gapi.client.volumes.list({
    //     q: "harry potter",
    //   });
    // } catch (err) {
    //   console.log(err); // TypeError: failed to fetch
    // }
    // console.log("Book: ", response.items[0].title);
    return (results);
  }
  
  module.exports = {makeApiCall};