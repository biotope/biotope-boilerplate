module.exports = function (plop) {
	plop.setGenerator('statefulComponent', {
		description: 'a default biotope component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'component name'
			},
			{
				type: 'input',
				name: 'description',
				message: 'component description'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.ts',
				templateFile: 'generators/component/stateful/component.hbs',
				skipIfExists: true
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.reducer.ts',
				templateFile: 'generators/component/stateful/reducer.hbs',
				skipIfExists: true
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.actions.ts',
				templateFile: 'generators/component/stateful/actions.hbs',
				skipIfExists: true
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.state.ts',
				templateFile: 'generators/component/stateful/state.hbs',
				skipIfExists: true
			},
			{
				type: 'add',
				path: 'src/components/{{name}}/scaffolding/demo.hbs',
				templateFile: 'generators/component/stateful/scaffolding/demo.hbs',
				skipIfExists: true
			},
			{
				type: 'add',
				path: 'src/pages/01Components.{{camelCase name}}.hbs',
				templateFile: 'generators/component/page.hbs',
				skipIfExists: true
			}
		]
	});
};
