import TasksFilter from './TasksFilter';
function Footer({ tasks , setFilter,filter}) {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter filter={filter} setFilter={setFilter}/>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
export default Footer;
