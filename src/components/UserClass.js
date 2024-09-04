import react from "react";

class UserClass extends react.Component{
  constructor(props){
    super(props);   
console.log("child contructor")
    this.state = {    
        user : {
          name : "dummy",
          email : "dummy"
        }
    }
  }
  render(){
    const {name, email} = this.state.user
    console.log(name + "render")
  return (
    <div>
      <h1>name : {name}</h1>
      <h1>email : {email}</h1>
    </div>
  )
  }

  async componentDidMount(){
    console.log( this.state.user.name +  "child did mount")
    try{
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await data.json();
      this.setState({
        user : jsonData[0]
      })
      this.timer = setInterval(()=>{
        console.log("setinterval")
      }, 1000)
    }catch(err){
      console.log(err)
    }
   
  }
  componentDidUpdate(){
    console.log(name + "componentDidUpdate")
  }
  componentWillUnmount(){
    console.log(this.state.user.name + "component willUnmount")
    clearInterval(this.timer);
  }
}

export default UserClass;