import React from 'react';
export default function ContactForm() {
  return (
    <>
      <header>
        <h2>
          Contact
        </h2>
      </header>
      <div className="content">
        <p>
          <strong>Suntem capabili</strong> să facem față oricărei provocări cum ar fi: ornamente, figurine și portrete complet distruse
sau sparte, profile de toate tipurile, bosaje, asize sau orice element architectural degradat sau distrus ce necesită
întregire sau a fi turnat din nou cu același tip de material ca și originalul.
        </p>
        <form>
          <div className="fields">
            <div className="field half">
              <input type="text" name="name" id="name" placeholder="Nume" />
            </div>
            <div className="field half">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="message"
                placeholder="Mesaj"
                rows="7"
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Trimite Mesaj"
                className="button primary"
              />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
