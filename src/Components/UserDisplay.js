import React from "react";

const DisplayUsers = (props) =>{

    const renderTable =({userData}) =>{
        console.log(userData)
        if (userData){
            return userData.map((item) =>{
                return(
                    <tr key={item._id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>

                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>

            </table>


        </div>
    )


}


export default DisplayUsers