import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    images: [],
    isLoading: false,
    isError: false,
    isEnd: false,
  };

  componentDidUpdate = async (_prevProps, prevState) => {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      await this.fetchImages(search, page);
    }
  };

  fetchImages = async (search, page) => {
    // implement this code
  };

  handleSubmit = e => {
    e.preventDefault();
    const newSearch = e.target.search.value.trim().toLowerCase();
    this.setState({ search: newSearch, page: 1, images: [] });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, isError, isEnd } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* Render ImageGallery Component when there is atleast one match of images */}
        {images.length >= 1 && <ImageGallery photos={images} />}

        {/* Render Button Component when there is atleast a second page or more and it's not the end of page */}
        {images.length >= 2 && !isEnd && <Button onClick={this.handleClick} />}
        {isLoading && <h2>Loading......</h2>}
        {isError && alert('Oops, something went wrong! Reload this page!')}
      </div>
    );
  }
}
