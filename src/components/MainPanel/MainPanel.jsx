// import { Components } from 'react';

// class MainPanel extends Components {}

function MainPanel({ title, options }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>UAH</p>
      <ul>
        {options.map(({ period, sum }) => (
          <li key={period}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
      <button type="button">+</button>
    </section>
  );
}

export default MainPanel;
