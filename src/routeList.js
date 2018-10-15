import Navigation from 'Constants/navigation.js'


let routeList = [["Admin", "/admin"]];

Navigation.forEach((nav)=>{
	routeList.push([
		nav.folder || nav.name.split(" ").join(""),
		nav.link
	]);

	if (!_.isEmptyArray(nav.children)){
		nav.children.forEach((nav_children)=>{
			routeList.push([
				nav_children.folder || nav_children.name.split(" ").join(""),
				(nav.link + nav_children.link)
			]);
		})
	}
})

export default routeList