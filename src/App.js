import React from "react";

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			input:"Write code here...",
			output:"",
			err: ""
		}
		this.update = this.update.bind(this);
	}

	update(e){
		let code = e.target.value;
		try{
			this.setState({
				output: window.Babel
				.transform(code, {presets: ['es2015', "react"]})
				.code,
				err:""
			})
		}
		catch(err){
			this.setState({err: err.message});
		}
	}

	render(){
		return(
			<div>
			  <header>JSX Compiler</header>
			  <div className="container">
				<textarea onChange={this.update} defaultValue={this.state.input}></textarea>
				<pre>{this.state.output}</pre>
			  </div>
			  <footer>{this.state.err}</footer>
			</div>
		)
	}
} 

export default App;
