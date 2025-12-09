import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import { Form, FormItem, Input, Button, Select, Checkbox } from '@formily/antd'

/**
 * Migration Template for Converting React Forms to Formily
 *
 * This template provides a structured approach for migrating existing React forms.
 * Replace the interface and schema with your specific form requirements.
 */

// STEP 1: Define your form interface (replace with your form fields)
interface MigratedFormValues {
  // Basic fields
  name: string
  email: string
  phone?: string

  // Selection fields
  userType: 'personal' | 'business'
  category: string

  // Boolean fields
  agreeToTerms: boolean

  // Nested objects
  address?: {
    street: string
    city: string
    country: string
  }

  // Arrays
  tags?: string[]
}

// STEP 2: Create form instance with initial values and effects
const createMigratedForm = () => {
  return createForm<MigratedFormValues>({
    // Set initial values
    initialValues: {
      name: '',
      email: '',
      phone: '',
      userType: 'personal',
      category: '',
      agreeToTerms: false,
      tags: []
    },

    // Configure validation
    validateFirst: true,

    // Add form effects for dynamic behavior
    effects() {
      // Example: Show/hide fields based on user type
      onFieldChange('userType', ['value'], (field) => {
        const userType = field.value

        // Show phone field for business users
        form.setFieldState('phone', state => {
          state.visible = userType === 'business'
          state.required = userType === 'business'
        })
      })

      // Example: Dynamic field options
      onFieldChange('userType', ['value'], (field) => {
        const userType = field.value

        // Update category options based on user type
        const categoryOptions = userType === 'business'
          ? [
              { label: 'Technology', value: 'tech' },
              { label: 'Finance', value: 'finance' },
              { label: 'Healthcare', value: 'healthcare' }
            ]
          : [
              { label: 'Personal', value: 'personal' },
              { label: 'Family', value: 'family' },
              { label: 'Education', value: 'education' }
            ]

        form.setFieldState('category', state => {
          state.dataSource = categoryOptions
          state.value = categoryOptions.length > 0 ? categoryOptions[0].value : ''
        })
      })
    }
  })
}

// STEP 3: Define form schema
const formSchema = {
  type: 'object',
  properties: {
    // Basic string fields
    name: {
      type: 'string',
      title: 'Full Name',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': [
        { required: true, message: 'Name is required' },
        { min: 2, message: 'Name must be at least 2 characters' }
      ]
    },

    email: {
      type: 'string',
      title: 'Email Address',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': [
        { required: true, message: 'Email is required' },
        { format: 'email', message: 'Invalid email format' }
      ]
    },

    // Conditional phone field
    phone: {
      type: 'string',
      title: 'Phone Number',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-validator': [
        { pattern: /^[0-9]{10}$/, message: 'Phone must be 10 digits' }
      ]
    },

    // Selection fields
    userType: {
      type: 'string',
      title: 'User Type',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        options: [
          { label: 'Personal', value: 'personal' },
          { label: 'Business', value: 'business' }
        ]
      }
    },

    category: {
      type: 'string',
      title: 'Category',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: 'Select category'
        // Options will be populated dynamically
      }
    },

    // Boolean field
    agreeToTerms: {
      type: 'boolean',
      title: '',
      'x-decorator': 'FormItem',
      'x-component': 'Checkbox',
      'x-component-props': {
        children: 'I agree to the terms and conditions'
      },
      'x-validator': [
        {
          validator: (value: boolean) => {
            return value ? '' : 'You must agree to the terms'
          }
        }
      ]
    },

    // Nested address object
    address: {
      type: 'object',
      title: 'Address',
      'x-decorator': 'FormItem',
      'x-component': 'Card',
      'x-component-props': {
        title: 'Address Information',
        size: 'small'
      },
      properties: {
        street: {
          type: 'string',
          title: 'Street Address',
          'x-decorator': 'FormItem',
          'x-component': 'Input'
        },
        city: {
          type: 'string',
          title: 'City',
          'x-decorator': 'FormItem',
          'x-component': 'Input'
        },
        country: {
          type: 'string',
          title: 'Country',
          'x-decorator': 'FormItem',
          'x-component': 'Select',
          'x-component-props': {
            options: [
              { label: 'United States', value: 'us' },
              { label: 'United Kingdom', value: 'uk' },
              { label: 'Canada', value: 'ca' }
            ]
          }
        }
      }
    },

    // Array field for tags
    tags: {
      type: 'array',
      title: 'Tags',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        mode: 'tags',
        placeholder: 'Add tags',
        tokenSeparators: [',']
      }
    }
  }
}

// STEP 4: Create schema field component
const createSchemaFieldComponent = () => {
  return createSchemaField({
    // Import and register components
    components: {
      Form,
      FormItem,
      Input,
      Button,
      Select,
      Checkbox,
      Card
    }
  })
}

// STEP 5: Main form component
const MigratedFormTemplate: React.FC = () => {
  // Create form instance
  const form = createMigratedForm()

  // Create schema field component
  const SchemaField = createSchemaFieldComponent()

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Validate entire form
      await form.validate()

      // Get form values
      const values = form.values
      console.log('Form submitted:', values)

      // Submit to API
      await submitForm(values)

      // Show success message
      alert('Form submitted successfully!')

      // Reset form if needed
      form.reset()

    } catch (errors) {
      console.error('Validation errors:', errors)
      alert('Please fix validation errors before submitting')
    }
  }

  // Handle form reset
  const handleReset = () => {
    form.reset()
  }

  // Example: Add new tag programmatically
  const addTag = () => {
    const currentTags = form.values.tags || []
    const newTag = `tag-${currentTags.length + 1}`
    form.setValues({
      tags: [...currentTags, newTag]
    })
  }

  return (
    <FormProvider form={form}>
      <Card title="Migrated Form Template" style={{ maxWidth: 800, margin: '0 auto' }}>
        <Form
          labelCol={6}
          wrapperCol={16}
          layout="horizontal"
        >
          {/* Render schema fields */}
          <SchemaField schema={formSchema} />

          {/* Form actions */}
          <FormItem wrapperCol={{ offset: 6, span: 16 }}>
            <space>
              <Button type="primary" onClick={handleSubmit}>
                Submit Form
              </Button>
              <Button onClick={handleReset}>
                Reset Form
              </Button>
              <Button onClick={addTag} type="dashed">
                Add Tag
              </Button>
            </space>
          </FormItem>

          {/* Debug information - remove in production */}
          <FormItem wrapperCol={{ span: 24 }}>
            <Card size="small" title="Debug Information">
              <pre style={{
                fontSize: '12px',
                maxHeight: '300px',
                overflow: 'auto',
                backgroundColor: '#f5f5f5',
                padding: '12px'
              }}>
                {JSON.stringify(form.values, null, 2)}
              </pre>
            </Card>
          </FormItem>
        </Form>
      </Card>
    </FormProvider>
  )
}

// STEP 6: API submission function (replace with your actual API call)
const submitForm = async (values: MigratedFormValues): Promise<void> => {
  // Simulate API call
  console.log('Submitting to API:', values)

  // Replace with your actual API call
  // const response = await fetch('/api/submit', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(values)
  // })

  // if (!response.ok) {
  //   throw new Error('Submission failed')
  // }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
}

export default MigratedFormTemplate

/**
 * Migration Checklist:
 *
 * □ Define form interface with all fields
 * □ Create form instance with initial values
 * □ Define form schema with validation rules
 * □ Register all required components
 * □ Implement form submission handler
 * □ Add form reset functionality
 * □ Test all validation scenarios
 * □ Remove debug information in production
 * □ Add error handling for API calls
 * □ Optimize performance for complex forms
 */