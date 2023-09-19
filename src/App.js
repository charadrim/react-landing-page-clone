import './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div>
          <a href="/#">Logo</a>
          <nav>
            <ul>
              <li>
                <a href="/#">Features</a>
              </li>
              <li>
                <a href="/#">Featured on Product Hunt</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section class="section_1">
          <h1>A space odyssey awaits you.</h1>
          <br />
          <p>
            Beautiful space images and information of your current sky map
            location on every <a href="/#">new tab</a>.
          </p>
          <br />
          <div>
            <a href="/#">Link</a>
          </div>
          <br />
          <div>Image</div>
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
