import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import axios from 'axios';
import Lightbox from 'react-images';

const movieList = ['tt3896198', 'tt0369281'];

const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

export default class GalleryTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    for (let e of movieList) {
      axios
        .get(`http://www.omdbapi.com/?i=` + e + `&apikey=885fb928`)
        .then((res) => {
          const movies = res.data;
          this.state.movies.push({
            src: movies.Poster,
          });
        });
    }
    console.log('movie list: ', this.state.movies);
  }

  render() {
    console.log('movie list: ', this.state.movies);
    console.log('image list: ', IMAGES);

    return (
      //       <ul>
      //         {this.state.persons.map((movie) => (
      //           <li>{movie.name}</li>
      //         ))}
      //       </ul>
      <div>
        {IMAGES.map(({ caption, source }, j) => (
          <img
            alt={caption}
            src={source.thumbnail}
            css={{
              cursor: 'pointer',
              position: 'absolute',
              maxWidth: '100%',
            }}
          />
        ))}
        {/* <Lightbox
          views={IMAGES}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}
      </div>
    );
  }
}
