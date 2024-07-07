
const root  = ReactDOM.createRoot(document.getElementById("root"));
const root1  = ReactDOM.createRoot(document.getElementById("root1"));
const element = React.createElement("div", {id:"parent"}, [
  React.createElement("div", {id:"child1"}, [
    React.createElement("h1", {id:"heading1"}, "I am an h1 tag"),
    React.createElement("h2", {id:"heading2"}, "i am an h2 tag")
  ]),
  React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "i am an h2 tag")
  ])
])

alert("u can see darshan")

root.render(element)
root1.render(element)