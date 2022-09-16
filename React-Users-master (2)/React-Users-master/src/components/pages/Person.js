const { Component } = React;

export class Person extends Component{

  constructor(props) {
    super();

    // The only state in the main component
    // is whether the form is visible or not
    this.state = { visible: false };
  }

  addForm = () => {
    this.setState({ visible: true });
  }

  removeForm = () => {
    this.setState({ visible: false });
  }

  handleSubmit = (form) => {
    console.log(form);
  }

  render() {
    
    const { visible } = this.state;
    const { config } = this.props;
    
    return (

      <div>
        <button
          type="button"
          onClick={this.addForm}
        >Add form
        </button>

        {visible && (
          <Form
            config={config}
            handleSubmit={this.handleSubmit}
            handleClose={this.removeForm}
          />
        )}

      </div>
    );
  
  }

};