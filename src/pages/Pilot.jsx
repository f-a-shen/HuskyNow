export default function Pilot() {
  const events = [
    {
      id: 1,
      title: "Intro Session",
      date: "2026-06-10",
      description: "Welcome event"
    }
  ];

  const generateLink = (event) => {
    const base = "https://www.google.com/calendar/render?action=TEMPLATE";
    return `${base}&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}`;
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Pilot Events</h1>

      <div>
        {events.map((e) => (
          <div key={e.id} style={{ border: "1px solid #ccc", padding: 12, marginTop: 12 }}>
            <h3>{e.title}</h3>
            <p>{e.date}</p>
            <p>{e.description}</p>
            <a href={generateLink(e)} target="_blank">Add to calendar</a>
          </div>
        ))}
      </div>
    </div>
  );
}
