# Async-News

## Async Tech News

### Description:

This app will allow you to search through any article from hundreds of journals and newspapers for your favorite tech related articles. There are some basic tech filters available in the header and if you wish to search any other topic, you can do so in the search function and go directly to the original source link if you choose!

##### What you can do:
1. Enjoy pre-filtered tech, science, entertainment or gadget related news articles 
2. Use the search function to look for recent articles of your fancy

### Software Used:
- React, JavaScript, HTML, CSS, Axios

#### Api:
https://newsapi.org

#### HTTP method:
-GET

#### Code Snippet:

```  const apiResponse = await axios.get(apiUrl);
      const searchResult = apiResponse.data.articles
      if (apiResponse.status === 200) {
        return searchResult.forEach(source => {
          this.setState({ articles: [...this.state.articles, source] })
        })
      } ```
