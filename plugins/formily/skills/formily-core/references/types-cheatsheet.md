# Formily TypeScript Types Cheatsheet

## Core Types

### Form Instance Types

```typescript
import { Form } from '@formily/core'

// Generic form type
type MyForm = Form<{
  name: string
  email: string
  age: number
}>

// Form with nested objects
type UserForm = Form<{
  profile: {
    name: string
    email: string
    avatar?: string
  }
  settings: {
    notifications: boolean
    theme: 'light' | 'dark'
  }
}>

// Form with arrays
type TeamForm = Form<{
  name: string
  members: Array<{
    name: string
    role: string
    email: string
  }>
  projects: string[]
}>
```

### Field Types

```typescript
import { Field } from '@formily/core'

// Single field type
type NameField = Field<string>

// Number field type
type AgeField = Field<number>

// Optional field type
type AvatarField = Field<string | undefined>

// Array field type
type TagsField = Field<string[]>

// Object field type
type ProfileField = Field<{
  firstName: string
  lastName: string
  email: string
}>
```

## Field State Types

```typescript
interface GeneralFieldState {
  value: any
  initialValue: any
  modified: boolean
  touched: boolean
  active: boolean
  visited: boolean
  valid: boolean
  invalid: boolean
  errors: string[]
  warnings: string[]
  successes: string[]
  loading: boolean
  validating: boolean
  display: boolean
  required: boolean
  disabled: boolean
  readOnly: boolean
  visible: boolean
  hidden: boolean
}
```

### Typed Field State

```typescript
import { createField, GeneralField } from '@formily/core'

// Typed field component props
interface TypedFieldProps<T = any> {
  name: string
  component?: React.ComponentType<any>
  validator?: Validator
  reactions?: IFieldReaction[]
}

// Create typed field
const createTypedField = <T = any>(props: TypedFieldProps<T>) => {
  return createField(props)
}

// Usage
const nameField = createTypedField<string>({
  name: 'name',
  validator: {
    required: true,
    min: 2
  }
})
```

## Schema Types

### JSON Schema Types

```typescript
import { ISchema } from '@formily/json-schema'

// String field schema
const stringFieldSchema: ISchema = {
  type: 'string',
  title: 'Name',
  required: true,
  'x-validator': [
    { required: true, message: 'Name is required' },
    { min: 2, message: 'Name too short' }
  ],
  'x-component': 'Input',
  'x-decorator': 'FormItem'
}

// Number field schema
const numberFieldSchema: ISchema = {
  type: 'number',
  title: 'Age',
  minimum: 0,
  maximum: 150,
  'x-validator': [
    { type: 'number', message: 'Must be a number' }
  ]
}

// Object schema
const objectSchema: ISchema = {
  type: 'object',
  properties: {
    name: { type: 'string', title: 'Name' },
    email: { type: 'string', format: 'email', title: 'Email' }
  },
  required: ['name', 'email']
}

// Array schema
const arraySchema: ISchema = {
  type: 'array',
  title: 'Tags',
  items: {
    type: 'string',
    title: 'Tag'
  },
  'x-component': 'ArrayItems'
}
```

### Custom Schema Types

```typescript
// Define custom form schema type
interface UserFormSchema extends ISchema {
  properties: {
    name: {
      type: 'string'
      title: string
      'x-component': 'Input'
      'x-validator': Array<{
        required?: boolean
        min?: number
        message?: string
      }>
    }
    email: {
      type: 'string'
      format: 'email'
      title: string
      'x-component': 'Input'
    }
    profile: {
      type: 'object'
      title: string
      properties: {
        bio: {
          type: 'string'
          title: string
          'x-component': 'TextArea'
        }
        avatar: {
          type: 'string'
          title: string
          'x-component': 'Upload'
        }
      }
    }
  }
}
```

## Validation Types

### Validator Types

```typescript
import { Validator } from '@formily/core'

// String validator
const stringValidator: Validator = {
  required: true,
  min: 2,
  max: 50,
  pattern: /^[a-zA-Z\s]+$/,
  message: 'Must be 2-50 letters'
}

// Email validator
const emailValidator: Validator = {
  format: 'email',
  message: 'Invalid email format'
}

// Custom validator function
const customValidator: Validator = (value) => {
  if (value && value.includes('spam')) {
    return 'Value cannot contain spam'
  }
  return ''
}

// Async validator
const asyncValidator: Validator = async (value) => {
  const exists = await checkEmailExists(value)
  if (exists) {
    return 'Email already exists'
  }
  return ''
}
```

### Validation Schema Types

```typescript
interface ValidationSchema {
  [field: string]: Validator | Validator[]
}

// Usage
const validationSchema: ValidationSchema = {
  name: {
    required: true,
    min: 2
  },
  email: [
    { required: true, message: 'Email required' },
    { format: 'email', message: 'Invalid email' }
  ],
  password: {
    required: true,
    min: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    message: 'Password must be 8+ chars with uppercase, lowercase, and number'
  }
}
```

## Form Effect Types

### Effect Hook Types

```typescript
import { FormEffects, onFieldChange, onFieldMount, onFormSubmit } from '@formily/core'

// Form effects type
const formEffects: FormEffects = ($) => {
  // Field change effect
  onFieldChange('email', ['value'], (field) => {
    console.log('Email changed:', field.value)
  })

  // Form submit effect
  onFormSubmit(() => {
    console.log('Form submitted')
  })

  // Conditional field visibility
  onFieldChange('hasAccount', ['value'], (field) => {
    $.setFieldState('password', state => {
      state.visible = field.value
    })
  })
}
```

### Custom Effect Types

```typescript
interface CustomFieldEffect {
  type: 'onFieldChange' | 'onFieldFocus' | 'onFieldBlur'
  field: string
  dependencies?: string[]
  callback: (field: any) => void
}

// Create typed effect
const createFieldEffect = <T>(
  type: CustomFieldEffect['type'],
  field: string,
  callback: (field: Field<T>) => void
): CustomFieldEffect => ({
  type,
  field,
  callback
})

// Usage
const nameEffect = createFieldEffect<string>(
  'onFieldChange',
  'name',
  (field) => {
    console.log('Name value:', field.value)
  }
)
```

## Component Props Types

### Form Component Props

```typescript
interface FormComponentProps<T = any> {
  form: Form<T>
  initialValues?: Partial<T>
  onSubmit?: (values: T) => void | Promise<void>
  onReset?: () => void
  onChange?: (values: T) => void
  children?: React.ReactNode
}

// Typed form component
const TypedForm = <T extends Record<string, any>>({
  form,
  initialValues,
  onSubmit,
  children
}: FormComponentProps<T>) => {
  return (
    <FormProvider form={form}>
      {children}
    </FormProvider>
  )
}
```

### Field Component Props

```typescript
interface FieldComponentProps<T = any> {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  type?: string
  validator?: Validator | Validator[]
  onChange?: (value: T) => void
  onBlur?: () => void
}

// Generic field component
const GenericField = <T = any>({
  name,
  label,
  ...props
}: FieldComponentProps<T>) => {
  return (
    <Field name={name}>
      {(field, state) => (
        // Field implementation
      )}
    </Field>
  )
}
```

## Utility Types

### Form Value Extractor

```typescript
import { Form } from '@formily/core'

// Extract form values type
type FormValues<T> = T extends Form<infer U> ? U : never

// Usage
type ContactFormValues = FormValues<typeof contactForm>
// Result: { name: string; email: string; message: string }
```

### Field Path Types

```typescript
// Type-safe field paths
type FieldPath<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${FieldPath<T[K]>}`
          : K
        : never
    }[keyof T]
  : never

// Usage
interface UserForm {
  name: string
  profile: {
    email: string
    avatar?: string
  }
}

type UserFieldPath = FieldPath<UserForm>
// Result: "name" | "profile.email" | "profile.avatar"
```

### Partial Form Type

```typescript
// Make all fields optional recursively
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Usage
type PartialUserForm = DeepPartial<UserForm>
```

## Type Guards

### Form Type Guards

```typescript
// Check if form has errors
const hasFormErrors = (form: Form<any>): boolean => {
  return form.invalid && form.errors.length > 0
}

// Check if field is valid
const isFieldValid = (field: Field<any>): boolean => {
  return field.valid && !field.validating
}

// Type guard for required fields
const isRequiredField = (schema: ISchema): boolean => {
  return schema.required === true || (Array.isArray(schema.required) && schema.required.includes(schema.title || ''))
}
```

## Best Practices

1. **Always define interfaces for your forms** - Provides better TypeScript support
2. **Use generic types** - Reusable components with proper typing
3. **Leverage type inference** - Let TypeScript infer types when possible
4. **Create type-safe utilities** - Build helper functions with proper types
5. **Use discriminated unions** - For complex form state management
6. **Export types** - Share types across your application
7. **Document custom types** - Add JSDoc comments for better developer experience