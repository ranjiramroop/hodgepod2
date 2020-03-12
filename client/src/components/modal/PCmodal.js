import React from 'react';
import Modal from 'react-responsive-modal';
import PCDetail from '../PCDetail';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    const { podcast } = this.props;

    console.log(podcast, "here with podcast")
    return (
      <div>
        <button onClick={this.onOpenModal}> More Info</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <PCDetail
           Title={podcast.title_original} 
           Description={podcast.description_original} 
           Link={podcast.link} 
          />
        </Modal>
        <button> Save </button>
      </div>
    );
  }
}
 
