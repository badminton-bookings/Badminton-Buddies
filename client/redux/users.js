import axios from 'axios'

// Action Types //

const GET_USERS = 'GET_USERS';
const CREATE_USER = 'CREATE_USER';
const EDIT_USER = 'EDIT_USER'

// Action Constants //

const getUsers = (users) => ({
  type: GET_USERS,
  users
})

export const thunkGetUsers = () => async dispatch => {
  try {
    const {data: users} = await axios.get('/api/users')
    dispatch(getAllUsers(users))
  } catch (error) {
    console.error(error)
  }
}
