import React from 'react'
import { Formik, Field, Form } from 'formik';
import validationShema from "./validations"
import { useTodo } from '../../contexts/TodoContext';

const NewForm = () => {
  const{addTodo}=useTodo();

  return (
    <Formik
      initialValues={{
        text:""
      }}
      onSubmit={async (values,bag) => {
        
        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema={validationShema}
    >
  <Form>
    <Field className="new-todo"
    placeholder="What needs to be done?"
    autoFocus 
    id="text"
    name="text"/>
    
</Form>
</Formik>
  )
}

export default NewForm
