import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { getAPI } from '../pixabay-api';
import toast, { Toaster } from 'react-hot-toast';

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
    try {
      this.setState({ isLoading: true });
      // fetch data from API

      const fetchedImages = await getAPI(search, page);

      const { hits, totalHits } = fetchedImages;

      console.log(hits, totalHits);

      // Display an error message, if there is no match with the search
      if (hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      // Display a success message if it's the first page
      if (page === 1) {
        toast.success(`Hooray! We found ${totalHits} images!`);
      }

      // Display a message if page is already at the end of data (12 = per_page based on API call)
      if (page * 12 >= totalHits) {
        this.setState({ isEnd: true });
        toast("We're sorry, but you've reached the end of search results.", {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      }
      // Update the state with the new images
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const { search } = this.state;
    const newSearch = e.target.search.value.trim().toLowerCase();

    // if new search string is different from the current search string saved in state
    if (newSearch !== search) {
      this.setState({ search: newSearch, page: 1, images: [] });
    }
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

        {/* Render Button Component when there is atleast a page or more and it's not the end of page */}
        {images.length >= 1 && !isEnd && <Button onClick={this.handleClick} />}
        {isLoading && <h2>Loading......</h2>}
        {isError &&
          toast.error('Oops, something went wrong! Reload this page!')}

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}
