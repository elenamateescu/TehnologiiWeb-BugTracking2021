import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Bug app
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/adaugaproiect">
                Adaugă proiect nou
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/joinastester">
                Alatură-te ca tester
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
