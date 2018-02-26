import React from "react";
import Header from "./Header";

require("./index.scss");

export default class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          {/*MainBody*/}
        </div>
      </div>


    );
  }
}
