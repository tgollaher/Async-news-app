import React from 'react'
import axios from 'axios'
import '../../images/news.png'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      articles: [],
      isLoaded: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  
    this.getData();
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  getData = async () => {
    await this.setState({articles:[]})
    try {
      const apiUrl = `https://newsapi.org/v2/everything?q=${this.state.userInput}&apiKey=${this.props.apiKey}`;
      const apiResponse = await axios.get(apiUrl);
      const searchResult = apiResponse.data.articles
      if (apiResponse.status === 200) {
        return searchResult.forEach(source => {
          this.setState({ articles: [...this.state.articles, source] })
        })
      }
    } catch (error) {
      
    }

  }
  render() {
    
    const articles = this.state.articles.map(article => 
      <div className='rendered-text' key={article.publishedAt}>
        <p>Title: {article.title}</p>
        <p>Author:  {article.author}</p>
        <p>Description:  {article.description}</p>
        <img src={article.urlToImage} alt='img' style={{    height: '350px',
    width: '500px'}} />
        <div>
          <a href={article.url} target={article.url}>Read more</a>
        </div>
      </div>
    )
    return (
      <body>
        
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Search for..."
            onChange={this.handleChange}
          />
          {articles}
          {this.state.articles ==! [] ? <p className='search-text'>Type in your favorite topic!</p>:false}
        </form>
        <div className='news-logos'>
         <img src={require('../../images/news.png')} alt="news logos"/>
          
        </div>
      
      </body>

    )
  }
}