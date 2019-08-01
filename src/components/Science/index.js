import React from 'react'
import axios from 'axios'


export default class Science extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        this.fetchNews()
    }

    fetchNews = async () => {
        const url = `https://newsapi.org/v2/everything?q=science&apiKey=${this.props.apiKey}`
        const data = await axios.get(url)
        const { data: { articles } } = data
        this.setState({ articles })
    }

    renderItems = () => {
        const { articles } = this.state
        return articles.map((article) => {
            const { title, urlToImage, description, url } = article
            return (
                <div key={title} className='article'>
                    <img src={urlToImage} alt='img' />
                    <div className='text'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={url} target={url}>Read more</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.renderItems()}</div>
        )
    }
}