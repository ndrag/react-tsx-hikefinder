import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> { // React.Component<P, S> - Because this is typescript, we must define the interface we expect our props and state inputs to adhere to. Typescript = more boilerplate - here's a good example :)
	constructor(props: IAppProps) { // The props object required by this constructor MUST match the spec specified in the interface below - note that there's no spec there yet, just a name!
		super(props);
		this.state = {
			skills: [] // Skills is initialised as an empty array we'll fill with a list of DB elements. Note that we've declared is as part of our IAppState interface below.
		};
	}

	async componentDidMount() { // Run this code as soon as our component mounts.
		try {
			let r = await fetch('/api/tramps'); // Aysnc call to our local server.
			let skills = await r.json(); // unpack the json response to the skills var.
			this.setState({ skills });
		} catch (error) {
			console.log(error);
		}
	}

	render() { // Default render function - the JSX to render and display when the App class component is added to the site.
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">My Applet</h1>
				<ul className="list-group">
					{this.state.skills.map((skill, i) => { // map every element of the returned skills object to a new LI.
						return <li className="list-group-item" key={i}>{skill.Name}{skill.Type}{skill.Difficulty}</li> // Bootstrap classes to make things look nice
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	skills: Array<any>; // Could put everything that comes back from the table here. Props on our table. Currently implicitly assuming we have what we need when we go to unpack it.
}

export default App;
