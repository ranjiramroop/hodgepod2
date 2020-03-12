import React from 'react';
import Modal from 'react-responsive-modal';
import MovieDetail from '../OMDB/MovieDetail';
import omdbapi from "../../utils/OMDBAPI";
import "./modal.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
    searchData: {},
  };

  searchQuery = async () => {
    const id = this.props.movie.imdbID
    console.log(id);

    omdbapi.movieInfo(id).then(result => {
      console.log("ID RESULTS", result.data)
      this.setState({ searchData: result.data })
    })
  };

  componentDidMount() {
    this.searchQuery();
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    const { movie } = this.props;

    console.log(movie, "this is our movie")
    return (
      <div>
        <button class ="modalbtn" onClick={this.onOpenModal}>More info</button>
        <Modal open={open} onClose={this.onCloseModal} center>
        <MovieDetail
                  title={movie.Title}
                  director={this.state.searchData.Director}
                  genre={this.state.searchData.Genre}
                  plot={this.state.searchData.Plot}
                />
        </Modal>
        {/* <button onClick={() => console.log(this.state.searchData)}>Test test</button> */}
        <button class ="modalbtn" > Save </button>
      </div>
    );
  }
}
 
