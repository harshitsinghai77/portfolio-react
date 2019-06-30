import React from 'react';
import { Form, Input, notification  } from 'antd';
import { useCookies } from 'react-cookie';
import Header from '../header/header';
import Avatar from '../introduction/avatar.svg'
import '../css/main.css';

function ContactForm(props) {

    const setCookie = useCookies(['name']);

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const openNotificationWithIcon = (type, name)=> {
        notification[type]({
          message: "Sure, The coffee is on me!!",
          description:
            `Thanks,${name} for reacing out to me.You query has been saved. I will get back to you as soon as possbile`,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const formDetails = {
                name : values.name,
                email: values.email,
                description: values.description
            }
            window.axiosInstance.post('contact-form', formDetails)
                .then(res => {
                    props.form.resetFields();
                    let today = new Date();
                    const finalDate = new Date(today.setDate(today.getDate() + 400))
                    setCookie[1]('name',values.name, { path: '/', expires: finalDate })
                    openNotificationWithIcon('success', values.name)
                })
          }
        });
    };
    
    const { getFieldDecorator} = props.form;    

    return(
        <div>
            <Header />
            <div className="is-form-page">
                <section className="is-white has-text-centered">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-three-quarters"><img className="avatar" alt = "avatarImage" src={Avatar} />
                                    <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{props.title}</h1>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="is-white">
                    <div className="container">     
                        <form id="form" onSubmit={handleSubmit}>
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control is-expanded">
                                            <Form.Item>
                                                {getFieldDecorator('name', {
                                                    rules: [{ required: true, message: 'Name is required' }],
                                                })(<Input size="large" style = {{fontSize: '1.4rem', fontWeight: '300'}} />)}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control is-expanded">
                                            <Form.Item>
                                                {getFieldDecorator('email', {
                                                    rules: [
                                                        { type: 'email',
                                                        message: 'The input is not valid E-mail!',
                                                        },
                                                        {
                                                        required: true,
                                                        message: 'Email is required',
                                                        }],
                                                })(<Input size="large" style = {{fontSize: '1.4rem', fontWeight: '300'}}  />
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Additional details</label>
                                        <div className="control is-expanded">
                                            <Form.Item>
                                                {getFieldDecorator('description', {
                                                    rules: [{ required: true, message: 'Description of the project is required' }],
                                                })(<Input.TextArea rows={5} style = {{fontSize: '1.4rem', fontWeight: '300'}} />)}
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column is-one-third">
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
    
}

const ProjectFormWrapper = Form.create({ name: 'horizontal_login' })(ContactForm);
export default ProjectFormWrapper;