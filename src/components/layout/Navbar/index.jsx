import './styles.css'
function index({children}) {
  return (
    <nav className="navbar">
        {children}
    </nav>
  );
}

export default index;
