import React from "react";

export default function Home() {
  return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <section>
                <h2>Projects</h2>
                <p>Here are some of my projects...</p>
                {/* Add project details here */}
            </section>
            <section>
                <h2>Skills</h2>
                <p>These are my skills...</p>
                {/* Add skills details here */}
            </section>
            <section>
                <h2>Contact</h2>
                <p>You can reach me at...</p>
                {/* Add contact information here */}
            </section>
        </div>
    );
}