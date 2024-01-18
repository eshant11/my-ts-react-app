import axios from 'axios';
import { error } from 'console';
import React, { Component, ChangeEvent, FormEvent } from 'react'

interface userDetail {
    firstName: string,
    lastName: string,
    email: string,
}
class PostForm extends Component<any, userDetail>{
    constructor(props: any) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        }
        // Bind the eventHandler to the class instance
        this.eventHandler = this.eventHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    eventHandler(e: ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(this.state);
    }
    componentDidMount(): void {
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((response) => { console.log(response) }
        ).catch((error: any) => console.log(error)
        )
    }
    render() {
        const { firstName, lastName, email } = this.state
        return (
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <input type="text" name="firstName" onChange={this.eventHandler} value={firstName} id="" />
                    <input type="text" name="lastName" onChange={this.eventHandler} value={lastName} id="" />
                    <input type="email" name="email" onChange={this.eventHandler} value={email} id="" />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm