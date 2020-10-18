import React from 'react';
import { Field, reduxForm } from 'redux-form';

// class based component because we need some helper functions in-here
class streamForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {this.renderError(meta)}
            </div>

        );
        // return <input onChange={formProps.input.onChange} value={formProps.input.value} /> //Long one
    }


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                {/*Field is some form of input, it may be text, checkbox, radio etc..
        name here is the property that this Field is going to manage*/}
                <Field name="title" component={this.renderInput} label="Title" />
                <Field name="description" component={this.renderInput} label="Description" />
                <button className="ui inverted primary button">Submit</button>
            </form>
        )

    }

}


const validate = (formValues) => {
    const errors = {};
    // error property names should be same as those used for "name" in Field
    if (!formValues.title) {
        // only run if user didnt enter a title
        errors.title = "You must enter a Title"
    }
    if (!formValues.description) {
        errors.description = "You must enter a Description"
    }
    return errors;
}


// reduxForm has similar functionality to connect function method
export default reduxForm({
    form: 'streamForm',
    validate
})(streamForm);

// All the props in-here are part of the automatic system that is going to be used to--
// get form values into a element and then get changes back out and update the redux-form reducer



