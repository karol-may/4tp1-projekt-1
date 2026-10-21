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
                {users.map(()=>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    </div>
    )
}

export {UserPage}