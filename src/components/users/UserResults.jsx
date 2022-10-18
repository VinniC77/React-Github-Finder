import { useState, useEffect } from "react";
import Spinner from "../layout/Spinner";

const UserResults = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, []) // Sempre que a página carregar, dispara a função fetchUsers

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            }
// Aqui fazemos um request para a URL do github com o usuário que o usuário quiser pesquisar sobre. E o segundo argumento, é o token que passamos atrvés de headers e setando o authorization de acordo. Assim enviando o token junto com a requisição            
        })

        const data = await response.json() // Aqui transformamos a informação no tipo JSON

        console.log(data)

        setUsers(data)
        setLoading(false)
    }

    console.log(users)

    if (!loading) {
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user) => {
                    return <h3>{user.login}</h3>
                })}
            </div>
        )
    } else {
        return <Spinner />
    }

}

export default UserResults