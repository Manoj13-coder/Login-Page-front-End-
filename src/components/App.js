import React, { Component } from 'react';
import './App.css';
import Entry from './Entry.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Web3 from 'web3';
import secureLogin from '../abis/secureLogin.json';
import $ from 'jquery';
window.jQuery = $;
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			account: null,
			access: null,
            particular: null
		};
	}
	async componentWillMount(){
	    await this.loadWeb3()
	    await this.loadBlockchainData()
	}
	async loadWeb3() {
	    if (window.ethereum) {
	      window.web3 = new Web3(window.ethereum)
	      await window.ethereum.enable()
	    }
	    else if (window.web3) {
	      window.web3 = new Web3(window.web3.currentProvider)
	    }
	    else {
	      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
	    }
	}
	async loadBlockchainData() {
      const web3 = window.web3
      const accounts = await web3.eth.getAccounts()
      this.setState({account : accounts[0]})
      const networkId = await web3.eth.net.getId()
      const networkData = secureLogin.networks[networkId]
      if(networkData) {
        const access = web3.eth.Contract(secureLogin.abi, networkData.address)
        this.setState({access : access})
      }else{
      	alert("Connect it to your localhost !!")
      }
    }
	Login_Hash = async (event) =>{
		event.preventDefault();
		const x = document.getElementById('password').value;
		const y = document.getElementById('email').value
		if(!x || !y){
			window.alert('Please fill your complete details');
			return;
		}
		const email = await this.state.access.methods.get_Hash(y).call()
		const password = await this.state.access.methods.get_Hash(x).call()
		const data = {email,password};
		fetch("http://localhost:5000/Login",{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		}).then(async(result)=>{
			const res = await result.json();
			const value = JSON.stringify(res);
			console.log(value);
			if(res === 'Login successfull'){
				alert('Login Successfull')
			}else{
				alert('Incorrect password or email')
			}
		});
	}
	Sign_Hash = async (event) =>{
		event.preventDefault();
		const x = document.getElementById('new_password').value;
		const y = document.getElementById('new_email').value
		if(!x || !y){
			window.alert('Please fill your complete details');
			return;
		}
		const email = await this.state.access.methods.get_Hash(y).call()
		const password = await this.state.access.methods.get_Hash(x).call()
		const recover = await this.state.access.methods.get_Hash(email+password+email+password).call()
		const data = {email,password,recover};
		fetch("http://localhost:5000/Signup",{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		}).then(async(result)=>{
			const res = await result.json();
			console.log(JSON.stringify(res));
		});
	}
	Fpwd = async (event) =>{
		event.preventDefault();
		const x = document.getElementById('f_email').value;
		const y = document.getElementById('f_hash').value;
		const z = document.getElementById('f_pass').value;
		if(!x || !y || !z){
			window.alert('Please fill your complete details');
			return;
		}
		const email = await this.state.access.methods.get_Hash(x).call()
		const recover = y;
		const password = await this.state.access.methods.get_Hash(z).call()
		const data = {email,recover,password};
		fetch("http://localhost:5000/Forgot",{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		}).then(async(result)=>{
			const res = await result.json();
			console.log(JSON.stringify(res));
		});
	}
	Del = async (event) =>{
		event.preventDefault();
		const x = document.getElementById('f_email1').value;
		const y = document.getElementById('f_hash1').value;
		const z = document.getElementById('f_pass1').value;
		if(!x || !y || !z){
			window.alert('Please fill your complete details');
			return;
		}
		const email = await this.state.access.methods.get_Hash(x).call()
		const recover = y;
		const password = await this.state.access.methods.get_Hash(z).call()
		const data = {email,recover,password};
		fetch("http://localhost:5000/Delete",{
			method:'POST',
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		}).then(async(result)=>{
			const res = await result.json();
			console.log(JSON.stringify(res));
		});
	}
  	render(){
    	return (
			<Entry Login_Hash={this.Login_Hash} Sign_Hash={this.Sign_Hash} Fpwd={this.Fpwd} Del={this.Del}/>
		);
	}
}
export default App;