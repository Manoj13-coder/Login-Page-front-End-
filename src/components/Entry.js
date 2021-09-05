import React,{Component} from 'react'
class Entry extends Component{
    render(){
    	return (
			<div>
				<nav className="navbar navbar-expand bg-white navbar-light" id="First_Nav">
					<img className="brand" src="https://st2.depositphotos.com/1364916/6359/v/600/depositphotos_63590137-stock-illustration-blue-book-logo-vector.jpg"></img>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link btn text-secondary" data-toggle="modal" data-target="#myModal1">Signin</a>
						</li>
						<li className="nav-item">
							<a className="nav-link btn text-secondary" data-toggle="modal" data-target="#myModal2">Signup</a>
						</li>
			  			<li className="nav-item mr-3">
			     			<a className="nav-link btn text-secondary" data-toggle="modal" data-target="#myModal3">Help</a>
			  			</li>
					</ul>
					<div className="modal" id="myModal1">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
								<h4 className="modal-title">Signin</h4>
								<button type="button" className="close" data-dismiss="modal" style={{outline:"none"}}>&times;</button>
								</div>
								<div className="modal-body">
									<form>
										<label htmlFor="email">Email</label>
										<input id="email" className="form-control mb-3" type="email" name="email" required/>
										<label htmlFor="password">Password</label>
										<input id="password" className="form-control mb-3" type="password" name="password" required/>
										<button className="btn btn-dark mt-3 mb-3" type="submit" onClick={this.props.Login_Hash}>Signin</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="modal" id="myModal2">
						<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Signup</h4>
								<button type="button" className="close" data-dismiss="modal" style={{outline:"none"}}>&times;</button>
							</div>
							<div className="modal-body">
							<form method="POST">
								<label htmlFor="email">New Email</label>
								<input id="new_email" className="form-control mb-3" type="email" name="new_email" required/>
								<label htmlFor="password">New Password</label>
								<input id="new_password" className="form-control mb-3" type="password" name="new_password" required/>
								<button className="btn btn-dark mt-3 mb-3" type="submit" onClick={this.props.Sign_Hash}>Signup</button>
							</form>
							<small id="hash-show"></small>
							</div>
						</div>
						</div>
					</div>
					<div className="modal" id="myModal3">
						<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Help</h4>
								<button type="button" className="close" data-dismiss="modal" style={{outline:"none"}}>&times;</button>
							</div>
							<div className="modal-body text-center">
								<a href="" className="text-decoration-none" data-toggle="modal" data-target="#myModal4">Forgot password</a><br/><br/>
								<a href="" className="text-decoration-none" data-toggle="modal" data-target="#myModal5">Delete account</a>
							</div>
						</div>
						</div>
					</div>
					<div className="modal" id="myModal4">
						<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Forgot</h4>
								<button type="button" className="close" data-dismiss="modal" style={{outline:"none"}}>&times;</button>
							</div>
							<div className="modal-body text-center">
								<form method="POST">
									<label htmlFor="f_email">Email</label>
									<input id="f_email" className="form-control w-75 mx-auto" required type="email"/>
									<label htmlFor="f_hash">Recover Hash</label>
									<input id="f_hash" className="form-control w-75 mx-auto" required type="password"/>
									<label htmlFor="f_pass">New Password</label>
									<input id="f_pass" className="form-control w-75 mx-auto" required type="password"/>
									<button type="sumbit" className="btn btn-secondary mt-3" onClick={this.props.Fpwd}>Change</button>
								</form>
							</div>
						</div>
						</div>
					</div>
					<div className="modal" id="myModal5">
						<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Delete</h4>
								<button type="button" className="close" data-dismiss="modal" style={{outline:"none"}}>&times;</button>
							</div>
							<div className="modal-body text-center">
								<form method="POST">
									<label htmlFor="f_email1">Email</label>
									<input id="f_email1" className="form-control w-75 mx-auto" required type="email"/>
									<label htmlFor="f_hash1">Recover Hash</label>
									<input id="f_hash1" className="form-control w-75 mx-auto" required type="password"/>
									<label htmlFor="f_pass1">Password</label>
									<input id="f_pass1" className="form-control w-75 mx-auto" required type="password"/>
									<button type="sumbit" className="btn btn-secondary mt-3" onClick={this.props.Del}>Delete Account</button>
								</form>
							</div>
						</div>
						</div>
					</div>
				</nav>
				<header>
					<div className="container-fluid mb-5 mt-5">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-12 text-center">
								<h1><q>DocShare</q></h1>
								<h1 id="animate" className="text-secondary mt-3 mb-5"></h1>
							</div>
							<div className="col-lg-8 col-md-8 col-12 text-center">
								<div id="show">
									<div id="first"></div>
									<div id="second"></div>
									<div id="third"></div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<main className="mt-5 mb-5">
					<h2 className="text-center mx-auto mt-2 mb-3">Features</h2>
					<div className="container-fluid" id="info">
						<div className="row">
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-12">
								<div className="card mx-auto text-center" style={{border:"none"}}>
									<img className="mx-auto text-center rounded-circle" src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" width='80' height='80'/>
									<div className="card-body">
										<h5>Free books availability to explore all new world of knowledge to read anything from anywhere</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
}}
export default Entry