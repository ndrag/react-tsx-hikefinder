import * as React from 'react';

import Header from './Header';

// React components can be functional (display only before hooks were added) or class-based (extend the React component class, state-enabled). Here we're declaring an instance of the latter.
class App extends React.Component<IAppProps, IAppState> { // React.Component<P, S> - Because this is typescript, we must define the interface we expect our props and state inputs to adhere to. Typescript = more boilerplate - here's a good example :)
	constructor(props: IAppProps) { // The props object required by this constructor MUST match the spec specified in the interface below - note that there's no spec there yet, just a name!
		super(props); // Call our parent React Component's constructor - boilerplate.
		this.state = {
			tramps: [] // Skills is initialised as an empty array we'll fill with a list of DB elements. Note that we've declared is as part of our IAppState interface below.
		};
	}

	async componentDidMount() { // Run this code as soon as our component mounts.
		try {
			let r = await fetch('/api/tramps'); // Aysnc call to our local server.
			let tramps = await r.json(); // unpack the json response to the skills var.
			this.setState({ tramps }); // We use a setState function not unlike that provided by the useState hook. Already very clear how useful that'll be in future!
		} catch (error) {
			console.log(error);
		}
	}

	render() { // Default render function - the JSX to render and display when the App class component is added to the site.
		return (
			<main className="container my-5">
				<Header text="Tramp Select" />
				<h1 className="text-primary text-center">My Applet</h1>
				<ul className="list-group">
					{this.state.tramps.map((tramp, i) => { // map every element of the returned skills object to a new LI.
						return <li className="list-group-item" key={i}>{tramp.Name}{tramp.Type}{tramp.Difficulty}</li> // Bootstrap classes to make things look nice
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps { }

export interface IAppState {
	tramps: Array<any>; // Could put everything that comes back from the table here. Props on our table. Currently implicitly assuming we have what we need when we go to unpack it.
}

export default App;

// Notes:
// Note how often the var 'tramps' is repeated. Part of that's typescript interfacing, part of it is the bloat of React classes vs. components - there's a lot of boilerplate. Can't be good for git compares given that a single var change involves some 5+ lines altered in a 45 line script...