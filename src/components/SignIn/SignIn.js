import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 yellow">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0 green">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-black w-100" 
			        	type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-black w-100" 
			        	type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
				    onClick={() => onRouteChange('home')}
				    className="b ph3 pv2 input-reset ba b--navy bg-transparent grow pointer f6 dib yellow" 
				    type="submit" 
				    value="Sign in"
			      />
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('signup')} className="f6 link dim black pointer db light-blue">Sign up</p>
			    </div>
			  </div>
			</main>
		</article>
	);
}

export default SignIn;