import React from "react";

const FAQ = () => {
  return (
    <div id="FAQ" className="">
      <h1 className="text-center text-white mb-5">FAQ</h1>

      <div className="faqs-container">
        <div className="faqs">
          <div className="question">
            <h2>What service do you offer?</h2>
            <p>
              We are the nexus between investors and players in the world "play
              to earn", we manage large amounts of players and income in
              cryptocurrencies in a safe and transparent way. Managing up to 10
              players can be an easy task, but when the numbers exceed 30 teams
              it becomes very difficult to keep track and manage rewards. That
              is why we specialize in generating tools to manage large flows of
              operations.
            </p>
          </div>
          <div className="question">
            <h2>How risky are the investments?</h2>
            <p>
              Everything related to cryptocurrencies is considered high risk,
              but having so good returns capital recovery times are much shorter
              than any other type of known investment.
            </p>
          </div>
          <div className="question">
            <h2>What guarantees are there?</h2>
            <p>
              We guarantee the management and security of all our internal
              processes. Like any investment, risk exists, and although the
              selection of projects is based on the security they provide,
              fluctuations in the crypto market can be very large and that
              volatility has no guarantees.
            </p>
          </div>
          <div className="question">
            <h2>How sustainable are they in the long term?</h2>
            <p>
              We believe that these projects are in an initial stage, with a
              great future ahead that can change the way of seeing the world's
              economies. And it is not an exaggeration, taking into account that
              in countries like the Philippines this model exceeded the nation's
              GDP and they are already evaluating taxing those who gamble to
              earn money.
            </p>
          </div>
        </div>
        <img
          className="question-mark"
          alt="question-mark"
          src="./assets/vectors/question-mark.svg"
        />
      </div>
    </div>
  );
};

export default FAQ;
