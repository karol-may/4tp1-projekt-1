import { useState } from "react"
import type { UserType } from "./UserPage";

export const UserNewPage = () => {

    let [formData,setFormData]= useState<UserType>({
        id: undefined,
        name: "",
        surname: "",
        email: ""
    });

return <div>
    <form>
        <div className="mb-3">
            <label className="form-label" htmlFor="name">Imię:</label>
            <input value={formData.name} onChange={formDataChangeHandler} className="form-control" type="text" id="name" name="name"/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="surname">Nazwisko:</label>
            <input value={formData.surname} onChange={formDataChangeHandler} className="form-control" type="text" id="surname" name="surname"/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="email">E-mail:</label>
            <input value={formData.email} onChange={formDataChangeHandler} className="form-control" type="text" id="email" name="email"/>
        </div>
    </form>
</div>
}