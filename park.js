export function createVisitor(name, age, ticketId) {
  const obj = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return obj;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;

  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId]) {
    return "sold to " + tickets[ticketId];
  } else if (tickets[ticketId] === null) {
    return "not sold";
    // eslint-disable-next-line no-prototype-builtins
  } else if (tickets.hasOwnProperty(ticketId) === false) {
    return "unknown ticket id";
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId]) {
    return tickets[ticketId];
  } else if (
    // eslint-disable-next-line no-prototype-builtins
    tickets.hasOwnProperty(ticketId) === false ||
    tickets[ticketId] === null
  ) {
    return "invalid ticket !!!";
  }
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}

// Sample usage for testing:
console.log(createVisitor("Verena Nardi", 45, "H32AZ123")); //  { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }
console.log(
  revokeTicket({ name: "Verena Nardi", age: 45, ticketId: "H32AZ123" })
); // { name: 'Verena Nardi', age: 45, ticketId: null }
console.log(
  ticketStatus({ "0H2AZ123": null, "23LA9T41": "Verena Nardi" }, "RE90VAW7")
); // 'unknown ticket id'
console.log(
  ticketStatus({ "0H2AZ123": null, "23LA9T41": "Verena Nardi" }, "0H2AZ123")
); // 'not sold''
console.log(
  ticketStatus({ "0H2AZ123": null, "23LA9T41": "Verena Nardi" }, "23LA9T41")
); // 'sold to Verena Nardi'
console.log(
  simpleTicketStatus(
    { "0H2AZ123": null, "23LA9T41": "Verena Nardi" },
    "23LA9T41"
  )
); // 'Verena Nardi'
console.log(
  simpleTicketStatus(
    { "0H2AZ123": null, "23LA9T41": "Verena Nardi" },
    "0H2AZ123"
  )
); // 'invalid ticket !!!'
console.log(
  simpleTicketStatus(
    { "0H2AZ123": null, "23LA9T41": "Verena Nardi" },
    "RE90VAW7"
  )
); // 'invalid ticket !!!'
console.log(
  gtcVersion({
    name: "Verena Nardi",
    age: 45,
    ticketId: "H32AZ123",
    gtc: { signed: true, version: "2.1" },
  })
); // '2.1'
console.log(
  gtcVersion({ name: "Verena Nardi", age: 45, ticketId: "H32AZ123" })
); // 'undefined'
