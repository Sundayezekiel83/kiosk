import React from "react";

const AuthPagesLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-1 place-items-center">
      <section className="relative left !bg-white/90 flex justify-center items-center h-screen overflow-auto">
        {children}
      </section>
    </main>
  );
};

export default AuthPagesLayout;
