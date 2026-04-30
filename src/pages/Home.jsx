import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, ref, push } from "../firebase";

export default function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await push(ref(db, "emails"), {
        email,
        createdAt: Date.now()
      });
      setEmail("");
      alert("Saved");
    } catch (err) {
      console.error(err);
    }
  };

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

          <form className="signup" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Keep in touch</button>
          </form>

          <button
            className="cta-button"
            onClick={() => navigate("/pilot")}
          >
            Explore our pilot
          </button>
        </div>

        <footer>
          Built for students who want campus life to feel easier to find.
        </footer>
      </section>
    </main>
  );
}
