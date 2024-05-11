// Write your code here
import './index.css'

const TodoItem = props => {
  const {userDetails, onDeleteUser} = props
  const {title, id} = userDetails

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p className="user-name">{title}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}
export default TodoItem
