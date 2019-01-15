import React from 'react';
import Header from '../Header';
import AddTags from './AddTags';
import DisplayTagsList from './DisplayTagsList';

class Main extends React.Component {
  onSubmitTags = (name, type) => {
    //api call here
  };
  render() {
    return (
      <div className="container tags-container">
        <Header />
        <AddTags onSubmitTags={this.onSubmitTags} />
        <DisplayTagsList />
      </div>
    );
  }
}

export default Main;
