import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/react'
import {
  Form,
  FormItem,
  Input,
  Select,
  DatePicker,
  Radio,
  Checkbox,
  Button,
  Card,
  Row,
  Col,
  Tabs,
  Space,
  Divider
} from '@formily/antd'
import { Tabs as AntTabs } from 'antd'

const { TabPane } = AntTabs

// Schema field factory
const createFormSchemaField = () => {
  return createSchemaField({
    components: {
      Form,
      FormItem,
      Input,
      Select,
      DatePicker,
      Radio,
      Checkbox,
      Button,
      Card,
      Row,
      Col,
      Tabs,
      Space,
      Divider
    }
  })
}

// Example 1: Basic Single Column Layout
const BasicLayoutExample: React.FC = () => {
  const form = createForm()
  const SchemaField = createFormSchemaField()

  const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Full Name',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-component-props': {
          placeholder: 'Enter your full name'
        }
      },
      email: {
        type: 'string',
        title: 'Email Address',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-validator': [
          { required: true, message: 'Email is required' },
          { format: 'email', message: 'Invalid email format' }
        ]
      },
      phone: {
        type: 'string',
        title: 'Phone Number',
        'x-decorator': 'FormItem',
        'x-component': 'Input'
      }
    }
  }

  return (
    <Card title="Basic Layout" style={{ marginBottom: 24 }}>
      <FormProvider form={form}>
        <Form labelCol={6} wrapperCol={16}>
          <SchemaField schema={schema} />
          <FormItem wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary">Submit</Button>
              <Button>Reset</Button>
            </Space>
          </FormItem>
        </Form>
      </FormProvider>
    </Card>
  )
}

// Example 2: Two Column Grid Layout
const GridLayoutExample: React.FC = () => {
  const form = createForm()
  const SchemaField = createFormSchemaField()

  const schema = {
    type: 'object',
    properties: {
      personalInfo: {
        type: 'void',
        'x-component': 'Row',
        'x-component-props': { gutter: 16 },
        properties: {
          firstName: {
            type: 'string',
            title: 'First Name',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
              placeholder: 'First name'
            },
            'x-decorator-props': {
              span: 12
            }
          },
          lastName: {
            type: 'string',
            title: 'Last Name',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
              placeholder: 'Last name'
            },
            'x-decorator-props': {
              span: 12
            }
          }
        }
      },
      contactInfo: {
        type: 'void',
        'x-component': 'Row',
        'x-component-props': { gutter: 16 },
        properties: {
          email: {
            type: 'string',
            title: 'Email',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-decorator-props': {
              span: 12
            }
          },
          phone: {
            type: 'string',
            title: 'Phone',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-decorator-props': {
              span: 12
            }
          }
        }
      }
    }
  }

  return (
    <Card title="Grid Layout" style={{ marginBottom: 24 }}>
      <FormProvider form={form}>
        <Form>
          <SchemaField schema={schema} />
        </Form>
      </FormProvider>
    </Card>
  )
}

// Example 3: Tabs Layout
const TabsLayoutExample: React.FC = () => {
  const form = createForm()
  const SchemaField = createFormSchemaField()

  const schema = {
    type: 'object',
    properties: {
      tabs: {
        type: 'void',
        'x-component': 'Tabs',
        'x-component-props': {
          defaultActiveKey: 'basic'
        },
        properties: {
          basic: {
            type: 'void',
            'x-component': 'Tabs.TabPane',
            'x-component-props': {
              tab: 'Basic Information',
              key: 'basic'
            },
            properties: {
              name: {
                type: 'string',
                title: 'Name',
                'x-decorator': 'FormItem',
                'x-component': 'Input'
              },
              email: {
                type: 'string',
                title: 'Email',
                'x-decorator': 'FormItem',
                'x-component': 'Input'
              },
              age: {
                type: 'number',
                title: 'Age',
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                  type: 'number'
                }
              }
            }
          },
          advanced: {
            type: 'void',
            'x-component': 'Tabs.TabPane',
            'x-component-props': {
              tab: 'Advanced Settings',
              key: 'advanced'
            },
            properties: {
              bio: {
                type: 'string',
                title: 'Bio',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-component-props': {
                  rows: 4
                }
              },
              interests: {
                type: 'array',
                title: 'Interests',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  mode: 'multiple',
                  options: [
                    { label: 'Sports', value: 'sports' },
                    { label: 'Music', value: 'music' },
                    { label: 'Travel', value: 'travel' },
                    { label: 'Reading', value: 'reading' }
                  ]
                }
              }
            }
          }
        }
      }
    }
  }

  return (
    <Card title="Tabs Layout" style={{ marginBottom: 24 }}>
      <FormProvider form={form}>
        <Form labelCol={6} wrapperCol={16}>
          <SchemaField schema={schema} />
        </Form>
      </FormProvider>
    </Card>
  )
}

// Example 4: Nested Card Layout
const NestedCardExample: React.FC = () => {
  const form = createForm()
  const SchemaField = createFormSchemaField()

  const schema = {
    type: 'object',
    properties: {
      personalInfo: {
        type: 'void',
        'x-component': 'Card',
        'x-component-props': {
          title: 'Personal Information',
          size: 'small'
        },
        properties: {
          name: {
            type: 'string',
            title: 'Full Name',
            'x-decorator': 'FormItem',
            'x-component': 'Input'
          },
          email: {
            type: 'string',
            title: 'Email',
            'x-decorator': 'FormItem',
            'x-component': 'Input'
          }
        }
      },
      address: {
        type: 'void',
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
      }
    }
  }

  return (
    <Card title="Nested Card Layout" style={{ marginBottom: 24 }}>
      <FormProvider form={form}>
        <Form labelCol={6} wrapperCol={16}>
          <SchemaField schema={schema} />
        </Form>
      </FormProvider>
    </Card>
  )
}

// Example 5: Complex Form with Multiple Layouts
const ComplexFormExample: React.FC = () => {
  const form = createForm()
  const SchemaField = createFormSchemaField()

  const schema = {
    type: 'object',
    properties: {
      header: {
        type: 'void',
        'x-component': 'Row',
        'x-component-props': { gutter: 16 },
        properties: {
          title: {
            type: 'string',
            title: 'Project Title',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-decorator-props': {
              span: 16
            }
          },
          priority: {
            type: 'string',
            title: 'Priority',
            'x-decorator': 'FormItem',
            'x-component': 'Select',
            'x-component-props': {
              options: [
                { label: 'Low', value: 'low' },
                { label: 'Medium', value: 'medium' },
                { label: 'High', value: 'high' }
              ]
            },
            'x-decorator-props': {
              span: 8
            }
          }
        }
      },
      divider1: {
        type: 'void',
        'x-component': 'Divider'
      },
      tabs: {
        type: 'void',
        'x-component': 'Tabs',
        properties: {
          details: {
            type: 'void',
            'x-component': 'Tabs.TabPane',
            'x-component-props': {
              tab: 'Project Details',
              key: 'details'
            },
            properties: {
              description: {
                type: 'string',
                title: 'Description',
                'x-decorator': 'FormItem',
                'x-component': 'Input.TextArea',
                'x-component-props': {
                  rows: 4
                }
              },
              startDate: {
                type: 'string',
                title: 'Start Date',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker'
              },
              endDate: {
                type: 'string',
                title: 'End Date',
                'x-decorator': 'FormItem',
                'x-component': 'DatePicker'
              }
            }
          },
          team: {
            type: 'void',
            'x-component': 'Tabs.TabPane',
            'x-component-props': {
              tab: 'Team Members',
              key: 'team'
            },
            properties: {
              teamLead: {
                type: 'string',
                title: 'Team Lead',
                'x-decorator': 'FormItem',
                'x-component': 'Input'
              },
              members: {
                type: 'array',
                title: 'Team Members',
                'x-decorator': 'FormItem',
                'x-component': 'Select',
                'x-component-props': {
                  mode: 'multiple',
                  placeholder: 'Select team members'
                }
              }
            }
          }
        }
      },
      divider2: {
        type: 'void',
        'x-component': 'Divider'
      },
      settings: {
        type: 'void',
        'x-component': 'Card',
        'x-component-props': {
          title: 'Settings',
          size: 'small'
        },
        properties: {
          notifications: {
            type: 'boolean',
            title: 'Email Notifications',
            'x-decorator': 'FormItem',
            'x-component': 'Checkbox'
          },
          public: {
            type: 'boolean',
            title: 'Public Project',
            'x-decorator': 'FormItem',
            'x-component': 'Checkbox'
          }
        }
      }
    }
  }

  return (
    <Card title="Complex Form with Multiple Layouts">
      <FormProvider form={form}>
        <Form>
          <SchemaField schema={schema} />
          <FormItem>
            <Space>
              <Button type="primary">Create Project</Button>
              <Button>Save as Draft</Button>
              <Button>Cancel</Button>
            </Space>
          </FormItem>
        </Form>
      </FormProvider>
    </Card>
  )
}

// Main component showcasing all layouts
const FormLayoutExamples: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Formily Ant Design Layout Examples</h1>

      <BasicLayoutExample />
      <GridLayoutExample />
      <TabsLayoutExample />
      <NestedCardExample />
      <ComplexFormExample />
    </div>
  )
}

export default FormLayoutExamples