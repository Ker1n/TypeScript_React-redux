import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../store/actions/user';
import { useAction } from './hooks/useActions';
import { useTypedSelector } from './hooks/userTypedSelector';
import './userList.css'

const UserList: React.FC = () => { 
    
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUsers} = useAction()    

    React.useEffect(()=>{
        fetchUsers()
    },[])

    if(loading) { 
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
    }
    if (error) { 
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user)=>{
                return ( 
                    <div key={Date.now() + user.id}>
                        {user.name}
                    </div>
                ) 
            })}
        </div>        
    ) 
}

export default UserList;