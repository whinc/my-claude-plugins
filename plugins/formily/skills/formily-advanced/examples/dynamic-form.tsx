import React, { useState, useEffect } from 'react'
import { createForm, onFieldChange, onFieldMount } from '@formily/core'
import { FormProvider, Form, FormItem, Input, Select, Checkbox, Button } from '@formily/antd'
import { Card, Row, Col, Space, message } from 'antd'
import { observer } from '@formily/reactive-react'

// Types for our dynamic form
interface DynamicFormValues {
  userType: 'personal' | 'business' | 'student'
  // Personal fields
  name: string
  email: string
  phone: string
  // Business fields
  companyName: string
  industry: string
  employeeCount: string
  // Student fields
  schoolName: string
  studentId: string
  grade: string
  // Dynamic skill fields
  skills: Array<string>
  // Dynamic address fields
  addresses: Array<{
    type: 'home' | 'work' | 'other'
    street: string
    city: string
    country: string
  }>
}

const DynamicFormExample: React.FC = () => {
  const [form] = useState(() => createForm<DynamicFormValues>({
    initialValues: {
      userType: 'personal',
      name: '',
      email: '',
      phone: '',
      companyName: '',
      industry: '',
      employeeCount: '',
      schoolName: '',
      studentId: '',
      grade: '',
      skills: [],
      addresses: []
    },
    effects() {
      // Show/hide fields based on user type
      onFieldChange('userType', ['value'], (field) => {
        const userType = field.value

        // Business fields visibility
        form.setFieldState('companyName', state => {
          state.visible = userType === 'business'
          if (userType !== 'business') state.value = ''
        })

        form.setFieldState('industry', state => {
          state.visible = userType === 'business'
          if (userType !== 'business') state.value = ''
        })

        form.setFieldState('employeeCount', state => {
          state.visible = userType === 'business'
          if (userType !== 'business') state.value = ''
        })

        // Student fields visibility
        form.setFieldState('schoolName', state => {
          state.visible = userType === 'student'
          if (userType !== 'student') state.value = ''
        })

        form.setFieldState('studentId', state => {
          state.visible = userType === 'student'
          if (userType !== 'student') state.value = ''
        })

        form.setFieldState('grade', state => {
          state.visible = userType === 'student'
          if (userType !== 'student') state.value = ''
        })

        // Adjust required validation
        form.setFieldState('name', state => {
          state.required = userType !== 'business'
        })

        form.setFieldState('companyName', state => {
          state.required = userType === 'business'
        })

        form.setFieldState('schoolName', state => {
          state.required = userType === 'student'
        })
      })

      // Dynamic industry options based on country
      onFieldChange('country', ['value'], (field) => {
        const country = field.value
        let industryOptions: Array<{ label: string; value: string }> = []

        if (country === 'us') {
          industryOptions = [
            { label: 'Technology', value: 'tech' },
            { label: 'Finance', value: 'finance' },
            { label: 'Healthcare', value: 'healthcare' },
            { label: 'Retail', value: 'retail' }
          ]
        } else if (country === 'uk') {
          industryOptions = [
            { label: 'Technology', value: 'tech' },
            { label: 'Finance', value: 'finance' },
            { label: 'Manufacturing', value: 'manufacturing' },
            { label: 'Healthcare', value: 'healthcare' }
          ]
        } else {
          industryOptions = [
            { label: 'General Business', value: 'general' },
            { label: 'Services', value: 'services' },
            { label: 'Education', value: 'education' }
          ]
        }

        form.setFieldState('industry', state => {
          state.dataSource = industryOptions
          state.value = industryOptions.length > 0 ? industryOptions[0].value : ''
        })
      })

      // Dynamic grade options based on school type
      onFieldMount('schoolType', (field) => {
        form.setFieldState('grade', state => {
          state.dataSource = [
            { label: '1st Grade', value: '1' },
            { label: '2nd Grade', value: '2' },
            { label: '3rd Grade', value: '3' },
            { label: '4th Grade', value: '4' },
            { label: '5th Grade', value: '5' }
          ]
        })
      })
    }
  }))

  // Add new skill
  const addSkill = () => {
    const currentSkills = form.values.skills || []
    const newSkills = [...currentSkills, '']
    form.setValues({ skills: newSkills })
  }

  // Remove skill
  const removeSkill = (index: number) => {
    const currentSkills = form.values.skills || []
    const newSkills = currentSkills.filter((_, i) => i !== index)
    form.setValues({ skills: newSkills })
  }

  // Update skill
  const updateSkill = (index: number, value: string) => {
    const currentSkills = form.values.skills || []
    const newSkills = [...currentSkills]
    newSkills[index] = value
    form.setValues({ skills: newSkills })
  }

  // Add new address
  const addAddress = () => {
    const currentAddresses = form.values.addresses || []
    const newAddresses = [...currentAddresses, {
      type: 'home' as const,
      street: '',
      city: '',
      country: ''
    }]
    form.setValues({ addresses: newAddresses })
  }

  // Remove address
  const removeAddress = (index: number) => {
    const currentAddresses = form.values.addresses || []
    const newAddresses = currentAddresses.filter((_, i) => i !== index)
    form.setValues({ addresses: newAddresses })
  }

  // Update address field
  const updateAddressField = (addressIndex: number, field: string, value: any) => {
    const currentAddresses = form.values.addresses || []
    const newAddresses = [...currentAddresses]
    newAddresses[addressIndex] = {
      ...newAddresses[addressIndex],
      [field]: value
    }
    form.setValues({ addresses: newAddresses })
  }

  // Handle form submission
  const handleSubmit = async () => {
    try {
      await form.validate()
      const values = form.values
      console.log('Form submitted:', values)
      message.success('Form submitted successfully!')
    } catch (errors) {
      console.error('Validation errors:', errors)
      message.error('Please fix validation errors')
    }
  }

  // Reset form
  const handleReset = () => {
    form.reset()
  }

  return (
    <FormProvider form={form}>
      <Card title="Dynamic Form Example" style={{ maxWidth: 800, margin: '0 auto' }}>
        <Form labelCol={6} wrapperCol={16}>
          {/* User Type Selection */}
          <FormItem name="userType" label="User Type">
            <Select>
              <Select.Option value="personal">Personal</Select.Option>
              <Select.Option value="business">Business</Select.Option>
              <Select.Option value="student">Student</Select.Option>
            </Select>
          </FormItem>

          {/* Personal Information */}
          <FormItem name="name" label="Name">
            <Input placeholder="Enter your name" />
          </FormItem>

          <FormItem name="email" label="Email">
            <Input placeholder="Enter your email" />
          </FormItem>

          <FormItem name="phone" label="Phone">
            <Input placeholder="Enter your phone number" />
          </FormItem>

          {/* Business Information - Conditionally Visible */}
          <FormItem name="companyName" label="Company Name" style={{ display: 'none' }}>
            <Input placeholder="Enter company name" />
          </FormItem>

          <FormItem name="industry" label="Industry" style={{ display: 'none' }}>
            <Select placeholder="Select industry">
              {/* Options will be populated dynamically based on country */}
            </Select>
          </FormItem>

          <FormItem name="employeeCount" label="Employee Count" style={{ display: 'none' }}>
            <Select placeholder="Select employee count">
              <Select.Option value="1-10">1-10</Select.Option>
              <Select.Option value="11-50">11-50</Select.Option>
              <Select.Option value="51-200">51-200</Select.Option>
              <Select.Option value="201+">201+</Select.Option>
            </Select>
          </FormItem>

          {/* Student Information - Conditionally Visible */}
          <FormItem name="schoolName" label="School Name" style={{ display: 'none' }}>
            <Input placeholder="Enter school name" />
          </FormItem>

          <FormItem name="studentId" label="Student ID" style={{ display: 'none' }}>
            <Input placeholder="Enter student ID" />
          </FormItem>

          <FormItem name="grade" label="Grade" style={{ display: 'none' }}>
            <Select placeholder="Select grade">
              {/* Options will be populated dynamically */}
            </Select>
          </FormItem>

          {/* Dynamic Skills Section */}
          <FormItem label="Skills">
            <Card size="small" style={{ marginBottom: 16 }}>
              {(form.values.skills || []).map((skill, index) => (
                <Row key={index} gutter={8} style={{ marginBottom: 8 }}>
                  <Col span={20}>
                    <Input
                      value={skill}
                      onChange={(e) => updateSkill(index, e.target.value)}
                      placeholder={`Skill ${index + 1}`}
                    />
                  </Col>
                  <Col span={4}>
                    <Button
                      type="text"
                      danger
                      onClick={() => removeSkill(index)}
                      style={{ width: '100%' }}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              ))}
              <Button type="dashed" onClick={addSkill} style={{ width: '100%' }}>
                Add Skill
              </Button>
            </Card>
          </FormItem>

          {/* Dynamic Addresses Section */}
          <FormItem label="Addresses">
            <Card size="small">
              {(form.values.addresses || []).map((address, addressIndex) => (
                <Card
                  key={addressIndex}
                  type="inner"
                  title={`Address ${addressIndex + 1}`}
                  size="small"
                  style={{ marginBottom: 16 }}
                  extra={
                    <Button
                      type="text"
                      danger
                      onClick={() => removeAddress(addressIndex)}
                    >
                      Remove
                    </Button>
                  }
                >
                  <Row gutter={16}>
                    <Col span={8}>
                      <Select
                        value={address.type}
                        onChange={(value) => updateAddressField(addressIndex, 'type', value)}
                        style={{ width: '100%', marginBottom: 8 }}
                      >
                        <Select.Option value="home">Home</Select.Option>
                        <Select.Option value="work">Work</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Input
                        value={address.street}
                        onChange={(e) => updateAddressField(addressIndex, 'street', e.target.value)}
                        placeholder="Street address"
                        style={{ marginBottom: 8 }}
                      />
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Input
                        value={address.city}
                        onChange={(e) => updateAddressField(addressIndex, 'city', e.target.value)}
                        placeholder="City"
                        style={{ marginBottom: 8 }}
                      />
                    </Col>
                    <Col span={12}>
                      <Select
                        value={address.country}
                        onChange={(value) => updateAddressField(addressIndex, 'country', value)}
                        placeholder="Country"
                        style={{ width: '100%' }}
                      >
                        <Select.Option value="us">United States</Select.Option>
                        <Select.Option value="uk">United Kingdom</Select.Option>
                        <Select.Option value="ca">Canada</Select.Option>
                      </Select>
                    </Col>
                  </Row>
                </Card>
              ))}
              <Button type="dashed" onClick={addAddress} style={{ width: '100%' }}>
                Add Address
              </Button>
            </Card>
          </FormItem>

          {/* Form Actions */}
          <FormItem wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button onClick={handleReset}>
                Reset
              </Button>
            </Space>
          </FormItem>

          {/* Debug Information */}
          <Card title="Debug Information" size="small" style={{ marginTop: 24 }}>
            <pre style={{ fontSize: '12px', maxHeight: 300, overflow: 'auto' }}>
              {JSON.stringify(form.values, null, 2)}
            </pre>
          </Card>
        </Form>
      </Card>
    </FormProvider>
  )
}

export default observer(DynamicFormExample)