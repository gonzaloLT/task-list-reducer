export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add Todo':
            return [action.payload, ...initialState]


        case 'Delete Todo':
            return initialState.filter(todo => todo.id !== action.payload)


        case 'Complete Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })


        case 'Update Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.description
                    }
                }

                return todo;
            })

        default:
            return initialState;
    }
}