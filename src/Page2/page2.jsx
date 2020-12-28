import React, { Component } from 'react'
import "./style.scss"

export default class page2 extends Component {


    state = {
        test_scope: "100",
        dummy_values: [
            {
                name: "Guruprasad BR",
                psi: "1885"
            },
            {
                name: "Vishram",
                psi: "1886"
            },
            {
                name: "Prajwal",
                psi: "1887"
            },
            {
                name: "Pavithra",
                psi: "1888"
            },
        ],
        users: []

    }


    get_all_user = () => {
        // https://reqres.in/api/users?page=2

        fetch("https://reqres.in/api/users?page=2")
            .then(response => response.json())
            .then(response => {
                this.setState({ users: response["data"] })
            })
            .catch((e) => console.error(e))

    }


    componentDidMount() {
        this.get_all_user()
    }


    test_func(param1, event) {
        console.log(param1, event.target.value)
        alert(JSON.stringify(this.state))
    }


    test4_func() {
        alert(JSON.stringify(this.state))
    }

    test2_func = () => {
        alert(JSON.stringify(this.state))
    }


    render() {
        return (
            <div className="page2">
                <center><h1>Page2</h1>
                <a href="" >Open page1</a><br /><br />
                <input type="button" className="btn btn-dark" value="test works" onClick={this.test_func.bind(this, 10)} /><br /><br />
                <input type="button" className="btn btn-dark" value="test2 not work" onClick={this.test4_func} /><br /><br />
                <input type="button" className="btn btn-dark" value="test3 work" onClick={this.test2_func} /><br /><br />


                <h2>Check html update on state value change</h2>

                <input type="text" onChange={(e) => {
                    let dummy_values = this.state.dummy_values
                    dummy_values[0].name = e.target.value
                    this.setState({ dummy_values: dummy_values })
                }} />


                <h2>Tutorial group</h2>

                 <table>
                    <tr>
                        <th>Name</th>
                        <th>PSI</th>
                    </tr>

                    {
                        this.state.dummy_values.map(dummy_value => {
                            return <tr>
                                <td>{dummy_value.name}</td>
                                <td>{dummy_value.psi}</td>
                            </tr>
                        })
                    }

                </table>



                <h2>Test demo API</h2>

                <table>
                    <thead>
                        <tr>
                            {/* {
                                this.state.users.length ?
                                    Object.keys(this.state.users[0]).map(key => <th>{key}</th>)
                                    :
                                    <th>No data</th>
                            } */}
                            <th>User id</th>
                            <th>Email</th>

                        </tr>

                        {
                            this.state.users.map(user => {
                                let keys = Object.keys(user)
                                // return <tr>
                                //     {keys.map(key => <td>{user[key]}</td>)}
                                // </tr>

                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })
                        }
                    </thead>
                </table>

                   <input type="button" className="btn btn-warning" value="test bootstrap" /></center>

            </div>
        )
    }
}
