import React from 'react'
import { useAction } from './hooks/useActions';
import { useTypedSelector } from './hooks/userTypedSelector';


export const TodoList: React.FC = () => {
    const {todo, page, loading, limit, error} =  useTypedSelector(state => state.todo);
    const {fetchTodo} = useAction()
    const  pages = [1,2,3,4,5];

    React.useEffect(()=>{ 
        fetchTodo(page,limit)
    }, [])

 

    return ( 
        <div>
            {todo.map((todo)=>{
                return ( 
                    <div key={Date.now() + todo.id}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.completed}</h2>
                    </div>
                )
            })}
            {!loading && 
                <div style={{display:"flex"}}> 
                    {pages.map((p) => { 
                        return ( 
                            <div style={{border: p === page ? '2px solid grey' : '1px solid green' , margin: 5, padding: 15}}>
                                {p}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
};
