import React from "react"
import useForm from "./hooks/useForm"

export default function MyForm() {
  const [values, handleChange, resetForm] = useForm({
    name: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", values)
    resetForm()
  }

  return (
    <div>
      <h2>Custom Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        /><br/>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        /><br/>
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  )
}
