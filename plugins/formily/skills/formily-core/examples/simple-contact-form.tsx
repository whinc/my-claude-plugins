import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Create form instance
const form = createForm<ContactForm>({
  initialValues: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  validateFirst: true
})

// Reusable string field component
const StringField: React.FC<{
  name: keyof ContactForm
  label: string
  type?: string
  required?: boolean
}> = ({ name, label, type = 'text', required = false }) => (
  <Field name={name}>
    {(field, state) => (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
        <input
          type={type}
          value={state.value || ''}
          onChange={e => field.onInput(e.target.value)}
          onBlur={() => field.onBlur()}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: state.errors ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px'
          }}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        {state.errors && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {state.errors[0]}
          </div>
        )}
      </div>
    )}
  </Field>
)

// Textarea field component
const TextareaField: React.FC<{
  name: keyof ContactForm
  label: string
  required?: boolean
}> = ({ name, label, required = false }) => (
  <Field name={name}>
    {(field, state) => (
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
        <textarea
          value={state.value || ''}
          onChange={e => field.onInput(e.target.value)}
          onBlur={() => field.onBlur()}
          rows={4}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: state.errors ? '1px solid red' : '1px solid #ccc',
            borderRadius: '4px',
            resize: 'vertical'
          }}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        {state.errors && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {state.errors[0]}
          </div>
        )}
      </div>
    )}
  </Field>
)

// Main contact form component
const SimpleContactForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Validate form
      await form.validate()

      // Get form values
      const values = form.values
      console.log('Form submitted:', values)

      // Here you would typically send the data to your API
      alert('Form submitted successfully!')

      // Reset form
      form.reset()
    } catch (errors) {
      console.error('Validation errors:', errors)
      alert('Please fix the errors before submitting')
    }
  }

  const handleReset = () => {
    form.reset()
  }

  return (
    <FormProvider form={form}>
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <StringField name="name" label="Name" required />
          <StringField
            name="email"
            label="Email"
            type="email"
            required
          />
          <StringField name="subject" label="Subject" />
          <TextareaField name="message" label="Message" required />

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {/* Debug panel - remove in production */}
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '0.875rem'
        }}>
          <h3>Form Values (Debug)</h3>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
          <h3>Form Errors (Debug)</h3>
          <pre>{JSON.stringify(form.errors, null, 2)}</pre>
        </div>
      </div>
    </FormProvider>
  )
}

export default SimpleContactForm