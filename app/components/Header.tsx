export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Keeper
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/useState">
                  useState
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Forms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/eventhandling">
                  Event Handling
                </a>
              </li>{" "}
              <li className="nav-item">
                <a className="nav-link" href="/complexstate">
                  Complex State
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/todolist">
                  ToDoList
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
