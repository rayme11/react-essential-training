import React from 'react';
import ReactDOM from 'react-dom';


let bookList = [
  { "title": "Angelas Ashes", "Author": "Frank Mckurt", "pages": 399 },
  { "title": "MJ", "Author": "Frank Mckurt", "pages": 245 },
  { "title": "Pippen", "Author": "Frank Mckurt", "pages": 245 },
  { "title": "Kerr", "Author": "Frank Mckurt", "pages": 344 },
  { "title": "NBA", "Author": "Frank Mckurt", "pages": 345 },
]

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
      <p>Free bookmark today: {freeBookmark ? 'yes' : 'no!'}</p>
    </section>
  )

}

const Hiring = () => <div><p>The library is hiring....</p></div>;
const NotHiring = () => <div><p>The library is  not hiring....</p></div>;

class Library extends React.Component {

  static defaultProps = {
    books: [
      { "title": "Tahoe Tales", "author": "MJ", "pages": 1000 }
    ]
  }
  state = {
    open: false,
    freeBookmark: true,
    data: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }))
  }

  componentDidUpdate() {
    console.log("The component updated!!")
  }


  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {
    const { books } = this.props
    return (
      <div>
        {this.state.Hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "loading...." : <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              )
            })}
          </div>
        }
        <h1>The library is  {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => <Book key={i} title={book.title} author={book.Author} pages={book.pages} freeBookmark={this.state.freeBookmark} />
        )}

      </div>
    )
  }
}




ReactDOM.render(
  <Library books={bookList} />
  ,
  document.getElementById('root')
)
