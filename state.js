class Greet extends React.Component{
    state={
        firstName: 'Ajay'
    }
    constructor(props){
        super(props)
        //this.state ={
            //firstName: 'Ajay'
        //} 
    }
    render(){
        return <div>
            <h1>{this.state.firstName}</h1>
            <button onClick={()=>{this.changeName()}}>Change Name </button>
            </div>
    }
    changeName(){
        console.log('Before setState',this.state.firstName);
        this.setState({firstName:'vijay' })
        console.log('After setState',this.state.firstName);
    }
}
ReactDOM.render(<Greet/>,document.getElementById('container'))