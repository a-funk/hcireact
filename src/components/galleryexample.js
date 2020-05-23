import React from 'react';
import axios from 'axios';

const movieList = [
  'tt3896198',
  'tt0369281',
  'tt0092368',
  'tt0111161',
  'tt0119654',
  'tt0457430',
  'tt0096438',
  'tt0382625',
];

let imgUrls = [];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentIndex: null, movies: [], data: 0 };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    imgUrls = [];
    for (let e of movieList) {
      axios
        .get(`http://www.omdbapi.com/?i=` + e + `&apikey=885fb928`)
        .then((res) => {
          const movies = res.data;
          imgUrls.push(movies.Poster);
        });
    }
    this.state.data = 1;
  }

  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} key={src} />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    console.log('movie list: ', this.state.movies);
    console.log('image list: ', imgUrls);
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          {...console.log('hi', imgUrls, imgUrls.length)}
          src={imgUrls[this.state.currentIndex]}
          {...console.log('hi2', this.state.currentIndex)}
          {...console.log('hi2', imgUrls[this.state.currentIndex])}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      src,
    } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal">
          <div className="modal-body">
            <a
              href="#"
              className="modal-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
      </div>
    );
  }
}
