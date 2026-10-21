function UserPage(){

    type UserType = {
        id: number;
        name: string;
        surname: string;
        email: string;
    }
    let users : UserType[] = [
        {id:1,name:"Karol",surname:"May",email:"karol@imay.pl"},
        {id:2,name:"Adam",surname:"September",email:"adam@iseptember.pl"}
    ]


    return (
    <div className="container mt-2">
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imię:</th>
                    <th>Nazwisko:</th>
                    <th>E-mail:</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {users.map((v,i)=>
                    <tr key={i}>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.surname}</td>
                        <td>{v.email}</td>
                        <td className="d-flex gap-2">
                            <button className="btn btm-sm btn-info"><i className="bi bi-eye-fill"></i></button>
                            <button className="btn btm-sm btn-primary"><i className="bi bi-pencil-fill"></i></button>
                            <button className="btn btm-sm btn-danger"><i className="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </table>
    </div>
    )
}

export {UserPage}