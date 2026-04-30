export default function App() {
  return (
    <main className="page">
      <span className="float events">events</span>
      <span className="float clubs">clubs</span>
      <span className="float talks">talks</span>
      <span className="float arrow">↘</span>
      <span className="doodle star-one">✦</span>
      <span className="doodle star-two">✶</span>
      <span className="doodle loop"></span>

      <section className="hero">
        <div>
          <div className="brand">HuskyNow</div>
          <h1>HuskyNow</h1>
          <p className="tagline">Know what’s going on on campus?</p>
          <p className="description">
            A small campus event calendar for UW students. Find RSO events,
            talks, workshops, and the things people usually hear about too late.
          </p>

          <form className="signup">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Keep in touch</button>
          </form>
          <p className="note">Pilot run in summer. Coming in fall.</p>
        </div>

        <footer>
          Built for students who want campus life to feel easier to find.
        </footer>
      </section>
    </main>
  );
}
