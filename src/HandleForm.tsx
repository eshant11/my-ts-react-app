import React, { Component } from "react";

class HandleForm extends Component<{}, { userName: string; comment: string,language:string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      comment: "",
      language:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ userName: e.target.value });
    console.log(this.state.userName);
  }
  handleComment(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment);
  };
  handleSelection(e:React.ChangeEvent<HTMLSelectElement>){
    this.setState(({language:e.target.value}),()=>{console.log(this.state.language);
    })
  }
  handleFormSubmit(e:React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.state.userName,this.state.comment,this.state.language);
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="input"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <label>Comments</label>
          <textarea
            name="textarea"
            id="comment"
            value={this.state.comment}
            onChange={this.handleComment}
            rows={5}
            cols={40}
          />
          <select name="select" value={this.state.language} onChange={this.handleSelection} id="select">
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <button type="submit">SUBMIT</button>        </form>
      </div>
    );
  }
}

export default HandleForm;
