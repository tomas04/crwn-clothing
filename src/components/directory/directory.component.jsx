import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import SHOP_DATA from "./mock_data";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SHOP_DATA
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }

}

export default Directory;
