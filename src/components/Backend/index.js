import React from 'react'
import axios from 'axios'
import '..Home.css'

export default class Backend extends React.Component {
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
        const url = 'https://jobs.github.com/positions.json?description=backend&location=United+States'
        const data = await axios.get(url)
        const { data: { articles } } = data
        this.setState({ articles })
    }

    renderItems = () => {
        const { articles } = this.state
        return articles.map((article) => {
            const { title, description } = article
            return (
                <div key={title} className='job-title'>
                    <div className='description'>
                        <h3>{title}</h3>
                        <p>{description}</p>
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