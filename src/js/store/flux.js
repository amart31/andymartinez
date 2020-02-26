const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			skills: [
				{
					title: "Pega",
					value: 85
				},
				{
					title: "Java",
					value: 80
				},
				{
					title: "PostgreSQL",
					value: 78
				},
				{
					title: "ReactJs",
					value: 75
				},
				{
					title: "Javascript",
					value: 80
				},
				{
					title: "HTML",
					value: 80
				},
				{
					title: "CSS",
					value: 76
				},
				{
					title: "Bootstrap",
					value: 81
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
