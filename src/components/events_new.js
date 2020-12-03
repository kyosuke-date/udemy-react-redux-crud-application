import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { postEvents } from '../action/action';

class EventsNew extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field){
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
    )
  }

  async onSubmit(values){
    await this.props.postEvents(values)
    this.props.history.push("/")
  }

  render(){
    console.log(this.props);
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" type="text" name="title" component={this.renderField} /></div>
        <div><Field label="Body" type="text" name="body" component={this.renderField} /></div>
        
        <div>
          <input type="submit" value="submit" disabled={pristine || submitting || invalid} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a Title, please"
  if(!values.body) errors.body = "Enter a Body, please"

  return errors;
}
const mapDispatchToProps = ({ postEvents })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
  )
