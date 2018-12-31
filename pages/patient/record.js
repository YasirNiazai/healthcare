import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { Grid, Segment } from "semantic-ui-react";

class Record extends Component {
  state = {
    ipfs: "",
    pageNumber: 1,
    numPages: null
  };
  static async getInitialProps(props) {
    const hash = props.query.hash;
    return { hash };
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div style={{ backgroundColor: "#696969" }}>
        <h1>Patient Record</h1>

        <h2>hash is {this.props.hash}</h2>
        <div style={{ marginLeft: 450 }}>
          <Document
            file={`https://ipfs.io/ipfs/${this.props.hash}`}
            onLoadSuccess={this.onDocumentLoad}
          >
            <div style={{ color: "white", textAlign: "center" }}>
              <p>
                <Page pageNumber={pageNumber} /> page {pageNumber} of {numPages}
              </p>
              <button
                onClick={() =>
                  this.setState(prevState => ({
                    pageNumber: prevState.pageNumbAer + 1
                  }))
                }
              >
                Next page
              </button>
            </div>
          </Document>
        </div>
      </div>
    );
  }
}
export default Record;
