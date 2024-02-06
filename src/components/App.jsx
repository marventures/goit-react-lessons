import { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { getAPI } from '../pixabay-api';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (search === '') return;

    (async () => {
      await fetchImages(search, page);
    })();

    // cleanup function|| componentWillUnmount() || optional
    // return () => {};

    // if dependency array is empty, useEffect hook will be called on initial mount, componentDidMount() equivalent
    // if dependency array has values, useEffect hook will be called if the states are changed in it, componentDidUpdate() equivalent;
    // if we omit dependency array, useEffect hook will be called every render, bad practice! (app may crash)
  }, [search, page]);

  const fetchImages = async (search, page) => {
    try {
      setIsLoading(true);
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
        setIsEnd(true);
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
      setImages(prevState => [...prevState, ...hits]);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newSearch = e.target.search.value.trim().toLowerCase();

    // if new search string is different from the current search string saved in state
    if (newSearch !== search) {
      setSearch(newSearch);
      setPage(1);
      setImages([]);
    }
  };

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleSubmit} />
      {/* Render ImageGallery Component when there is atleast one match of images */}
      {images.length >= 1 && <ImageGallery photos={images} />}

      {/* Render Button Component when there is atleast a page or more and it's not the end of page */}
      {images.length >= 1 && !isEnd && <Button onClick={handleClick} />}
      {isLoading && <h2>Loading......</h2>}
      {isError && toast.error('Oops, something went wrong! Reload this page!')}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
